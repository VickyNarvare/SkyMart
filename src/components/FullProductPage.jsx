import React, { useEffect, useState } from "react";
import {
    Star,
    Package,
    Truck,
    Shield,
    RotateCcw,
    Hash,
    Ruler,
    Weight,
    Barcode,
    QrCode,
    ChevronLeft,
    ChevronRight,
    ShoppingCart,
    Heart,
    Share2,
    Clock,
    User,
    CheckCircle,
    AlertCircle,
} from "lucide-react";
import { useParams } from "react-router";
import axios from "axios";
const FullProductPage = () => {
    const [productData, setProductData] = useState({})
    const { id } = useParams()
    const getSingleProduct = async () => {
        try {
            const { data } = await axios.get(`https://dummyjson.com/products/${id}`)
            setProductData(data)
        } catch (error) {
            console.log("error => ", error)
        }
    }
    useEffect(() => {
        getSingleProduct();
    }, [id])

    const p = productData;
    const discountedPrice = p.price ? (p.price - (p.price * (p.discountPercentage || 0)) / 100).toFixed(2) : "0.00";
    const stockColor =
        p.stock > 50
            ? "text-green-400"
            : p.stock > 10
                ? "text-yellow-400"
                : "text-red-400";
    const stockBg =
        p.stock > 50
            ? "bg-green-500/20 border-green-500/25"
            : p.stock > 10
                ? "bg-yellow-500/20 border-yellow-500/25"
                : "bg-red-500/20 border-red-500/25";

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white">
            <div className="max-w-7xl mx-auto px-4 pt-6 pb-2">
                <nav className="flex items-center gap-2 text-sm text-gray-500">
                    <a href="/" className="hover:text-lime-400 transition-colors">
                        Home
                    </a>
                    <span>/</span>
                    <a href="/products" className="hover:text-lime-400 transition-colors">
                        Products
                    </a>
                    <span>/</span>
                    <span className="text-gray-300 capitalize">{p?.category}</span>
                </nav>
            </div>

            {/* Main product section */}
            <div className="max-w-7xl mx-auto px-4 py-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12">
                    {/* ── Image Gallery ── */}
                    <div className="space-y-4">
                        <div className="relative bg-[#141414] rounded-2xl overflow-hidden border border-white/6 group">
                            <div className="pointer-events-none absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-br from-lime-400/10 via-transparent to-lime-400/5 blur-xl" />
                            <img
                                src={p?.images?.[0]}
                                alt={p?.title || "Product image"}
                                className="w-full h-full max-h-125 object-contain p-8 group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                            {/* Discount badge */}
                            {p.discountPercentage > 0 && (
                                <div className="absolute top-4 left-4 bg-linear-to-br from-red-500 to-red-600 text-white text-sm font-bold px-3.5 py-1.5 rounded-xl shadow-lg backdrop-blur-sm">
                                    -{Math.round(p.discountPercentage)}%
                                </div>
                            )}
                            {/* Rating badge */}
                            <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/60 backdrop-blur-lg text-yellow-400 text-sm font-semibold px-3 py-1.5 rounded-xl border border-white/5 shadow-lg">
                                <Star className="w-4 h-4 fill-yellow-400" />
                                {p.rating?.toFixed(1)}
                            </div>

                        </div>

                    </div>

                    {/* ── Product Info ── */}
                    <div className="space-y-6">
                        {/* Brand & Category */}
                        <div className="flex items-center gap-3 flex-wrap">
                            {p.brand && (
                                <span className="text-xs font-bold text-lime-400 bg-lime-400/10 px-3 py-1 rounded-full uppercase tracking-wider border border-lime-400/15">
                                    {p.brand}
                                </span>
                            )}
                            <span className="text-xs text-gray-400 bg-white/5 px-3 py-1 rounded-full capitalize border border-white/5">
                                {p.category}
                            </span>
                            <span className="text-xs text-gray-500 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                                SKU: {p.sku}
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl xl:text-4xl font-bold text-white leading-tight">
                            {p.title}
                        </h1>

                        {/* Description */}
                        <p className="text-gray-400 leading-relaxed text-base">
                            {p.description}
                        </p>

                        {/* Price */}
                        <div className="flex items-baseline gap-3">
                            <span className="text-4xl font-bold text-white tracking-tight">
                                ${discountedPrice}
                            </span>
                            {p.discountPercentage > 0 && p.price && (
                                <span className="text-xl text-gray-600 line-through">
                                    ${p.price?.toFixed(2)}
                                </span>
                            )}
                            {p.discountPercentage > 0 && (
                                <span className="text-sm font-semibold text-lime-400 bg-lime-400/10 px-3 py-1 rounded-full border border-lime-400/20">
                                    Save {Math.round(p.discountPercentage)}%
                                </span>
                            )}
                        </div>

                        {/* Tags */}
                        {p.tags && p.tags.length > 0 && (
                            <div className="flex gap-2 flex-wrap">
                                {p.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs text-gray-400 bg-white/5 px-3 py-1.5 rounded-lg capitalize border border-white/5 hover:border-lime-400/20 hover:text-lime-300 transition-all duration-200"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* Availability & Stock */}
                        <div className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-xl border ${stockBg} ${stockColor}`}>
                            {p.availabilityStatus === "In Stock" ? (
                                <CheckCircle className="w-4 h-4" />
                            ) : (
                                <AlertCircle className="w-4 h-4" />
                            )}
                            <span className="font-semibold text-sm">{p.availabilityStatus}</span>
                            <span className="text-gray-500 mx-1">•</span>
                            <Package className="w-3.5 h-3.5 opacity-70" />
                            <span className="text-sm">{p.stock} units available</span>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-3 pt-2">
                            <button className="flex-1 bg-linear-to-r from-lime-400 to-lime-500 hover:from-lime-300 hover:to-lime-400 text-black font-bold py-3.5 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2.5 shadow-[0_0_30px_-6px_rgba(166,255,60,0.2)] hover:shadow-[0_0_35px_-4px_rgba(166,255,60,0.4)] active:scale-[0.98] text-sm">
                                <ShoppingCart className="w-4 h-4" />
                                Add to Cart
                            </button>
                            <button className="bg-[#1c1c1c] hover:bg-[#252525] border border-white/8 hover:border-lime-400/25 p-3.5 rounded-xl transition-all duration-300 active:scale-[0.95]">
                                <Heart className="w-5 h-5 text-gray-400 hover:text-red-400 transition-colors" />
                            </button>
                            <button className="bg-[#1c1c1c] hover:bg-[#252525] border border-white/8 hover:border-lime-400/25 p-3.5 rounded-xl transition-all duration-300 active:scale-[0.95]">
                                <Share2 className="w-5 h-5 text-gray-400 hover:text-lime-400 transition-colors" />
                            </button>
                        </div>

                        {/* Minimum Order Notice */}
                        <div className="bg-[#141414] border border-white/5 rounded-xl px-4 py-3 flex items-center gap-3">
                            <AlertCircle className="w-4 h-4 text-yellow-400 shrink-0" />
                            <span className="text-sm text-gray-400">
                                Minimum order quantity:{" "}
                                <span className="text-white font-semibold">{p.minimumOrderQuantity} units</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Details Grid ── */}
            <div className="max-w-7xl mx-auto px-4 py-10">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <span className="w-1 h-6 bg-lime-400 rounded-full inline-block" />
                    Product Details
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Dimensions */}
                    <div className="bg-[#141414] border border-white/5 rounded-xl p-4 flex items-start gap-3 hover:border-lime-400/15 transition-all duration-300">
                        <div className="p-2.5 bg-lime-400/10 rounded-lg">
                            <Ruler className="w-4 h-4 text-lime-400" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">
                                Dimensions
                            </p>
                            {/* <p className="text-sm text-white font-medium mt-0.5">
                                {p.dimensions.width} × {p.dimensions.height} × {p.dimensions.depth} cm
                            </p> */}
                        </div>
                    </div>

                    {/* Weight */}
                    <div className="bg-[#141414] border border-white/5 rounded-xl p-4 flex items-start gap-3 hover:border-lime-400/15 transition-all duration-300">
                        <div className="p-2.5 bg-lime-400/10 rounded-lg">
                            <Weight className="w-4 h-4 text-lime-400" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">
                                Weight
                            </p>
                            <p className="text-sm text-white font-medium mt-0.5">{p.weight} g</p>
                        </div>
                    </div>

                    {/* Warranty */}
                    <div className="bg-[#141414] border border-white/5 rounded-xl p-4 flex items-start gap-3 hover:border-lime-400/15 transition-all duration-300">
                        <div className="p-2.5 bg-lime-400/10 rounded-lg">
                            <Shield className="w-4 h-4 text-lime-400" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">
                                Warranty
                            </p>
                            <p className="text-sm text-white font-medium mt-0.5">{p.warrantyInformation}</p>
                        </div>
                    </div>

                    {/* Shipping */}
                    <div className="bg-[#141414] border border-white/5 rounded-xl p-4 flex items-start gap-3 hover:border-lime-400/15 transition-all duration-300">
                        <div className="p-2.5 bg-lime-400/10 rounded-lg">
                            <Truck className="w-4 h-4 text-lime-400" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">
                                Shipping
                            </p>
                            <p className="text-sm text-white font-medium mt-0.5">{p.shippingInformation}</p>
                        </div>
                    </div>

                    {/* Return Policy */}
                    <div className="bg-[#141414] border border-white/5 rounded-xl p-4 flex items-start gap-3 hover:border-lime-400/15 transition-all duration-300">
                        <div className="p-2.5 bg-lime-400/10 rounded-lg">
                            <RotateCcw className="w-4 h-4 text-lime-400" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">
                                Return Policy
                            </p>
                            <p className="text-sm text-white font-medium mt-0.5">{p.returnPolicy}</p>
                        </div>
                    </div>

                    {/* Barcode */}
                    <div className="bg-[#141414] border border-white/5 rounded-xl p-4 flex items-start gap-3 hover:border-lime-400/15 transition-all duration-300">
                        <div className="p-2.5 bg-lime-400/10 rounded-lg">
                            <Barcode className="w-4 h-4 text-lime-400" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">
                                Barcode
                            </p>
                            <p className="text-sm text-white font-medium mt-0.5">{p.meta?.barcode}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── QR Code Section ── */}
            <div className="max-w-7xl mx-auto px-4 pb-10">
                <div className="bg-[#141414] border border-white/5 rounded-xl p-5 flex flex-col sm:flex-row items-center gap-5 hover:border-lime-400/15 transition-all duration-300">
                    <div className="p-3 bg-white rounded-xl">
                        <img
                            src={p.meta?.qrCode}
                            alt="QR Code"
                            className="w-20 h-20 object-contain"
                        />
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-white flex items-center gap-2">
                            <QrCode className="w-4 h-4 text-lime-400" />
                            Product QR Code
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                            Scan this code to view product details on your mobile device.
                        </p>
                    </div>
                </div>
            </div>

            {/* ── Reviews Section ── */}
            <div className="max-w-7xl mx-auto px-4 pb-16">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <span className="w-1 h-6 bg-lime-400 rounded-full inline-block" />
                    Customer Reviews
                    <span className="text-sm font-normal text-gray-500 ml-1">
                        ({p.reviews?.length})
                    </span>
                </h2>

                {/* Rating Summary */}
                <div className="bg-[#141414] border border-white/5 rounded-xl p-5 mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
                    <div className="flex flex-col items-center">
                        <span className="text-4xl font-bold text-white">{p.rating?.toFixed(1)}</span>
                        <div className="flex gap-0.5 mt-1">
                            {Array.from({ length: 5 }, (_, i) => (
                                <Star
                                    key={i}
                                    className={`w-4 h-4 ${i < Math.round(p.rating)
                                        ? "text-yellow-400 fill-yellow-400"
                                        : "text-gray-700"
                                        }`}
                                />
                            ))}
                        </div>
                        <span className="text-xs text-gray-500 mt-1">{p.reviews?.length} reviews</span>
                    </div>
                    <div className="flex-1 w-full space-y-1.5">
                        {[5, 4, 3, 2, 1]?.map((star) => {
                            const count = p.reviews?.filter((r) => Math.round(r.rating) === star).length;
                            const pct = p.reviews?.length ? (count / p.reviews.length) * 100 : 0;
                            return (
                                <div key={star} className="flex items-center gap-2 text-xs">
                                    <span className="text-gray-400 w-4 text-right">{star}</span>
                                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                                    <div className="flex-1 h-1.5 bg-[#1c1c1c] rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-linear-to-r from-yellow-400 to-yellow-500 rounded-full transition-all duration-500"
                                            style={{ width: `${pct}%` }}
                                        />
                                    </div>
                                    <span className="text-gray-500 w-6 text-right">{count}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Reviews List */}
                <div className="space-y-4">
                    {p.reviews?.map((review, i) => (
                        <div
                            key={i}
                            className="bg-[#141414] border border-white/5 rounded-xl p-5 hover:border-white/10 transition-all duration-300"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-linear-to-br from-lime-400/20 to-lime-500/10 border border-lime-400/15 flex items-center justify-center">
                                        <User className="w-5 h-5 text-lime-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-white">
                                            {review.reviewerName}
                                        </p>
                                        <p className="text-[11px] text-gray-500">{review.reviewerEmail}</p>
                                    </div>
                                </div>
                                <div className="flex gap-0.5 shrink-0">
                                    {Array.from({ length: 5 }, (_, s) => (
                                        <Star
                                            key={s}
                                            className={`w-3.5 h-3.5 ${s < review.rating
                                                ? "text-yellow-400 fill-yellow-400"
                                                : "text-gray-700"
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>
                            <p className="text-gray-300 text-sm mt-3 leading-relaxed">
                                “{review.comment}”
                            </p>
                            <div className="flex items-center gap-1.5 mt-3 text-[11px] text-gray-600">
                                <Clock className="w-3 h-3" />
                                {new Date(review.date).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default FullProductPage;
