import Banner from "@/Components/Home/Banner";
import Categories from "@/Components/Home/Categories";
import FeaturedProducts from "@/Components/Home/FeaturedProducts";
import FlashSale from "@/Components/Home/FlashSale";
import Reviews from "@/Components/Home/Reviews";
import Brands from "@/Components/Home/Brands";

export const metadata = {
  title: "Home — Luxoria Premium E-Commerce",
  description: "Shop the finest curated collection of luxury products. Fast delivery, premium quality.",
};

export default function Home() {
  return (
    <div>
      <Banner />
      <Categories />
      <FeaturedProducts
        badge="Handpicked"
        title="Featured"
        highlight="Products"
        limit={8}
      />
      <FlashSale />
      <FeaturedProducts
        badge="Trending Now"
        title="Best"
        highlight="Sellers"
        limit={4}
      />
      <Reviews />
      <Brands />
    </div>
  );
}
