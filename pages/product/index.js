import Link from 'next/link';

function ProductList({ productId = 100}) {
  return (
    <>
      <Link href="/">
        Home
      </Link>
      <h3><Link href="product/1">Product 1</Link></h3>
      <h3><Link href="product/2">Product 2</Link></h3>
      <h3><Link href="product/3" replace>Product 3</Link></h3>
      <h3>
        <Link href={`/product/${productId}`}>
          <a>Product {productId}</a>
        </Link>
      </h3>
    </>
  );
};

export default ProductList; 