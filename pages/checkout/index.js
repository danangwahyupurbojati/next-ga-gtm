import TittleHead from "../../components/TittleHead";
import { checkoutTracking, checkoutOptionTracking } from "../../helper/GTM";
import { useRouter } from 'next/router'
import { BeginCheckoutGA4, PaymentInfoGA4, ShippingInfoGA4 } from "../../helper/GA4";

const listProducts = [
    [{
        name: 'Bakso',
        id: 'bakso001',
        price: 10000,
        category: 'foods',
    }],
    [{
        name: 'Mie Ayam',
        id: 'mayam001',
        price: 8000,
        category: 'foods',
    }],
    [{
        name: 'Jus Buah',
        id: 'jusbuah001',
        price: 6000,
        category: 'baverages',
    }],
    [{
        name: 'Es Campur',
        id: 'escampur001',
        price: 5000,
        category: 'baverages',
    }]
]

const Checkout = () => {
    const router = useRouter();

    const stepOne = (arrayProduct) => {
        const actionField = {
            step: 1,
            option: 'RT 5 RW 4 Desa Tepas, Kecamatan Kesamben - Blitar 66191'
        }

        checkoutTracking(arrayProduct, 'IDR', actionField);
        checkoutOptionTracking('IDR', { ...actionField,  action: 'checkoutOption'});

        // GA4 Begin Checkout
        // BeginCheckoutGA4(arrayProduct);
    };

    const stepTwo = (arrayProduct) => {
        const actionField = {
            step: 2,
            option: 'JNE Express 1 Day'
        };

        checkoutTracking(arrayProduct, 'IDR', actionField);
        checkoutOptionTracking('IDR', { ...actionField,  action: 'checkoutOption'});

        // GA4 Shipping Info
        // ShippingInfoGA4(arrayProduct, actionField.option);
    };

    const stepThree = (arrayProduct) => {
        const actionField = {
            step: 3,
            option: 'BRIVA'
        };

        checkoutTracking(arrayProduct, 'IDR', actionField);
        checkoutOptionTracking('IDR', { ...actionField,  action: 'checkoutOption'});

        // GA4 PaymentInfo
        // PaymentInfoGA4(arrayProduct, actionField.option);

        router.push('/thanks');
    };

    return ( 
        <div>
            <TittleHead title="checkout" />
            <h1>halaman checkout</h1>

            {
                listProducts.map((item, index) => (
                    <div style={{ marginBottom: '28px'}} key={index}>
                        <h3>
                            {item[0].name}
                            {' '}
                            Checkout
                        </h3>
                        <div style={{ border: '1px solid red' }}>
                        <   button onClick={() => stepOne(item)}>step 1 (shipping address)</button>
                            <button onClick={() => stepTwo(item)}>step 2 (shipping method)</button>
                            <button onClick={() => stepThree(item)}>step 3 (payment)</button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}
 
export default Checkout;