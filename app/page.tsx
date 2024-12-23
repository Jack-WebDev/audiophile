import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import OptionProducts from "@/components/OptionProducts";
import Earphones from "@/components/specialProducts/Earphones";
import Speaker1 from "@/components/specialProducts/Speaker-1";
import Speaker2 from "@/components/specialProducts/Speaker-2";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <OptionProducts />
      <Speaker1 />
      <Speaker2 />
      <Earphones />
      <CTA />
    </div>
  );
}
