import Hero from "@/components/Hero";
import NewProducts from "@/components/NewProduct";
import Testimonial from "@/components/Testimonial";
import Cart from "@/components/Cart";

export default function Home() {
  return (
    <main>
      <Cart />
      <Hero />
      <NewProducts />
      <Testimonial />
    </main>
  );
}
