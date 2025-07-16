import classNames from "classnames/bind";
import styles from "./Products.module.scss";

const cx = classNames.bind(styles);

function Products() {
    return ( 
        <div className={cx('products')}>
            <div className={cx('products-left')}>
                <div className={cx('top')}>
                    <h2 className={cx('heading')}>PRODUCTS</h2>
                </div>

                <div className={cx('bottom')}>
                    <a className={cx('product')}>
                        <img className={cx('product-img')} src="/shopee_clone.png"></img>
                    </a>
                </div>
            </div>

            <div className={cx('products-right')}>
                <div className={cx('product-1')}>
                    <a className={cx('product')}>
                        <img className={cx('product-img')} src="/CV_photo.jpg"></img>
                    </a>
                </div>
                <div className={cx('product-2')}>
                    <a className={cx('product')}>
                        <img className={cx('product-img-right')} src="/CV_photo.jpg"></img>
                    </a>
                    <a className={cx('product')}>
                        <img className={cx('product-img-right')} src="/CV_photo.jpg"></img>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Products;