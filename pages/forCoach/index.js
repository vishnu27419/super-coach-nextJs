import React from "react";
import ForCoachTopBanner from "../../pages-components/forCoach/ForCoachTopBanner";
import ProgrammerBuilder from "../../pages-components/forCoach/ProgrammerBuilder";
import TrackAthleteProgress from "../../pages-components/forCoach/TrackAthleteProgress";

function index() {
  return (
    <div>
      <ForCoachTopBanner />
      <ProgrammerBuilder />
      <TrackAthleteProgress />
    </div>
  );
}

export default index;
