import classNames from "classnames/bind";
import styles from "./Footer.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

import { useMediaQuery } from "react-responsive";

const cx = classNames.bind(styles);

function Footer() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const isMobile = useMediaQuery({ maxWidth: 768 });

  const fadeInBottomProps = useSpring(
    isMobile
      ? { opacity: 1, transform: "translateY(0px)" }
      : {
          from: { opacity: 0, transform: "translateY(100px)" },
          to: {
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0px)" : "translateY(100px)",
          },
          config: { tension: 200, friction: 20 },
        }
  );

  return (
    <animated.footer
      ref={ref}
      style={fadeInBottomProps}
      className={cx("footer")}
    >
      <div className={cx("left")}>
        <p>CONTACT ME</p>
      </div>

      <div className={cx("right")}>
        <div className={cx("phone")}>
          <FontAwesomeIcon className={cx("phone-icon")} icon={faPhone} />
          <p className={cx("phone-number")}>+84 935038507</p>
        </div>
        <a
          href="https://www.facebook.com/chun.huynh123/"
          className={cx("social")}
        >
          <FontAwesomeIcon className={cx("icon")} icon={faFacebook} />
        </a>
        <a href="https://github.com/chunhuynh-tapcode" className={cx("social")}>
          <FontAwesomeIcon className={cx("icon")} icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/trung-huynh-a8a668295/"
          className={cx("social")}
        >
          <FontAwesomeIcon className={cx("icon")} icon={faLinkedin} />
        </a>
      </div>
    </animated.footer>
  );
}

export default Footer;
