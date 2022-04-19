import TittleHead from "../../../components/TittleHead";
import { AddToCartGA4, SelectItemGA4, ViewItemGA4 } from "../../../helper/GA4";
import { addToCartTracking, productClickTracking, productView } from "../../../helper/GTM";

const detailProduct = [{
    name: 'Bakso',
    id: 'bakso001',
    price: 10000,
    category: 'foods',
    position: 1
}]

const Bakso = () => {
    const handleProductClickTracking = detailProduct => {
        productClickTracking(detailProduct);
        // SelectItemGA4(detailProduct);
    }

    const handleProductView = detailProduct => {
        productView(detailProduct);
        // ViewItemGA4(detailProduct);
    }

    const handleAddtoCart = detailProduct => {
        addToCartTracking(detailProduct);
        // AddToCartGA4(detailProduct);
    }
    return ( 
        <div>
            <TittleHead title="Bakso" />
            <h1>bakso</h1>
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
 
export default Bakso;