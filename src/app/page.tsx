import Header from "./components/client/header/header";
import Benefit from "./components/section/benefit/benefit";
import Feedback from "./components/section/feedback/feedback";
import Footer from "./components/section/footer/footer";
import ImageSlider from "./components/section/imageSlider/imageslider";
import Kota from "./components/section/kota/kota";
import OpenTrip from "./components/section/open/open";

export default function Home() {
  return (
    <>
      <Header />
      
      <section className=""><ImageSlider/></section>
      <section className=""><OpenTrip/></section>
      <section className=""><Benefit/></section>
      <section className=""><Kota/></section>
      <section className=""><Feedback/></section>
      <section className="bg-gray-100"><Footer/></section>
      
    </>
    
  );
  
}
