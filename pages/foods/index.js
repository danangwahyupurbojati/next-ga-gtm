import Link from 'next/link';
import TittleHead from '../../components/TittleHead';
import { productImpression } from '../../helper/GTM';

const dummYCategoryProduct = [
    {
        name: 'Bakso',
        id: 'bakso001',
        price: 10000,
        category: 'foods',
        list: '',
        position: 1
    },
    {
        name: 'Mie Ayam',
        id: 'mayam001',
        price: 8000,
        category: 'foods',
        list: '',
        position: 2
    }
];

const Food = () => {  

    const handleProductImpression = (dummYCategoryProduct) => {
        productImpression(dummYCategoryProduct);
    };

    return ( 
        <div>
            <TittleHead title="Foods Category" />
            <h1>Category food</h1>
            <div style={{ marginBottom: '28px'}}>
                <button onClick={()  => handleProductImpression(dummYCategoryProduct)}>
                    Product Impressions Click Here
                </button>
            </div>
            <div>
                <div>
                    <Link href="/foods/bakso">
                        <a>
                            bakso
                        </a>
                    </Link>
                </div>
                <div>
                    <Link href="/foods/mie-ayam">
                        <a>
                            mie ayam
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}
 
export default Food;