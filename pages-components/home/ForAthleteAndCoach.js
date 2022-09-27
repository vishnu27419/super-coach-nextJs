import React, { useState, useEffect } from "react";

function ForAthleteAndCoach() {
  console.log("CHILD");
  return (
    <div>
      <section id="coach-athelete_wrapper">
        <div className="container-fluid p-0">
          <div className="row m-0">
            <div className="col-lg-6 p-0 d-flex flex-column">
              <div className="athelete-section h-100">
                <h2>For Athlete</h2>
                <p>
                  Get fitter, stronger & faster using our intelligent online
                  software that offers individually tailored strength &
                  conditioning training plans for any athlete. Our programmes
                  are designed by accredited strength & conditioning coaches
                  with years of experience. Programmes are tailored specifically
                  to each athlete’s training needs & goals covering a range of
                  disciplines for amateur, semi-professional & professional
                  athletes.
                </p>
                <a href="#" className="learn_more">
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-lg-6 p-0 d-flex flex-column">
              <div className="coach-section h-100">
                <h2>For Coaches</h2>
                <p>
                  Get fitter, stronger & faster using our intelligent online
                  software that offers individually tailored strength &
                  conditioning training plans for any athlete. Our programmes
                  are designed by accredited strength & conditioning coaches
                  with years of experience. Programmes are tailored specifically
                  to each athlete’s training needs & goals covering a range of
                  disciplines for amateur, semi-professional & professional
                  athletes.
                </p>
                <a href="#" className="learn_more ">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ForAthleteAndCoach;
