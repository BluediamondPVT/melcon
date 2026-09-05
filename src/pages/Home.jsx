import AboutSection from "../components/home/AboutSection";
import HomeHero from "../components/home/HomeHero";
import HomeServices from "../components/home/HomeServices";
import WhyChooseUs from "../components/home/WhyChooseUs";

function Home(){
    return(
        <main>
            <HomeHero/>
            <AboutSection/>
            <HomeServices/>
            <WhyChooseUs/>
        </main>
    )
}
export default Home;