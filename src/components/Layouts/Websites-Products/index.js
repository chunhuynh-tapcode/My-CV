import classNames from "classnames/bind";
import styles from "./Products.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

import { useMediaQuery } from "react-responsive";

const cx = classNames.bind(styles);

function Products() {
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
        },
  );

  return (
    <div className={cx("products")}>
      <animated.div ref={ref} style={fadeInBottomProps} className={cx("top")}>
        <h2 className={cx("heading")}>WEBSITE PRODUCTS</h2>
      </animated.div>

      <div className={cx("bottom")}>
        <animated.a
          ref={ref}
          style={fadeInLeftProps}
          className={cx("product")}
          href="https://ecomdymediatesting.divhunt.art/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={cx("product-img")}
            src="/website_img/san_pham4.png"
            alt="ecomdymedia"
          ></img>
          <div className={cx("overlay")}>
            <FontAwesomeIcon className={cx("icon")} icon={faArrowRight} />
            <div className={cx("description")}>
              <p className={cx("description-heading")}>Ecomdymedia</p>
              <p className={cx("description-text")}>
                Website chính của Ecomdymedia được xây dựng bằng Divhunt với đầy
                đủ chức năng của một website doanh nghiệp.
              </p>
            </div>
          </div>
        </animated.a>
        <animated.a
          ref={ref}
          style={fadeInLeftProps}
          className={cx("product")}
          href="https://shopee-clone-chi-two.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={cx("product-img")}
            src="/website_img/shopee_clone.png"
            alt="Shopee Clone"
          ></img>
          <div className={cx("overlay")}>
            <FontAwesomeIcon className={cx("icon")} icon={faArrowRight} />
            <div className={cx("description")}>
              <p className={cx("description-heading")}>Shopee</p>
              <p className={cx("description-text")}>
                Trang sản phẩm Shopee được làm bằng HTML/CSS và JS thuần.
              </p>
            </div>
          </div>
        </animated.a>
        <animated.a
          ref={ref}
          style={fadeInRightProps}
          className={cx("product")}
          href="https://bitejoy-burger.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={cx("product-img")}
            src="/website_img/san_pham3.png"
            alt="Bitejoy"
          ></img>
          <div className={cx("overlay")}>
            <FontAwesomeIcon className={cx("icon")} icon={faArrowRight} />
            <div className={cx("description")}>
              <p className={cx("description-heading")}>Bitejoy</p>
              <p className={cx("description-text")}>
                Một website cho một doanh nghiệp thức ăn nhanh, với đầy đủ chức
                năng của Menu, giỏ hàng, đặt hàng, trang blog và nhiều hơn
                nữa... - được làm bằng ReactJS
              </p>
            </div>
          </div>
        </animated.a>
        <animated.a
          ref={ref}
          style={fadeInLeftProps}
          className={cx("product")}
          href="https://givewell.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={cx("product-img")}
            src="/website_img/san_pham1.png"
            alt="GiveWell | Fundraising"
          ></img>
          <div className={cx("overlay")}>
            <FontAwesomeIcon className={cx("icon")} icon={faArrowRight} />
            <div className={cx("description")}>
              <p className={cx("description-heading")}>
                GiveWell | Fundraising
              </p>
              <p className={cx("description-text")}>
                Givewell Charity Fundraising Website được làm bằng ReactJS.
              </p>
            </div>
          </div>
        </animated.a>
        <animated.a
          ref={ref}
          style={fadeInRightProps}
          className={cx("product")}
          href="https://exsh-ticket.vercel.app/#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={cx("product-img")}
            src="/website_img/san_pham2.png"
            alt="EXSH Ticket"
          ></img>
          <div className={cx("overlay")}>
            <FontAwesomeIcon className={cx("icon")} icon={faArrowRight} />
            <div className={cx("description")}>
              <p className={cx("description-heading")}>EXSH Ticket</p>
              <p className={cx("description-text")}>
                Trang web đặt vé concert Em Xinh Say Hi được làm bằng HTML/CSS
                và JS.
              </p>
            </div>
          </div>
        </animated.a>
        <animated.a
          ref={ref}
          style={fadeInRightProps}
          className={cx("product")}
          href="https://clear-the-points-one.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={cx("product-img")}
            src="/website_img/san_pham5.png"
            alt="clearthepoints"
          ></img>
          <div className={cx("overlay")}>
            <FontAwesomeIcon className={cx("icon")} icon={faArrowRight} />
            <div className={cx("description")}>
              <p className={cx("description-heading")}>Clear The Points game</p>
              <p className={cx("description-text")}>
                Một game nhỏ cho người dùng được xây dựng bằng ReactJS.
              </p>
            </div>
          </div>
        </animated.a>
      </div>
    </div>
  );
}

export default Products;
