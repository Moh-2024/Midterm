import useFetch from '../hooks/useFetch';
import ProductCard from '../components/Product';

function Products() {
  const { data: products, loading } = useFetch(
    'https://fakestoreapi.com/products'
  );

  if (loading) {
    return <p className="page">Loading...</p>;
  }

  return (
    <div className="page">
      <h1>Products</h1>

      <div className="products">
        {products.map((product: any) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;