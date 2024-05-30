import { useMutation } from "react-query";
import axios  from "axios";

const API = 'http://localhost:3001/goods'

export const useGetData =() => {
return useMutation(async (path) => {
    try {
        const res = await axios.get(API, path);
        return res.data
    }catch(e){
        console.error( "Error, fetch", e);
        throw e;
    }
});
}