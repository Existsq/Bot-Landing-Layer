import FeatureFirst from "@/components/FeatureFirst";
import UseApp from "@/components/UseApp";
import Stats from "@/components/Stats";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Starter from "@/components/Starter";
import Price from "@/components/Prices";
import News from "@/components/News";
import Blog from "@/components/Blog";
import FeatureSecond from "@/components/FeatureSecond";

export default function Example() {
  return (
    <>
      <div className="sticky top-0 z-[100]">
        <Header></Header>
        <Banner></Banner>
      </div>

      <div className="-z-10">
        <Starter></Starter>
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
