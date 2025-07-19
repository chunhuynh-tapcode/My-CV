import classNames from "classnames/bind";
import styles from "./Background.module.scss";

import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

const cx = classNames.bind(styles);

function Background() {
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

    return ( 
        <div className={cx('background')}>
            <animated.div ref={ref} style={fadeInLeftProps} className={cx('left')}>
                <div className={cx('education')}>
                    <h2 className={cx('education-title')}>EDUCATION</h2>
                </div>

                <div className={cx('education-list')}>
                    <a href="https://drive.google.com/drive/folders/1YozIHvfzp5wIDcho3j4CmVbcaogHtD3j?usp=drive_link" className={cx('education-wrapper')}>
                        <div>
                            <p className={cx('certificate')}>Front-end Web Developer Certificate</p>
                            <p className={cx('school')}>F8</p>
                            <p className={cx('time')}>2025</p>
                        </div>
                    </a>

                    <a href="https://drive.google.com/drive/folders/1PU4qAB7uc0GSx6xqW8AdKroGDkiA-MYP?usp=drive_link" className={cx('education-wrapper')}>
                        <div>
                            <p className={cx('certificate')}>Data Analyst Career Kickstart Certificate</p>
                            <p className={cx('school')}>MindX Technology School</p>
                            <p className={cx('time')}>2024</p>
                        </div>
                    </a>

                    <div className={cx('education-wrapper-unclickable')}>
                        <p className={cx('certificate')}>Bachelor of E-commerce</p>
                        <p className={cx('school')}>Da Nang University - University of Economics</p>
                        <p className={cx('time')}>2017 - 2021</p>
                    </div>
                </div>
            </animated.div>

            <animated.div ref={ref} style={fadeInRightProps} className={cx('right')}>
                    <div className={cx('story-title-wrapper')}>
                        <h2 className={cx('story-title')}>MY STORY</h2>
                    </div>
                    <div className={cx('my-story-wrapper')}>
                        <p className={cx('my-story')}>
                            I had worked in Marketing for 2 years and realized that this industry was not for me. At that time, I was exposed to the web development industry and was attracted to it. I decided to switch to web programming to become a web developer. Driven by my passion for creative design and commitment to delivering high-quality work, I found motivation in the challenges that each project posed. Every pixel, every interaction, every piece of code tells a story, and I was energized by the opportunity to create experiences that are not only engaging but also solve real problems. For me, switching to this industry was about pushing boundaries, embracing creativity, and constantly evolving to stay ahead in the ever-changing digital landscape.
                        </p>
                    </div>
            </animated.div>
        </div>
    );
}

export default Background;