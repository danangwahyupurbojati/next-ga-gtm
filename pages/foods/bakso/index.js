import TittleHead from "../../../components/TittleHead";
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