"use client"
import { useRouter } from "next/navigation"


const OrderProductPage = () => {

    const router = useRouter();

    const handleClick = () => {
        console.log('order clicked')
        router.back()
    }

    return (
        <div>
        <h1>Order Product Page</h1>
        <br />
        <p>Click the button below to order a product</p>
        <br />
        <br />
        <button onClick={handleClick}>Order Product</button>
        <br />
        </div>
    );
}
export default OrderProductPage;