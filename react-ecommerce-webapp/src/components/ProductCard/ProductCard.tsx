import { Product } from "../../types/types";
import './ProductCard.css';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const ProductCard: React.FC<{product: Product}> = ({product}) => {
    return (
        <div className="product-card">
            <h3>{product.title}</h3>
            <h6>{product.category}</h6>
            <p>${product.price.toFixed(2)}</p>
            <Rating value={product.rating.rate} readOnly={true} style={{maxWidth: 125}}  />
            <img className="product-image" src={product.image} alt={product.title} />
            <p>{product.description}</p>
        </div>
    );
};

export default ProductCard;