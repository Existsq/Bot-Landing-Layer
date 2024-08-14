import FeatureFirst from "@/components/main/FeatureFirst";
import UseApp from "@/components/main/UseApp";
import Stats from "@/components/main/Stats";
import Header from "@/components/main/Header";
import Banner from "@/components/main/Banner";
import HeroSection from "@/components/main/HeroSection";
import Price from "@/components/main/Subscripitons";
import News from "@/components/main/Footer";
import Blog from "@/components/main/Blog";
import { createPortal } from "react-dom";


export default function Home() {
  return (
    <>
      <div className="sticky top-0 z-[100]">
        <Header></Header>
        <Banner></Banner>
      </div>

      <div className="-z-10">
        <HeroSection></HeroSection>
      </div>

      <FeatureFirst></FeatureFirst>

      <FeatureFirst></FeatureFirst>

      <Stats></Stats>

      <Price></Price>

      <Blog></Blog>

      <UseApp></UseApp>

      <News></News>
    </>
  );
}
