// import AccordionGallery from "./components/Exactimageexpand"
// import ImageAccordion from "./components/ExandImages"
import AccordionGallery from "./components/Expandimage"
import MoreAboutMe from "./components/Featurecard"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Header from "./components/Header"
import HeroSection from "./components/Hero"
import LastSection from "./components/Lastsection"
import New from "./components/New"
import NextFeatures from "./components/Nextfeatures"
import Nextexpand from "./components/Nexttoexpandimage"
// import Hero from "./components/Hero"
const App = () => {
  return (
    <>
      <Header/>
     <HeroSection/>
     
     <MoreAboutMe/>
     <LastSection/>
     <Features/>
     <NextFeatures/>
     <AccordionGallery/>
     <Nextexpand/>
     <New/>
     <Footer/>
     
      {/* <ImageAccordion/>
      <AccordionGallery/> */}
    </>
  )
}

export default App