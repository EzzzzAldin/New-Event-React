import OverviewList from "../../components/Overview/OverviewList";
import CreativeSpeakersList from "../../components/CreativeSpeakers/CreativeSpeakersList";
import ProgramsList from "../../components/Programs/ProgramsList";
import SponsorsList from "../../components/Sponsors/SponsorsList";
import MainNavigation from "../../components/Layout/MainNavigation";
import Header from "../../components/Header/Header";

const Home = () => {
  return (
    <>
      <MainNavigation />
      <Header />
      <OverviewList />
      <CreativeSpeakersList />
      <ProgramsList />
      <SponsorsList />
    </>
  );
};

export default Home;
