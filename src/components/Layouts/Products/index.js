import classNames from "classnames/bind";
import styles from "./Products.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

const cx = classNames.bind(styles);

function Products() {
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    const fadeInRightProps = useSpring({
        from: { opacity: 0, transform: 'translateX(100px)' },
        to: { 
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateX(0px)' : 'translateX(100px)' 
        },   
        config: { tension: 200, friction: 20 }
    });
    const fadeInLeftProps = useSpring({
        from: { opacity: 0, transform: 'translateX(-100px)' }, 
        to: { 
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateX(0px)' : 'translateX(-100px)' 
        },     
        config: { tension: 200, friction: 20 }
    });
    const fadeInBottomProps = useSpring({
        from: { opacity: 0, transform: 'translateY(100px)' }, 
        to: { 
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0px)' : 'translateY(100px)' 
        },     
        config: { tension: 200, friction: 20 }
    });

    return ( 
        <div className={cx('products')}>
            <animated.div ref={ref} style={fadeInBottomProps} className={cx('top')}>
                <h2 className={cx('heading')}>PRODUCTS</h2>
            </animated.div>

            <div className={cx('bottom')}>
                <animated.a ref={ref} style={fadeInLeftProps} className={cx('product')} href="https://shopee-clone-chi-two.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <img className={cx('product-img')} src="/shopee_clone.png"></img>
                    <div className={cx('overlay')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faArrowRight} />
                        <div className={cx('description')}>
                            <p className={cx('description-heading')}>Shopee</p>
                            <p className={cx('description-text')}>Shopee product page made with pure HTML/CSS and JS.</p>
                        </div>
                    </div>
                </animated.a>

                <animated.a ref={ref} style={fadeInRightProps} className={cx('product')} href="https://example.com/product1" target="_blank" rel="noopener noreferrer">
                    <img className={cx('product-img')} src="/san_pham3.png"></img>
                    <div className={cx('overlay')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faArrowRight} />
                        <div className={cx('description')}>
                            <p className={cx('description-heading')}>Student Infomation Form</p>
                            <p className={cx('description-text')}>Student information declaration form, when entering the form from the left, it will render the information to the right interface, made with JS.</p>
                        </div>
                    </div>
                </animated.a>

                <animated.a ref={ref} style={fadeInLeftProps} className={cx('product')} href="https://givewell.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <img className={cx('product-img')} src="/san_pham1.png"></img>
                    <div className={cx('overlay')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faArrowRight} />
                        <div className={cx('description')}>
                            <p className={cx('description-heading')}>GiveWell | Fundraising</p>
                            <p className={cx('description-text')}>Givewell Charity Fundraising Website Made with ReactJS.</p>
                        </div>
                    </div>
                </animated.a>

                <animated.a ref={ref} style={fadeInRightProps} className={cx('product')} href="https://exsh-ticket.vercel.app/#" target="_blank" rel="noopener noreferrer">
                    <img className={cx('product-img')} src="/san_pham2.png"></img>
                    <div className={cx('overlay')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faArrowRight} />
                        <div className={cx('description')}>
                            <p className={cx('description-heading')}>EXSH Ticket</p>
                            <p className={cx('description-text')}>Em Xinh Say Hi concert ticket booking mockup website made with HTML/CSS and JS.</p>
                        </div>
                    </div>
                </animated.a>
            </div>
        </div>
    );
}

export default Products;