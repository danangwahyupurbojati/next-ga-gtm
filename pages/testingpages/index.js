import TittleHead from '../../components/TittleHead';
import { 
    addToCartTracking, 
    checkoutOptionTracking, 
    checkoutTracking, 
    productClickTracking, 
    productImpression, 
    purchaseEventTracking, 
    removeToCartTracking 
} from '../../helper/GTM';
import styles from '../../styles/TestingPages.module.css';

const TestingPages = () => {

    const stepOne = () => {
        const actionField = {
            step: 1,
            option: 'RT 5 RW 4 Desa Tepas, Kecamatan Kesamben - Blitar 66191'
        }

        checkoutTracking('IDR', actionField);
        checkoutOptionTracking('IDR', { ...actionField,  action: 'checkoutOption'});
    };

    const stepTwo = () => {
        const actionField = {
            step: 2,
            option: 'JNE Express 1 Day'
        };

        checkoutTracking('IDR', actionField);
        checkoutOptionTracking('IDR', { ...actionField,  action: 'checkoutOption'});
    };

    const stepThree = () => {
        const actionField = {
            step: 3,
            option: 'BRIVA'
        };

        checkoutTracking('IDR', actionField);
        checkoutOptionTracking('IDR', { ...actionField,  action: 'checkoutOption'});
    };

    return (
        <div>
            <TittleHead title="testing pages" />
            <h1>Testing Pages</h1>

            <div className={styles.buttonWrapper}>
                <p>productImpression</p>
                <button onClick={productImpression}>productImpression</button>
            </div>

            <div className={styles.buttonWrapper}>
                <p>productClickTracking</p>
                <button onClick={productClickTracking}>productClickTracking</button>
            </div>

            <div className={styles.buttonWrapper}>
                <p>addToCartTracking</p>
                <button onClick={addToCartTracking}>Add To Cart</button>
            </div>

            <div className={styles.buttonWrapper}>
                <p>removeToCartTracking</p>
                <button onClick={removeToCartTracking}>remove To Cart</button>
            </div>

            <div className={styles.checkoutWrapper}>
                <p>checkout</p>
                <button onClick={stepOne}>step 1 (shipping address)</button>
                <button onClick={stepTwo}>step 2 (shipping method)</button>
                <button onClick={stepThree}>step 3 (payment)</button>
            </div>

            <div className={styles.buttonWrapper}>
                <p>purchase</p>
                <button onClick={purchaseEventTracking}>purchase</button>
            </div>

        </div>
    );
}
 
export default TestingPages;