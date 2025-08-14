import classNames from "classnames/bind";
import styles from "./Introduce.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

import { useMediaQuery } from "react-responsive";

const cx = classNames.bind(styles);

function Introduce() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const isMobile = useMediaQuery({ maxWidth: 768 });

  const fadeInLeftProps = useSpring(
    isMobile
      ? { opacity: 1, transform: "translateY(0px)" }
      : {
          from: { opacity: 0, transform: "translateX(-100px)" },
          to: {
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0px)" : "translateX(-100px)",
          },
          config: { tension: 200, friction: 20 },
        }
  );
  const fadeInRightProps = useSpring(
    isMobile
      ? { opacity: 1, transform: "translateY(0px)" }
      : {
          from: { opacity: 0, transform: "translateX(100px)" },
          to: {
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0px)" : "translateX(100px)",
          },
          config: { tension: 200, friction: 20 },
        }
  );

  return (
    <div className={cx("introduce")}>
      <animated.div
        ref={ref}
        style={fadeInLeftProps}
        className={cx("introduce-left")}
      >
        <div className={cx("top")}>
          <div className={cx("top-name")}>
            <h1 className={cx("name")}>
              <span>HUYNH</span>
              <span>DINH TRUNG</span>
            </h1>
          </div>

          <div className={cx("top-avatar")}>
            <img className={cx("avatar")} src="/CV_photo.jpg"></img>
          </div>
        </div>

        <div className={cx("bottom")}>
          <div className={cx("about-me")}>
            <p className={cx("about-me-text")}>
              Hi, I am Huynh Dinh Trung, a web developer from Da Nang. I aim to
              build clean, usable websites with a touch of creativity - always
              focusing on great user experience. I am looking forward to
              learning and working in a professional environment where I can
              further develop my skills in the industry and contribute to the
              business.
            </p>
          </div>

          <div className={cx("get-in-touch-wrapper")}>
            <a href="mailto:g21trung@gmail.com" className={cx("get-in-touch")}>
              <div className={cx("get-in-touch-top")}>
                <p>Wanna get in touch?</p>
                <FontAwesomeIcon className={cx("icon")} icon={faArrowRight} />
              </div>
              <p className={cx("email-me")}>EMAIL ME</p>
            </a>
          </div>
        </div>
      </animated.div>
      <animated.div
        ref={ref}
        style={fadeInRightProps}
        className={cx("introduce-right")}
      >
        <div className={cx("introduce-right-title")}>
          <h2 className={cx("title")}>EXPERIENCE</h2>
        </div>

        <div className={cx("experiences-list")}>
          <div className={cx("experience-wrapper")}>
            <p className={cx("job-name")}>SEO Website Frelancer</p>
            <p className={cx("job-place")}>Da Nang - Vietnam</p>
            <p className={cx("job-time")}>2025</p>
            {/* <p className={cx('more-abt-job')}>Built responsive websites for eCommerce clients, ensuring they worked smoothly on all devices. Worked with designers to turn mockups into pixel-perfect sites and used front-end frameworks to speed up development.</p> */}
          </div>
          <div className={cx("experience-wrapper")}>
            <p className={cx("job-company")}>Ecomdy</p>
            <p className={cx("job-name")}>Marketing Executive</p>
            <p className={cx("job-place")}>Da Nang - Vietnam</p>
            <p className={cx("job-time")}>2022-2024</p>
            <ul className={cx("more-abt-job")}>
              <li>Manage the Blog page on the company website.</li>
              <li>
                Brainstorm topics and implement articles on the Blog page and
                Social pages.
              </li>
              {/* <li>Create short videos using Capcut to post on Facebook page.</li>  */}
              <li>Manage in website design using Divhunt.</li>
              <a>
                <a
                  href="https://ecomdymediatesting.divhunt.art/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cx("divhunt")}
                >
                  Check out my website design by Divhunt here.
                </a>
              </a>
              <li>
                Research, create topics, build and write SEO content about real
                estate for the company website.
              </li>
              <li>
                Use Figma for basic image editing to post to Blog posts, social
                posts, and internal company posts.
              </li>
            </ul>
          </div>
        </div>
      </animated.div>
    </div>
  );
}

export default Introduce;
