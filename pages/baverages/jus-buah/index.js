import TittleHead from "../../../components/TittleHead";
import { addToCartTracking, productClickTracking, productView } from "../../../helper/GTM";

const detailProduct = [{
    name: 'Jus Buah',
    id: 'jusbuah001',
    price: 6000,
    category: 'baverages',
    list: '',
    position: 2
}]

const JusBuah = () => {
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
            <TittleHead title="Jus Buah" />
            <h1>jus buah</h1>
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
 
export default JusBuah;