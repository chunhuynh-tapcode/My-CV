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
        },
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
        },
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
              Với vài năm kinh nghiệm trong lĩnh vực Marketing, tôi có nhiều
              kinh nghiệm trong việc xây dựng nội dung chuẩn SEO, Facebook Ads,
              thiết kế landing page và quản lý blog của công ty. Tôi tự tin là
              người không ngại thay đổi và luôn sẵn sàng học hỏi những điều mới
              mẻ để hoàn thiện bản thân.
            </p>
          </div>

          <div className={cx("get-in-touch-wrapper")}>
            <a href="mailto:g21trung@gmail.com" className={cx("get-in-touch")}>
              <div className={cx("get-in-touch-top")}>
                {/* <p>Wanna get in touch?</p> */}
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
        <div className={cx("get-in-touch-wrapper2")}>
          <a
            href="https://drive.google.com/file/d/1lNz3MhsynTWJjPIOrsDX0EsyBRj7Ikh-/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className={cx("get-in-touch2")}
          >
            <div className={cx("get-in-touch-top2")}>
              {/* <p>Click here to view my Experiences</p> */}
              <FontAwesomeIcon className={cx("icon")} icon={faArrowRight} />
            </div>
            <p className={cx("email-me2")}>MY CV</p>
          </a>
        </div>
      </animated.div>
    </div>
  );
}

export default Introduce;
