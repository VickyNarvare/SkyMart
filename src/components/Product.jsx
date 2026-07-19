import React from "react";
import { Star, ShoppingCart, Package, Truck, Shield } from "lucide-react";

const Product = ({ product }) => {
  if (!product) return null;

  const {
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
    tags,
    shippingInformation,
    reviews,
    images,
    availabilityStatus,
  } = product;

  const discountedPrice = (price - (price * discountPercentage) / 100).toFixed(
    2,
  );
  const stockColor =
    stock > 50
      ? "text-green-400"
      : stock > 10
        ? "text-yellow-400"
        : "text-red-400";

  return (
    <div className="group bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/5 hover:border-purple-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/5 flex flex-col">
      {/* Image */}
      <div className="relative overflow-hidden bg-[#222] aspect-square">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Discount Badge */}
        {discountPercentage > 0 && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-lg">
            -{Math.round(discountPercentage)}%
          </div>
        )}
        {/* Rating Badge */}
        <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/70 backdrop-blur-sm text-yellow-400 text-xs font-semibold px-2.5 py-1 rounded-lg">
          <Star className="w-3 h-3 fill-yellow-400" />
          {rating.toFixed(1)}
        </div>
        {/* Image Gallery Indicator */}
        {images && images.length > 1 && (
          <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white text-[10px] px-2 py-1 rounded-lg">
            +{images.length - 1} photos
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-3 flex-1">
        {/* Brand & Category */}
        <div className="flex items-center gap-2 flex-wrap">
          {brand && (
            <span className="text-[11px] font-semibold text-purple-400 bg-purple-500/10 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              {brand}
            </span>
          )}
          <span className="text-[11px] text-gray-500 bg-white/5 px-2.5 py-0.5 rounded-full capitalize">
            {category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-white font-semibold text-base leading-tight line-clamp-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
          {description}
        </p>

        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-white">
            ${discountedPrice}
          </span>
          {discountPercentage > 0 && (
            <span className="text-sm text-gray-500 line-through">
              ${price.toFixed(2)}
            </span>
          )}
        </div>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex gap-1.5 flex-wrap">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] text-gray-500 bg-white/5 px-2 py-0.5 rounded capitalize"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Divider */}
        <div className="border-t border-white/5 my-1" />

        {/* Meta Info Grid */}
        <div className="grid grid-cols-2 gap-2 text-xs">
          {/* Stock */}
          <div className="flex items-center gap-1.5 text-gray-400">
            <Package className="w-3.5 h-3.5" />
            <span className={stockColor}>{stock} in stock</span>
          </div>

          {/* Availability */}
          <div className="flex items-center gap-1.5 text-gray-400">
            <div
              className={`w-1.5 h-1.5 rounded-full ${
                availabilityStatus === "In Stock"
                  ? "bg-green-500"
                  : availabilityStatus === "Low Stock"
                    ? "bg-yellow-500"
                    : "bg-red-500"
              }`}
            />
            <span>{availabilityStatus}</span>
          </div>

          {/* Shipping */}
          <div className="flex items-center gap-1.5 text-gray-400 col-span-2">
            <Truck className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">{shippingInformation}</span>
          </div>
        </div>

        {/* Reviews */}
        {reviews && reviews.length > 0 && (
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span className="flex">
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${
                    i < Math.round(rating)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-600"
                  }`}
                />
              ))}
            </span>
            <span>({reviews.length} reviews)</span>
          </div>
        )}

        {/* Action Button */}
        <button className="mt-auto w-full bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold py-2.5 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2">
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
