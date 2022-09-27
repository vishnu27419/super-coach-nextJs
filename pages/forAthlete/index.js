import React from "react";
import AthleteTopBanner from "../../pages-components/forAthlete/AthleteTopBanner";
import ForTeams from "../../pages-components/forAthlete/ForTeams";
import YouthAthletes from "../../pages-components/forAthlete/YouthAthletes";

function index() {
  return (
    <div>
      <AthleteTopBanner />
      <ForTeams />
      <YouthAthletes />
    </div>
  );
}

export default index;
