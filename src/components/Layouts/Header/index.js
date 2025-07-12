import classNames from "classnames/bind";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header() {
    return ( 
        <header className={cx('header')}>
            <h1 className={cx('header-title')}>PORTFOLIO</h1>
        </header>
    );
}

export default Header;