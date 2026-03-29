import Banner from "@/Components/Home/Banner";
import Products from "@/Components/Home/Products";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-20">
      <section>
        <Banner></Banner>
      </section>
      <section className="py-1 px-5">
        <Products></Products>
      </section>
    </div>
  );
}
