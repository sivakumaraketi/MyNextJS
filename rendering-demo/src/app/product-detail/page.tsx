import { Suspense } from "react"
import Reviews from "../components/reviews"

const ProductDetailPage = () => {

    return (
        <div>
            <h1>Product Detail</h1>
            <Suspense fallback={<div>Loading reviews...</div>}>
                <Reviews />
            </Suspense>
        </div>
    )
}
export default ProductDetailPage;