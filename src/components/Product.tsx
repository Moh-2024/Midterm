import { Link } from 'react-router-dom';

type ProductCardProps = {
  id: number;
  title: string;
  image: string;
};

function ProductCard({ id, title, image }: ProductCardProps) {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <Link to={`/products/${id}`}>{title}</Link>
    </div>
  );
}

export default ProductCard;