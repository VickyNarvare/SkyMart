const ProductSkeleton = () => {
  return (
    <div className="group relative bg-[#141414] rounded-2xl overflow-hidden border border-white/6 flex flex-col animate-pulse">
      {/* Image placeholder */}
      <div className="relative overflow-hidden bg-[#1c1c1c] aspect-4/3">
        <div className="absolute inset-0 bg-linear-to-br from-white/3 to-white/0" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-3.5 flex flex-col gap-2 flex-1">
        {/* Brand & Category */}
        <div className="flex items-center gap-2">
          <div className="h-4 w-16 rounded-full bg-white/8" />
          <div className="h-4 w-20 rounded-full bg-white/5" />
        </div>

        {/* Title */}
        <div className="h-4 w-3/4 rounded-lg bg-white/8" />
        <div className="h-4 w-1/2 rounded-lg bg-white/5" />

        {/* Description */}
        <div className="h-3 w-full rounded-md bg-white/5" />

        {/* Price */}
        <div className="flex items-baseline gap-2.5">
          <div className="h-7 w-20 rounded-lg bg-white/8" />
          <div className="h-4 w-14 rounded-md bg-white/5" />
        </div>

        {/* Tags */}
        <div className="flex gap-1.5">
          <div className="h-4 w-12 rounded-md bg-white/5" />
          <div className="h-4 w-16 rounded-md bg-white/5" />
          <div className="h-4 w-10 rounded-md bg-white/5" />
        </div>

        {/* Divider */}
        <div className="border-t border-white/4 my-0.5" />

        {/* Meta Info */}
        <div className="grid grid-cols-2 gap-x-2 gap-y-1.5">
          <div className="h-3 w-24 rounded-md bg-white/5" />
          <div className="h-3 w-20 rounded-md bg-white/5" />
          <div className="h-3 w-32 rounded-md bg-white/5 col-span-2" />
        </div>

        {/* Reviews */}
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-3 w-3 rounded-sm bg-white/5" />
            ))}
          </div>
          <div className="h-3 w-8 rounded-md bg-white/5" />
        </div>

        {/* Button */}
        <div className="mt-auto w-full h-10 rounded-xl bg-white/8" />
      </div>
    </div>
  );
};
export default ProductSkeleton;
