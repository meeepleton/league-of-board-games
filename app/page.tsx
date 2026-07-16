import Hero from "@/components/Hero";
import LeagueInfo from "@/components/LeagueInfo";
import GamesGrid from "@/components/GamesGrid";
import EventTimeline from "@/components/EventTimeline";
import Highlights from "@/components/Highlights";
import Winners from "@/components/Winners";
import Venue from "@/components/Venue";
import Sponsors from "@/components/Sponsors";
import Connect from "@/components/Connect";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LeagueInfo />
      <GamesGrid />
      <EventTimeline />
      <Highlights />
      <Winners />
      <Venue />
      <Sponsors />
      <Connect />
    </>
  );
}
