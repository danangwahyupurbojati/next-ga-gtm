
import { AddToCart, BeginCheckout, Purchase, SelectItem } from '../../helper/GA4';
import styles from '../../styles/TestingPages.module.css';

const TestingPages = () => {
    return (
        <div>
            <h1>Testing Pages</h1>

            <div className={styles.buttonWrapper}>
                <p>Select Item</p>
                <button onClick={SelectItem}>SelectItem</button>
            </div>

            <div className={styles.buttonWrapper}>
                <p>AddToCart</p>
                <button onClick={AddToCart}>AddToCart</button>
            </div>


            <div className={styles.checkoutWrapper}>
                <p>BeginCheckout</p>
                <button onClick={BeginCheckout}>BeginCheckout</button>
            </div>

            <div className={styles.buttonWrapper}>
                <p>Purchase</p>
                <button onClick={Purchase}>Purchase</button>
            </div>

        </div>
    );
}
 
export default TestingPages;