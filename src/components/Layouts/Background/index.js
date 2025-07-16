import classNames from "classnames/bind";
import styles from "./Background.module.scss";


const cx = classNames.bind(styles);

function Background() {
    return ( 
        <div className={cx('background')}>
            <div className={cx('left')}>
                <div className={cx('education')}>
                    <h2 className={cx('education-title')}>EDUCATION</h2>
                </div>

                <div className={cx('education-list')}>
                    <div className={cx('education-wrapper')}>
                        <p className={cx('certificate')}>Front-end Web Developer Certificate</p>
                        <p className={cx('school')}>F8</p>
                        <p className={cx('time')}>2025</p>
                    </div>

                    <div className={cx('education-wrapper')}>
                        <p className={cx('certificate')}>Data Analyst Career Kickstart Certificate</p>
                        <p className={cx('school')}>MindX Technology School</p>
                        <p className={cx('time')}>2024</p>
                    </div>

                    <div className={cx('education-wrapper')}>
                        <p className={cx('certificate')}>Bachelor of E-commerce</p>
                        <p className={cx('school')}>Da Nang University - University of Economics</p>
                        <p className={cx('time')}>2017 - 2021</p>
                    </div>
                </div>
            </div>

            <div className={cx('right')}>
                    <div className={cx('story-title-wrapper')}>
                        <h2 className={cx('story-title')}>MY STORY</h2>
                    </div>
                    <div className={cx('my-story-wrapper')}>
                        <p className={cx('my-story')}>
                            I worked in Marketing for 2 years and realized that this industry was not for me. At that time, I was exposed to the web development industry and was attracted to it. I decided to switch to web programming to become a web developer. Driven by my passion for creative design and commitment to delivering high-quality work, I found motivation in the challenges that each project posed. Every pixel, every interaction, every piece of code tells a story, and I was energized by the opportunity to create experiences that are not only engaging but also solve real problems. For me, switching to this industry was about pushing boundaries, embracing creativity, and constantly evolving to stay ahead in the ever-changing digital landscape.
                        </p>
                    </div>
            </div>
        </div>
    );
}

export default Background;