import Head from "next/head";
import Image from "next/image";
import styles from "../styles/css/test.module.css";
import HomeTopBanner from "../pages-components/home/HomeTopBanner";
import ForAthleteAndCoach from "../pages-components/home/ForAthleteAndCoach";
import UniqueSoftware from "../pages-components/home/UniqueSoftware";
import SelectYourSport from "../pages-components/home/SelectYourSport";

export default function Home() {
  return (
    <div>
      <div>
        <HomeTopBanner />
        <ForAthleteAndCoach />
        <UniqueSoftware />
        <SelectYourSport />
      </div>
    </div>
  );
}
