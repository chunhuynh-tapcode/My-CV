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
        <h2 className={cx("heading")}>SOCIAL PRODUCTS</h2>
      </animated.div>

      <div className={cx("bottom")}>
        <animated.a
          ref={ref}
          style={fadeInLeftProps}
          className={cx("product")}
          href="https://www.facebook.com/reel/967054411635824"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={cx("product-img")}
            src="/social_img/ecomdysocial_video1.png"
            alt="Ecomdymedia Social Video 1"
          ></img>
          <div className={cx("overlay")}>
            <FontAwesomeIcon className={cx("icon")} icon={faArrowRight} />
            <div className={cx("description")}>
              <p className={cx("description-heading")}>Ecomdymedia Video</p>
              <p className={cx("description-text")}>
                Video giới thiệu về Ecomdymedia được đăng tải trên Facebook, với
                nội dung về văn phòng của Ecomdymedia.
              </p>
            </div>
          </div>
        </animated.a>
        <animated.a
          ref={ref}
          style={fadeInRightProps}
          className={cx("product")}
          href="https://www.facebook.com/reel/814130273556718"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={cx("product-img")}
            src="/social_img/ecomdysocial_video2.png"
            alt="Ecomdymedia Social Video 2"
          ></img>
          <div className={cx("overlay")}>
            <FontAwesomeIcon className={cx("icon")} icon={faArrowRight} />
            <div className={cx("description")}>
              <p className={cx("description-heading")}>
                Video giới thiệu dịch vụ
              </p>
              <p className={cx("description-text")}>
                Video giới thiệu về Ecomdymedia được đăng tải trên Facebook, với
                nội dung về các dịch vụ mà Ecomdymedia cung cấp.
              </p>
            </div>
          </div>
        </animated.a>
        <animated.a
          ref={ref}
          style={fadeInLeftProps}
          className={cx("product")}
          href="https://www.facebook.com/photo.php?fbid=1035154271749956&set=pb.100057661789929.-2207520000&type=3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={cx("product-img")}
            src="/social_img/ecomdysocial_post1.png"
            alt="ecomdymedia Social Post 1"
          ></img>
          <div className={cx("overlay")}>
            <FontAwesomeIcon className={cx("icon")} icon={faArrowRight} />
            <div className={cx("description")}>
              <p className={cx("description-heading")}>
                Ecomdymedia Social Post 1
              </p>
              <p className={cx("description-text")}>
                Giới thiệu về dịch vụ Tiktok Ads của Ecomdymedia trên Facebook.
              </p>
            </div>
          </div>
        </animated.a>
        <animated.a
          ref={ref}
          style={fadeInLeftProps}
          className={cx("product")}
          href="https://www.facebook.com/photo.php?fbid=1032837068648343&set=pb.100057661789929.-2207520000&type=3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={cx("product-img")}
            src="/social_img/ecomdysocial_post2.png"
            alt="ecomdymedia Social Post 2"
          ></img>
          <div className={cx("overlay")}>
            <FontAwesomeIcon className={cx("icon")} icon={faArrowRight} />
            <div className={cx("description")}>
              <p className={cx("description-heading")}>
                Ecomdymedia Social Post 2
              </p>
              <p className={cx("description-text")}>
                Thông báo dịch vụ Tiktok Ads của Ecomdymedia đã có mặt trên
                Tiktok Center để người dùng dễ dàng truy cập và sử dụng.
              </p>
            </div>
          </div>
        </animated.a>
        <animated.a
          ref={ref}
          style={fadeInLeftProps}
          className={cx("product")}
          href="https://www.facebook.com/EcomdyMedia/posts/pfbid02XmU6UxkP28qdT8uD2m8STm4qP76GfWPSDiaburRg2KG7w53APeGkwMf4BtcNx2vul"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={cx("product-img")}
            src="/social_img/ecomdysocial_post3.png"
            alt="ecomdymedia Social Post 3"
          ></img>
          <div className={cx("overlay")}>
            <FontAwesomeIcon className={cx("icon")} icon={faArrowRight} />
            <div className={cx("description")}>
              <p className={cx("description-heading")}>
                Ecomdymedia Social Post 3
              </p>
              <p className={cx("description-text")}>
                Đăng bài recap lại booth của Ecomdymedia tại Workshop của Google
                I/O Extended MienTrung, nơi Ecomdymedia đã tham gia và giới
                thiệu dịch vụ Tiktok Ads.
              </p>
            </div>
          </div>
        </animated.a>
        <animated.a
          ref={ref}
          style={fadeInLeftProps}
          className={cx("product")}
          href="https://www.facebook.com/share/v/1BvXM5Q3Ce/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={cx("product-img")}
            src="/social_img/cevimetalsocial_post1.png"
            alt="cevimetal Social Post 1"
          ></img>
          <div className={cx("overlay")}>
            <FontAwesomeIcon className={cx("icon")} icon={faArrowRight} />
            <div className={cx("description")}>
              <p className={cx("description-heading")}>
                Cevimetal Social Post 1
              </p>
              <p className={cx("description-text")}>
                Đăng bài recap lại buổi nâng cao tinh thần cảnh giác và kiến
                thức của Cevimetal tại buổi tuyên truyền của Phòng Cảnh sát PCCC
                và CNCH phường Hải Châu - Công an thành phố Đà Nẵng
              </p>
            </div>
          </div>
        </animated.a>
        <animated.a
          ref={ref}
          style={fadeInLeftProps}
          className={cx("product")}
          href="https://www.facebook.com/share/p/1DRVjXo2qZ/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={cx("product-img")}
            src="/social_img/cevimetalsocial_post2.png"
            alt="cevimetal Social Post 2"
          ></img>
          <div className={cx("overlay")}>
            <FontAwesomeIcon className={cx("icon")} icon={faArrowRight} />
            <div className={cx("description")}>
              <p className={cx("description-heading")}>
                Cevimetal Social Post 2
              </p>
              <p className={cx("description-text")}>
                Bài đăng facebook về tin tức ngành thép với nội dung tóm tắt ý
                chính của bài Blog trên Website Cevimetal, giúp người đọc dễ
                dàng tiếp cận thông tin nhanh chóng và nếu người đọc muốn tim
                hiểu chi tiết hơn thì có thể click vào link bài Blog để đọc bài
                viết đầy đủ hơn.
              </p>
            </div>
          </div>
        </animated.a>
      </div>
    </div>
  );
}

export default Products;
