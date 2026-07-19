import React, { useContext } from "react";
import Product from "../components/Product";
import { UserContext } from "../context/userContext";
const ProductsPage = () => {
  const { allProductData } = useContext(UserContext);
  const { products } = allProductData;
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-8">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products?.map((elem) => {
          return <Product product={elem} key={elem.id} />;
        })}
      </div>
    </div>
  );
};

export default ProductsPage;
