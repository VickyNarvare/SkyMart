import React, { useContext } from "react";
import { Star, ShoppingCart, Package, Truck } from "lucide-react";
import { useNavigate } from "react-router";
import { UserContext } from "../context/userContext";

const Product = ({ product }) => {
    const { setAddToCardItems, addToCardItems, setAddToCardOpen } = useContext(UserContext)
    if (!product) return null;
    const { id, price, stock, discountPercentage, thumbnail, title, tags, reviews, availabilityStatus, description, shippingInformation, rating, images, brand, category } = product
    const discountedPrice = (price - (price * discountPercentage) / 100).toFixed(
        2,
    );
    const stockColor =
        stock > 50
            ? "text-green-400"
            : stock > 10
                ? "text-yellow-400"
                : "text-red-400";
    const link = useNavigate();
    return (
        <div className="group relative bg-[#141414] rounded-2xl overflow-hidden border border-white/6 hover:border-lime-400/25 transition-all duration-500 hover:shadow-[0_0_40px_-12px_rgba(166,255,60,0.25)] hover:-translate-y-1 flex flex-col">
            <div className="pointer-events-none absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-br from-lime-400/10 via-transparent to-lime-400/5 blur-xl" />

            <div className="relative overflow-hidden bg-[#1c1c1c] aspect-4/3">
                <img
                    src={thumbnail}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#141414] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />


                {discountPercentage > 0 && (
                    <div className="absolute top-3 left-3 bg-linear-to-br from-red-500 to-red-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-xl shadow-lg backdrop-blur-sm">
                        -{Math.round(discountPercentage)}%
                    </div>
                )}

                <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/60 backdrop-blur-lg text-yellow-400 text-[11px] font-semibold px-2.5 py-1 rounded-xl border border-white/5 shadow-lg">
                    <Star className="w-3 h-3 fill-yellow-400" />
                    {rating.toFixed(1)}
                </div>
                {images && images.length > 1 && (
                    <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-lg text-white text-[10px] px-2.5 py-1 rounded-lg border border-white/5">
                        +{images.length - 1} photos
                    </div>
                )}
                <div onClick={() => link(`/products/${id}`)} className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-2 group-hover:translate-y-0">
                    <span className="bg-lime-400/20 backdrop-blur-xl text-black text-xs font-semibold px-5 py-2.5 rounded-full border border-lime-400/30 shadow-lg hover:bg-lime-400/30 hover:border-lime-400/50 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer select-none">
                        Quick View
                    </span>
                </div>
            </div>
            <div className="relative z-10 p-3.5 flex flex-col gap-2 flex-1">

                <div className="flex items-center gap-2 flex-wrap">
                    {brand && (
                        <span className="text-[10px] font-semibold text-lime-400 bg-lime-400/10 px-2.5 py-0.5 rounded-full uppercase tracking-wider border border-lime-400/10">
                            {brand}
                        </span>
                    )}
                    <span className="text-[10px] text-gray-500 bg-white/5 px-2.5 py-0.5 rounded-full capitalize border border-white/5">
                        {category}
                    </span>
                </div>
                <h3 className="text-white font-semibold text-sm leading-tight line-clamp-2 group-hover:text-lime-100 transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-gray-500 text-[11px] leading-relaxed line-clamp-1">
                    {description}
                </p>
                <div className="flex items-baseline gap-2.5">
                    <span className="text-xl font-bold text-white tracking-tight">
                        ${discountedPrice}
                    </span>
                    {discountPercentage > 0 && (
                        <span className="text-sm text-gray-600 line-through">
                            ${price.toFixed(2)}
                        </span>
                    )}
                    {discountPercentage > 0 && (
                        <span className="text-[10px] font-medium text-lime-400 bg-lime-400/10 px-1.5 py-0.5 rounded ml-auto">
                            Save {Math.round(discountPercentage)}%
                        </span>
                    )}
                </div>


                {tags && tags.length > 0 && (
                    <div className="flex gap-1.5 flex-wrap">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-[9px] text-gray-600 bg-white/3 px-2 py-0.5 rounded-md capitalize border border-white/5"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                )}


                <div className="border-t border-white/4 my-0.5" />

                <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-[11px]">
                    <div className="flex items-center gap-1.5 text-gray-500">
                        <Package className="w-3 h-3" />
                        <span className={stockColor}>{stock} in stock</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-gray-500">
                        <div
                            className={`w-1.5 h-1.5 rounded-full ${availabilityStatus === "In Stock"
                                ? "bg-green-500"
                                : availabilityStatus === "Low Stock"
                                    ? "bg-yellow-500"
                                    : "bg-red-500"
                                }`}
                        />
                        <span>{availabilityStatus}</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-gray-500 col-span-2">
                        <Truck className="w-3 h-3 shrink-0" />
                        <span className="truncate">{shippingInformation}</span>
                    </div>
                </div>

                {reviews && reviews.length > 0 && (
                    <div className="flex items-center gap-2 text-[11px] text-gray-500">
                        <span className="flex gap-0.5">
                            {Array.from({ length: 5 }, (_, i) => (
                                <Star
                                    key={i}
                                    className={`w-3 h-3 ${i < Math.round(rating)
                                        ? "text-yellow-400 fill-yellow-400"
                                        : "text-gray-700"
                                        }`}
                                />
                            ))}
                        </span>
                        <span>({reviews.length})</span>
                    </div>
                )}

                <button
                    onClick={() => {
                        setAddToCardItems((prev) => {
                            const isExist = prev.find(item => item.id === product.id);
                            if (isExist) {
                                setAddToCardOpen(true)
                                return prev.map(item =>
                                    item.id === product.id
                                        ? { ...item, quantity: item.quantity + 1 }
                                        : item
                                );
                            }
                            setAddToCardOpen(true)
                            return [...prev, { ...product, quantity: 1 }];
                        });
                    }}
                    className="mt-auto w-full bg-linear-to-r from-lime-400 to-lime-500 hover:from-lime-300 hover:to-lime-400 text-black text-xs font-bold py-2.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_-4px_rgba(166,255,60,0.15)] hover:shadow-[0_0_25px_-4px_rgba(166,255,60,0.35)] active:scale-[0.98]">
                    <ShoppingCart className="w-3.5 h-3.5" />
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default Product;
