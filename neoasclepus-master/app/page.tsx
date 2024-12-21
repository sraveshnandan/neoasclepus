import MainBody from "@/components/globle/MainBody";
import MainHeader from "@/components/globle/MainHeader";
import About from "@/components/sections/About";
import ContactSection from "@/components/sections/ContactSection";
import GetInTouch from "@/components/sections/CTA";
import { fetchProducts } from "@/service/product.services";


const HomePage = async() => {
  return (
    <div className="w-full bg-white max-w-7xl my-4 mx-auto  md:p-4 p-2  min-h-[calc(100vh-60px)]">
     <MainHeader/>
    <section className="my-4 flex items-center justify-center flex-col">
      <MainBody/>
      <GetInTouch/>
    </section>
    </div>
  );
};

export default HomePage;
