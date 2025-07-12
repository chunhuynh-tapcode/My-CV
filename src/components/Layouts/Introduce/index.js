import classNames from "classnames/bind";
import styles from "./Introduce.module.scss";

const cx = classNames.bind(styles);

function Introduce() {
    return ( 
        <div className={cx('introduce')}>
            <div className={cx('introduce-left')}>
                <div className={cx('top')}>
                    <div className={cx('top-name')}>
                        <h1 className={cx('name')}>
                            <span>HUYNH</span>
                            <span>DINH TRUNG</span>
                        </h1>
                    </div>

                    <div className={cx('top-avatar')}>
                        <img className={cx('avatar')} src="/CV_photo.jpg"></img>
                    </div>
                </div>

                <div className={cx('bottom')}>
                    <div className={cx('about-me')}>

                    </div>

                    <div className={cx('get-in-touch')}>

                    </div>
                </div>
            </div>
            <div className={cx('introduce-right')}>
                
            </div>
        </div>
    );
}

export default Introduce;