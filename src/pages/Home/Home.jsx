import OverviewList from "../../components/Overview/OverviewList";
import CreativeSpeakersList from "../../components/CreativeSpeakers/CreativeSpeakersList";
import ProgramsList from "../../components/Programs/ProgramsList";
import SponsorsList from "../../components/Sponsors/SponsorsList";
import MainNavigation from "../../components/Layout/MainNavigation";
import Header from "../../components/Header/Header";
import AboutUs from "../../components/AboutUs/AboutUs";
import WatchVideo from "../../components/WatchVideo/WatchVideo";
import Register from "../../components/Register/Register";
import AccordionList from "../../components/Accordion/AccordionList";
import Venue from "../../components/Venue/Venue";
import ContactUs from "../../components/Contact/ContactUs";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <MainNavigation />
      <Header />
      <AboutUs />
      <WatchVideo />
      <OverviewList />
      <CreativeSpeakersList />
      <ProgramsList />
      <Register />
      <AccordionList />
      <Venue />
      <SponsorsList />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
