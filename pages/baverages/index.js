import Link from 'next/link';
import TittleHead from '../../components/TittleHead';
import { productImpression } from '../../helper/GTM';

const dummYCategoryProduct = [
    {
        name: 'Es Campur',
        id: 'escampur001',
        price: 5000,
        category: 'baverages',
        list: '',
        position: 1
    },
    {
        name: 'Jus Buah',
        id: 'jusbuah001',
        price: 6000,
        category: 'baverages',
        list: '',
        position: 2
    }
];

const Baverages = () => {

    const handleProductImpression = (dummYCategoryProduct) => {
        productImpression(dummYCategoryProduct);
    };

    return ( 
        <div>
            <TittleHead title="Baverages Category" />
            <h1>Category baverages</h1>
            <div style={{ marginBottom: '28px'}}>
                <button onClick={()  => handleProductImpression(dummYCategoryProduct)}>
                    Product Impressions Click Here
                </button>
            </div>
            <div>
                <div>
                    <Link href="/baverages/es-campur">
                        <a>
                            es-campur
                        </a>
                    </Link>
                </div>
                <div>
                    <Link href="/baverages/jus-buah">
                        <a>
                            jus buah
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}
 
export default Baverages;