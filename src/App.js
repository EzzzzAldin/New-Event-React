import OverviewList from "./components/Overview/OverviewList";
import CreativeSpeakersList from "./components/CreativeSpeakers/CreativeSpeakersList";
import ProgramsList from "./components/Programs/ProgramsList";
import SponsorsList from "./components/Sponsors/SponsorsList";

function App() {
  return (
    <div className="App">
      <OverviewList />
      <CreativeSpeakersList />
      <ProgramsList />
      <SponsorsList />
    </div>
  );
}

export default App;
