interface ProductDetailLayoutProps {
    children: string
}

const productDetailLayout = (props: ProductDetailLayoutProps) => {
  return (
    <div>
      <h1>Product Detail</h1>
      <div>{props.children}</div>
    </div>
  );
}
export default productDetailLayout;