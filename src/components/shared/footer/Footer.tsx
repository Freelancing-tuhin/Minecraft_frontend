/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = ({ homePage }: any) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 475);
    };

    // Check on initial render
    handleResize();

    // Listen for resize events
    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div>
      <section className={isMobile && homePage ? "" : ""}>
        <div className="footer">
          <div className=" footer-grid grid-2 md:flex">
            <div
              id="w-node-_5b3d2ba0-53c8-ba4d-6138-c048d224e3e9-3890e283"
              className="footer-block md:w-[150%]"
            >
              <a
                href="#"
                className="footer-brand margin-top-20 mb-5 w-inline-block"
              >
                <div className="flex items-center flex-shrink-0 ml-4 lg:ml-0">
                  <a href="#" title="" className="inline-flex">
                    <span className="sr-only"> Rareblocks logo </span>
                    <img
                      className="w-auto h-8"
                      src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/logo.svg"
                      alt=""
                    />
                  </a>
                </div>
              </a>

              <p className="body-text mb-3 mt-5">
                HighTable is a unique social experience where you get to dine
                with 4-10 people and engage in meaningful conversations. It’s
                designed for individuals aged 30-45 who enjoy meeting new people
                in a relaxed yet structured environment.
              </p>
              <p className="body-text">
                Our tables create the perfect setting to expand your social
                circle, have engaging discussions, and build real connections.
                If you love good conversations with like-minded people,
                HighTable is for you!
              </p>
              <div className="footer-nav margin-top-desktop-40">
                <Link
                  to={{
                    pathname: "/about-us",
                  }}
                  className="footer-link"
                >
                  About us
                </Link>
                <Link
                  to="/faq"
                  className="footer-link margin-left-desktop-20 margin-top-mobile-10"
                >
                  Faq's
                </Link>

                <Link
                  to="/contact-us"
                  className="footer-link margin-left-desktop-20 margin-top-mobile-10"
                >
                  Contact us
                </Link>

                <Link
                  to="/privacy"
                  className="footer-link margin-left-desktop-20 margin-top-mobile-10"
                >
                  Privacy
                </Link>
              </div>
            </div>
            <div
              id="w-node-_9398969b-af2d-ac75-94d0-84c151c3bf45-51c3bf2f"
              className="footer-block top-margin-mobile-80"
            >
              <h4 className="footer-heading">Let’s Get Social!</h4>
              <p className="get-the-app-desc">
                Follow us for fun updates, behind-the-scenes vibes, and a dash
                of sass. Let’s make scrolling worth it!
              </p>
              <a
                href="https://www.instagram.com/hightable.irl/"
                className="footer-link mgtop10"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/high-table-irl/"
                className="footer-link mgtop10"
              >
                Linkedin
              </a>
              <a
                href="https://www.facebook.com/people/HighTable/61570316743206/"
                className="footer-link mgtop10"
              >
                Facebook
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="body-text">
              © 2024 Hightable Network Private Limited | Designed by{" "}
              <a href="https://kwad.in" className="link">
                Kwad
              </a>
            </p>
            <Link to="/terms" className="footer-link margin-top-mobile-10">
              Terms of service
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
