

interface ProductDetailsProps {
    params: {
        productid: number
    }
}
const productDetails: React.FC<ProductDetailsProps> = ({params: {
    productid
}}) => (
    <div>
        <h1>{'Product Details' +  ' ' + productid}</h1>
    </div>
)
export default productDetails;