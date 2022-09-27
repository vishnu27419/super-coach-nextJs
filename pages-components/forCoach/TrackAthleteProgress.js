import Image from "next/image";
import React from "react";

function TrackAthleteProgress() {
  return (
    <div>
      <section class="youth_athlete_wrapper athlete_progress_wrapper">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-8">
              <div class="athlete-img">
                <figure>
                  <Image
                    src="/assets/images/tablet-img.png"
                    class="img-fluid"
                    alt="No_Image"
                    width={740}
                    height={740}
                  />
                </figure>
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div class="athlete-content pt-lg-5 text-right">
                <h2>
                  Track Your <span>Athletes Progress</span>
                </h2>
                <p>
                  Know exactly how your team members are tracking with Prime
                  Coach. Access athletes reports such as their well-being scale,
                  training details, training intensity, and volume and number of
                  performed or engaged sessions to monitor their progress.
                  Easily share reports with other coaches to ensure the whole
                  coaching team’s in the loop. Also use the leader board to
                  highlight the best performer within the team at any given
                  time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TrackAthleteProgress;
