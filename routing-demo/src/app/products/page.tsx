import Link from "next/link";

const Products = () => (
    <>
    <h1>Product List</h1>
   <h2><Link href='products/1'>Product 1</Link></h2> 
   <h2><Link href='products/2'>Product 2</Link></h2> 
   <h2><Link href='products/3'>Product 3</Link></h2> 
    <Link href="/">Back To Home</Link>
    </>
)
 

export default Products;