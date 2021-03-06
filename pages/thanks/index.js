import TittleHead from "../../components/TittleHead";
import { PurchaseGA4 } from "../../helper/GA4";
import { purchaseEventTracking } from "../../helper/GTM";

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

const Thanks = () => {

    const handlePurchase = arrayProduct => {
        const transaction_id = Math.floor((Math.random() * 1000) + 1).toString();
        purchaseEventTracking(arrayProduct, transaction_id);
        // PurchaseGA4(arrayProduct, transaction_id);
    }

    return ( 
        <div>
            <TittleHead title="thank you" />
            <h1>Thanks Page</h1>
            {
                listProducts.map((item, index) => (
                    <div style={{ marginBottom: '28px'}} key={index}>
                        <h3>
                            {item[0].name}
                        </h3>
                        <div>
                            <button onClick={()  => handlePurchase(item)}>
                                purchase Click Here
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}
 
export default Thanks;