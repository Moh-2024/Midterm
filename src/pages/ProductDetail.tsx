import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';


function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: product, loading } = useFetch(
    `https://fakestoreapi.com/products/${id}`
  );

  if (loading) {
    return <p className="page">Loading...</p>;
  }

  return (
    <div className="page">
    <h2>{product.title}</h2>
    <p>{product.category}</p>
    <p>{product.description}</p>
    <img src={product.image} alt={product.title} />

    <p></p>
    <button className="btn" onClick={() => navigate('/products')}>
     Back to Products
    </button>
    </div>
  );
}

export default ProductDetail;