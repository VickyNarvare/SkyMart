import React, { useContext } from "react";
import Product from "../components/Product";
import { UserContext } from "../context/userContext";
import ProductSkeleton from "../components/ProductSkeleton";
import { useNavigate } from "react-router";

const ProductsPage = () => {
    const { allProductData } = useContext(UserContext);
    const products = allProductData?.products;


    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-white mb-8">Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products
                    ? products.map((elem) => <Product product={elem} key={elem.id} />)
                    : Array.from({ length: 8 }).map((_, i) => (
                        <ProductSkeleton key={i} />
                    ))}
            </div>
        </div>
    );
};

export default ProductsPage;
