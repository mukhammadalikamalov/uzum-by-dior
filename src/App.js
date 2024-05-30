// Home.jsx
import axios from "axios";
import { useQuery } from "react-query";
import ProductCard from "./components/ProductCard";
import PrimarySearchAppBar from "./layout/header";
import Usage from "./swiper/caroucel";
import { Container, Grid } from "@mui/material";
import Footer from "./layout/footer";
import { List, ListItem, ListItemText } from '@mui/material';


function Home() {
  const { data, isLoading, isError } = useQuery("goods", async () => {
    const res = await axios.get("http://localhost:3001/goods");
    return res.data;
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  const likedGoods = data.filter((good) => good.status === true);
  const saleGoods = data.filter((good) => good.isBlackFriday);

  const sortedGoods = [...likedGoods, ...saleGoods];

  const slicedGoods = sortedGoods.slice(0, 15);

  const sections = [
    { type: "Armchairs", arr: data.filter((good) => good.type === "furniture") },
    { type: "PC", arr: data.filter((good) => good.type === "PC") },
    { type: "TV", arr: data.filter((good) => good.type === "TV") },
    { type: "Audio", arr: data.filter((good) => good.type === "audio") },
    { type: "Kitchen", arr: data.filter((good) => good.type === "kitchen") },
  ];

  return (
    <Container maxWidth="xl">
      <PrimarySearchAppBar />

      <ul id="links" className="flex gap-4" style={{ marginTop: '16px' }}>
        <li className="flex items-center"> {/* Add flex and items-center classes */}
          <img className="w-5 h-5" src="https://static.uzum.uz/nasiya/union.png" alt="" />
          <a className="ml-1" href="">Muddatli tolov</a>
        </li>
        <li className="flex items-center"> {/* Add flex and items-center classes */}
          <img className="w-5 h-5 ml-8" src="https://static.uzum.uz/fast_categories/new_sale_2023.png" alt="" />
          <a className="ml-1" href="">Sirli toplam</a>
        </li>
        <li className="flex items-center"> {/* Add flex and items-center classes */}
          <img className="w-5 h-5 ml-8" src="https://static.uzum.uz/fast_categories/mens_gifts.png" alt="" />
          <a href="">Erkaklar uchun</a>
          <a className="ml-6 text-slate-400" href="">Elektronika</a>
          <a className="ml-6 text-slate-400" href="">Maishiy texnika</a>
          <a className="ml-6 text-slate-400" href=""> Kiyim</a>
          <a className="ml-6 text-slate-400" href="">Poyabzal</a>
          <a className="ml-6 text-slate-400" href="">Aksessuarlar</a>
          <a className="ml-6 text-slate-400" href="">Gozalik va parvarish</a>
          <a className="ml-6 text-slate-400" href="">Salomatlik</a>
          <a className="ml-6 text-slate-400" href="">Yana &gt;</a>
        </li>
      </ul>


      <Usage />
      <h1 style={{ fontSize: '37px' }}>
        Mashhur
      </h1>
      <Grid container spacing={2} className="prods_div">
        {slicedGoods.map((good) => (
          <Grid item key={good.id} xs={12} sm={6} md={4} lg={3} xl={2}>
            <ProductCard good={good} />
          </Grid>
        ))}
      </Grid>
      {sections.map((item, i) => (
        <section key={i} className="section_style">
          <h1>{item.type}</h1>
          <Grid container spacing={2} className="prods_div">
            {item.arr.map((good) => (
              <Grid item key={`${good.id}_${good.type}`} xs={12} sm={6} md={4} lg={3} xl={2}>
                <ProductCard good={good} />
              </Grid>
            ))}
          </Grid>
        </section>
      ))}
      <Footer />
    </Container>
  );
}

export default Home;
