import React, { useState, useMemo } from "react";
import ProductCard from "../components/ProductCard";
import { products, brands, categories, priceRanges } from "../data";
import "./Products.css";

const Products = () => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchBrand = selectedBrand ? product.brand === selectedBrand : true;
      const matchCategory = selectedCategory
        ? product.category === selectedCategory
        : true;

      let matchPrice = true;
      if (selectedPriceRange) {
        const range = priceRanges.find((r) => r.label === selectedPriceRange);
        if (range) {
          matchPrice = product.price >= range.min && product.price < range.max;
        }
      }

      return matchBrand && matchCategory && matchPrice;
    });
  }, [selectedBrand, selectedCategory, selectedPriceRange]);

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Products</h1>
        <p className="page-description">
          Browse and filter products — {filteredProducts.length} shown
        </p>
      </div>

      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p style={{ color: "var(--text-secondary)", colSpan: "full" }}>
            No products matched your filters. Try broadening your search.
          </p>
        )}
      </div>
    </div>
  );
};

export default Products;
