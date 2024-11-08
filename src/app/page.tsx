import Header from "./components/header";
import HomeSection from "./components/home";
import About from "./components/about";
import Skills from "./components/skill";
import Services from "./components/service";
import Contact from "./components/contact";
import Footer from "./components/footer";
export default function Home() {
  return (
    <>
        <Header />
        <HomeSection />
        <About />
        <Skills />
        <Services />
        <Contact />
        <Footer />
    </>
      );
}
