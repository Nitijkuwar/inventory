import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import Product from "./Product";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  const getProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.category.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchText, products]);

  if (loading) return <>Loading...</>;
  if (error) return <>{error.message}</>;

  return (
    <>
      <div className="p-4">
        <Input
          type="text"
          placeholder="Search products..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {filteredProducts.length ? (
          filteredProducts.map((product, index) => (
            <Product product={product} key={index} />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            No products found.
          </div>
        )}
      </div>
    </>
  );
};

export default ProductList;
