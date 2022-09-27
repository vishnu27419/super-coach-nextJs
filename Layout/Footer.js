import Image from "next/image";
import React from "react";
import footerStyle from "../styles/css/footer.module.css";
function Footer() {
  return (
    <div>
      <footer className={footerStyle.footer}>
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-3">
              <div className={footerStyle.footer_menu}>
                <h5>Information</h5>
                <ul>
                  <li>
                    <a href="">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="">Cookie Policy</a>
                  </li>
                  <li>
                    <a href="">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="">FAQs</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={footerStyle.footer_menu}>
                <h5>Follow us</h5>
                <ul className={footerStyle.social_links}>
                  <li>
                    <a href="">
                      <Image
                        // src="assets/images/newsletter_icon.png"
                        src="/assets/images/newsletter_icon.png"
                        alt="no_image"
                        width={20}
                        height={20}
                      />{" "}
                      <span>Newsletter</span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <Image
                        src="/assets/images/fb_icon.png"
                        alt=""
                        width={20}
                        height={20}
                      />{" "}
                      <span>Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <Image
                        src="/assets/images/twitter_icon.png"
                        alt=""
                        width={20}
                        height={20}
                      />{" "}
                      <span>Twitter</span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <Image
                        src="/assets/images/insta_icon.png"
                        alt=""
                        width={20}
                        height={20}
                      />{" "}
                      <span>Instagram</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className={footerStyle.footer_menu}>
                <h5>Get in Touch</h5>
                <button
                  type="button"
                  className={`btn btn-default ${footerStyle.contact_btn}`}
                >
                  contact us{" "}
                  <i className="fa fa-envelope-o" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
