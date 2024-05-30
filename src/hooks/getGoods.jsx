import axios from "axios";
import React, { useContext, useMemo } from "react";
import { useQuery } from "react-query";
import searchContext from "../modules/context/searchContext";

const getGoods = () => {
  const { searchText } = useContext(searchContext);
  const goodsQuery = useQuery("goodsData", async () => {
    const response = await axios.get("http://localhost:3001/goods");
    return response.data;
  });

  const isLoading = bagQuery.isLoading || goodsQuery.isLoading;
  const isError = bagQuery.isError || goodsQuery.isError;

  const filteredGoods = useMemo(() => {
    if (searchText.length >= 2) {
      if (!goodsQuery.data) return [];
      return goodsQuery.data.filter((item) => item.title.toLowerCase().includes(searchText.toLowerCase()));
    } else {
      return [];
    }
  }, [goodsQuery.data, searchText]);


  const res = useMemo(() => {
 if(!goodsQuery.data || !bagQuery.data) return [];
 return goodsQuery.data.filter((item) => bagQuery.data.some((bagItem) => item.id === bagItem.prod_id));
  }, [goodsQuery.data, bagQuery.data])

  return {
    res, 
    Goods: goodsQuery.data,
    search: filteredGoods,
    bagGoods: bagQuery.data,
    isLoading,
    isError,

};
};

export default getGoods;
