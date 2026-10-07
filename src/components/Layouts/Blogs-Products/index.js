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
        <h2 className={cx("heading")}>BLOGS PRODUCTS</h2>
      </animated.div>

      <div className={cx("bottom")}>
        <animated.a
          ref={ref}
          style={fadeInLeftProps}
          className={cx("product")}
          href="https://ecomdymediatesting.divhunt.art/blog/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={cx("product-img")}
            src="/blog_img/Ecomdymediablogs.png"
            alt="Ecomdymediablogs"
          ></img>
          <div className={cx("overlay")}>
            <FontAwesomeIcon className={cx("icon")} icon={faArrowRight} />
            <div className={cx("description")}>
              <p className={cx("description-heading")}>Ecomdymedia Blog</p>
              <p className={cx("description-text")}>
                Ecomdymedia Blogs - Page Blog được lên nội dung để chia sẻ kiến
                thức về Tiktok Ads.
              </p>
            </div>
          </div>
        </animated.a>
        <animated.a
          ref={ref}
          style={fadeInLeftProps}
          className={cx("product")}
          href="https://docs.google.com/presentation/d/1C8YllgMe5G19NdvLz4sM2DeIZyhcO8V4/edit?usp=sharing&ouid=104360677739643445808&rtpof=true&sd=true"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={cx("product-img")}
            src="/blog_img/Ecomdyebook.png"
            alt="Ecomdy Ebook"
          ></img>
          <div className={cx("overlay")}>
            <FontAwesomeIcon className={cx("icon")} icon={faArrowRight} />
            <div className={cx("description")}>
              <p className={cx("description-heading")}>Ecomdy Ebook</p>
              <p className={cx("description-text")}>
                Ebook cung cấp insight cho khách hàng đang sử dụng dịch vụ
                Tiktok Ads trong các mùa lễ hội nhằm tăng hiệu quả của chiến
                dịch quảng cáo.
              </p>
            </div>
          </div>
        </animated.a>
        <animated.a
          ref={ref}
          style={fadeInRightProps}
          className={cx("product")}
          href="https://cevimetal.com.vn/chuyen-muc/tin-tuc/tin-tuc-nganh-thep/page/3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={cx("product-img")}
            src="/blog_img/kimkhimientrungblog.png"
            alt="Cevimetal Blog"
          ></img>
          <div className={cx("overlay")}>
            <FontAwesomeIcon className={cx("icon")} icon={faArrowRight} />
            <div className={cx("description")}>
              <p className={cx("description-heading")}>Cevimetal Blog</p>
              <p className={cx("description-text")}>
                Các bài blog từ trang 3-5 chuyên mục tin tức ngành thép chuyên
                đăng tải các thông tin mới nhất về ngành thép, các sản phẩm thép
                và các dự án liên quan đến thép.
              </p>
            </div>
          </div>
        </animated.a>
        <animated.a
          ref={ref}
          style={fadeInLeftProps}
          className={cx("product")}
          href="https://kasai.com.vn/du-an/mau-biet-thu-pho-2-tang-12x13m-hien-dai"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={cx("product-img")}
            src="/blog_img/Xaydungkasaiblog1.png"
            alt="Kasai Blog"
          ></img>
          <div className={cx("overlay")}>
            <FontAwesomeIcon className={cx("icon")} icon={faArrowRight} />
            <div className={cx("description")}>
              <p className={cx("description-heading")}>Kasai Blog</p>
              <p className={cx("description-text")}>
                Bài viết Blog về dự án mẫu biệt thự phố 2 tầng 12x13m hiện đại,
                được xây dựng bởi công ty Kasai.
              </p>
            </div>
          </div>
        </animated.a>
        <animated.a
          ref={ref}
          style={fadeInLeftProps}
          className={cx("product")}
          href="https://kasai.com.vn/du-an/thiet-ke-nha-5x15-3-tang-dep-sang-hut-mat"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={cx("product-img")}
            src="/blog_img/Xaydungkasaiblog2.png"
            alt="Kasai Blog"
          ></img>
          <div className={cx("overlay")}>
            <FontAwesomeIcon className={cx("icon")} icon={faArrowRight} />
            <div className={cx("description")}>
              <p className={cx("description-heading")}>Kasai Blog 2</p>
              <p className={cx("description-text")}>
                Bài viết Blog về dự án mẫu Mẫu nhà 5×15 3 tầng, được xây dựng
                bởi công ty Kasai.
              </p>
            </div>
          </div>
        </animated.a>
        <animated.a
          ref={ref}
          style={fadeInLeftProps}
          className={cx("product")}
          href="https://kasai.com.vn/du-an/thiet-ke-nha-tro-cao-tang-hien-dai-va-day-thu-hut"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={cx("product-img")}
            src="/blog_img/Xaydungkasaiblog3.png"
            alt="Kasai Blog"
          ></img>
          <div className={cx("overlay")}>
            <FontAwesomeIcon className={cx("icon")} icon={faArrowRight} />
            <div className={cx("description")}>
              <p className={cx("description-heading")}>Kasai Blog 3</p>
              <p className={cx("description-text")}>
                Giới thiệu các thiết kế mẫu nhà trọ đẹp cho khách hàng có bản
                vẽ.
              </p>
            </div>
          </div>
        </animated.a>
        <animated.a
          ref={ref}
          style={fadeInLeftProps}
          className={cx("product")}
          href="https://kasai.com.vn/du-an/thiet-ke-homestay-da-nang-revasser-dep-tung-goc-nho"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={cx("product-img")}
            src="/blog_img/Xaydungkasaiblog4.png"
            alt="Kasai Blog"
          ></img>
          <div className={cx("overlay")}>
            <FontAwesomeIcon className={cx("icon")} icon={faArrowRight} />
            <div className={cx("description")}>
              <p className={cx("description-heading")}>Kasai Blog 4</p>
              <p className={cx("description-text")}>
                Bài viết Blog về dự án Homestay Đà Nẵng Révasser có đầy đủ bản
                vẽ
              </p>
            </div>
          </div>
        </animated.a>
        <animated.a
          ref={ref}
          style={fadeInLeftProps}
          className={cx("product")}
          href="https://kasai.com.vn/du-an/mau-nha-ong-5x11-2-mat-tien-sieu-sang-trong"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={cx("product-img")}
            src="/blog_img/Xaydungkasaiblog5.png"
            alt="Kasai Blog"
          ></img>
          <div className={cx("overlay")}>
            <FontAwesomeIcon className={cx("icon")} icon={faArrowRight} />
            <div className={cx("description")}>
              <p className={cx("description-heading")}>Kasai Blog 5</p>
              <p className={cx("description-text")}>
                Bài viết Blog về dự án mẫu nhà ống 5x11 2 mặt tiền
              </p>
            </div>
          </div>
        </animated.a>
      </div>
    </div>
  );
}

export default Products;
