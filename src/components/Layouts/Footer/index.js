import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Footer() {
    return ( 
        <footer className={cx('footer')}>
            <div className={cx('left')}>
                <p>CONTACT ME</p>
            </div>

            <div className={cx('right')}>
                <div className={cx('phone')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faPhone} />
                    <p className={cx('phone-number')}>+84 935038507</p>
                </div>
                <a href="https://www.facebook.com/chun.huynh123/" className={cx('social')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faFacebook} />
                </a>
                <a href="https://github.com/chunhuynh-tapcode" className={cx('social')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faGithub} />
                </a>
                <a href="https://www.linkedin.com/in/trung-huynh-a8a668295/" className={cx('social')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faLinkedin} />
                </a>
            </div>
        </footer>
    );
}

export default Footer;