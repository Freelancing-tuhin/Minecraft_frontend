import React from "react";
import Head from "../../components/shared/Head/Head";
import Header from "../../components/shared/Header/Header";
import ImageSliderHero from "./imageSlider/ImageSlider";
import CardList from "./cardList/CardList";
import Newsstaller from "../../components/shared/newsteller/Newsstaller";
import HomeVideoSection from "../../components/shared/homeVideoSection/HomeVideoSection";
import Footer from "../../components/shared/footer/Footer";
import Hero from "./Hero/HeroSection";
import Services from "./services/Services";
import Navbar from "../../components/shared/navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Head />
      {/* <Header setIsVisible={true} /> */}
      <div className="">
        <Navbar />
        <Hero />
        <section data-w-id="5f9cc665505a9a8ec46d478c" className="body">
          {/* <ImageSliderHero setIsVisible={true} /> */}
          <CardList />
          <Newsstaller />
          {/* <HomeVideoSection /> */}
          {/* <Services /> */}
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default Home;
