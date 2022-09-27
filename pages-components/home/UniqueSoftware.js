import Image from "next/image";
import React from "react";

function UniqueSoftware() {
  return (
    <div>
      <section id="software_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="left_side_img">
                <figure>
                  <Image
                    src="/assets/images/screenshots_combined_img.png"
                    className="img-fluid"
                    alt="No_image"
                    width="500"
                    height="285"
                    //       layout="fill"
                    //       sizes="(max-width: 768px) 100vw,
                    // (max-width: 1200px) 50vw,
                    // 33vw"
                  />
                </figure>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right_side_text">
                Our unique software is designed with athletes like you in mind.
                Our easy to follow, individually tailored programmes will help
                you to take your performance to the next level.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UniqueSoftware;
