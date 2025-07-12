import classNames from "classnames/bind";
import styles from "./Products.module.scss";

const cx = classNames.bind(styles);

function Products() {
    return ( 
        <div className={cx('products')}>
            <h1>Products</h1>
        </div>
    );
}

export default Products;