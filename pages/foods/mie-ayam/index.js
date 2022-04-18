import TittleHead from "../../../components/TittleHead";
import { addToCartTracking, productClickTracking, productView } from "../../../helper/GTM";

const detailProduct = [{
    name: 'Mie Ayam',
    id: 'mayam001',
    price: 8000,
    category: 'foods',
    position: 2
}]

const MieAyam = () => {
    const handleProductClickTracking = detailProduct => {
        productClickTracking(detailProduct)
    }

    const handleProductView = detailProduct => {
        productView(detailProduct)
    }

    const handleAddtoCart = detailProduct => {
        addToCartTracking(detailProduct)
    }
    return ( 
        <div>
            <TittleHead title="Mie Ayam" />
            <h1>mie ayam</h1>
            <div style={{ marginBottom: '28px'}}>
                <button onClick={()  => handleProductClickTracking(detailProduct)}>
                    Product Click Tracking Here
                </button>
            </div>
            <div style={{ marginBottom: '28px'}}>
                <button onClick={()  => handleProductView(detailProduct)}>
                    Product View Click Here
                </button>
            </div>
            <div style={{ marginBottom: '28px'}}>
                <button onClick={()  => handleAddtoCart(detailProduct)}>
                    Add To Cart Click Here
                </button>
            </div>
        </div>
    );
}
 
export default MieAyam;