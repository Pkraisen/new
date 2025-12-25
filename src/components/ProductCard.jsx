import React from 'react';
import Button from './Button';
import { Star } from 'lucide-react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <div className="card-media">
                <span className="brand-tag">
                    {product.brand}
                </span>

                <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                />
            </div>

            <div className="card-content">
                <h3 className="product-title">{product.name}</h3>
                <p className="product-category">{product.category}</p>

                <div className="card-footer">
                    <span className="product-price">₹{product.price}</span>
                    <div className="rating-badge">
                        <Star size={16} fill="#FACC15" color="#FACC15" />
                        <span className="rating-text">{product.rating}</span>
                    </div>
                </div>

                <Button fullWidth>Add to Cart</Button>
            </div>
        </div>
    );
};

export default ProductCard;
