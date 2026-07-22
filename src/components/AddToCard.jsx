import { X, ShoppingCart, Trash2, Minus, Plus, ArrowRight } from "lucide-react";
import { UserContext } from "../context/userContext";
import { useContext, useState } from "react";
import Product from "./Product";
import CheckoutOverlay from "./CheckoutOverlay";
import { toast } from "react-toastify";


const AddToCard = ({ setAddToCardOpen }) => {
    const { addToCardItems, setAddToCardItems } = useContext(UserContext)
    const subtotal = addToCardItems && addToCardItems.reduce(
        (acc, item) => acc + item.price * (item.quantity || 1),
        0
    );
    const totalItems = addToCardItems && addToCardItems.reduce((acc, item) => acc + (item.quantity || 1), 0);
    const [checkoutOpen, setCheckoutOpen] = useState(false);
    return (
        <>
            <div
                onClick={() => setAddToCardOpen(false)}
                className="fixed inset-0 z-55 bg-black/60 backdrop-blur-sm animate-fade-in"
            />

            <div className="fixed top-0 right-0 z-60 h-screen w-full max-w-md bg-[#0d0d0d] border-l border-white/6 shadow-2xl flex flex-col animate-slide-in">
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/6">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <ShoppingCart className="w-6 h-6 text-lime-400" strokeWidth={1.8} />
                            <span className="absolute -top-2 -right-2 flex items-center justify-center min-w-[1.1rem] min-h-[1.1rem] text-[10px] font-bold text-black bg-lime-400 rounded-full leading-none px-1">
                                {addToCardItems.length}
                            </span>
                        </div>
                        <div>
                            <h2 className="text-white font-semibold text-lg leading-tight">
                                Shopping Cart
                            </h2>
                            <p className="text-gray-500 text-xs">
                                {addToCardItems.length} Items  </p>
                        </div>
                    </div>
                    <button
                        onClick={() => setAddToCardOpen(false)}
                        className="p-2 rounded-xl text-gray-500 hover:text-white hover:bg-white/5 transition-all duration-200"
                    >
                        <X className="w-5 h-5" strokeWidth={1.8} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 custom-scrollbar">
                    {addToCardItems && addToCardItems.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-center py-12">
                            <ShoppingCart className="w-16 h-16 text-gray-700 mb-4" strokeWidth={1.2} />
                            <h3 className="text-white font-medium text-lg">Your cart is empty</h3>
                            <p className="text-gray-500 text-sm mt-1">Add some products to get started</p>
                        </div>
                    ) : (
                        addToCardItems && addToCardItems.map((item) => (
                            <div
                                key={item.id}
                                className="group flex gap-4 bg-[#141414] rounded-xl p-3.5 border border-white/6 hover:border-white/10 transition-all duration-300"
                            >
                                <div className="w-20 h-20 rounded-lg bg-[#1c1c1c] overflow-hidden shrink-0 border border-white/6">
                                    <img
                                        src={item.thumbnail}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                <div className="flex-1 min-w-0 flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-start justify-between gap-2">
                                            <div className="min-w-0">
                                                <h4 className="text-white text-sm font-medium leading-tight truncate">
                                                    {item.title}
                                                </h4>
                                                <span className="text-[10px] text-lime-400/70 font-medium">
                                                    {item.brand}
                                                </span>
                                            </div>
                                            <button
                                                onClick={() => {
                                                    setAddToCardItems(prev => {
                                                        toast.error("Product Removed in Card!");
                                                        return prev.filter(cartItem => cartItem.id !== item.id);
                                                    });
                                                }}
                                                className="p-1 rounded-lg text-gray-600 hover:text-red-400 hover:bg-red-500/10 opacity-0 group-hover:opacity-100 transition-all duration-200">
                                                <Trash2 className="w-4 h-4" strokeWidth={1.8} />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between mt-2">
                                        <div className="flex items-center gap-1 bg-[#1c1c1c] rounded-lg border border-white/6 p-0.5">
                                            <button
                                                onClick={() => {
                                                    setAddToCardItems(prev =>
                                                        prev
                                                            .map(cartItem =>
                                                                cartItem.id === item.id
                                                                    ? {
                                                                        ...cartItem,
                                                                        quantity: cartItem.quantity - 1,
                                                                    }
                                                                    : cartItem
                                                            )
                                                            .filter(cartItem => cartItem.quantity > 0)
                                                    );
                                                }}
                                                className="p-1 rounded-md text-gray-500 hover:text-white hover:bg-white/10 transition-all duration-200">
                                                <Minus className="w-3.5 h-3.5" strokeWidth={2.5} />
                                            </button>
                                            <span className="w-8 text-center text-white text-sm font-medium select-none">
                                                {item.quantity}
                                            </span>
                                            <button
                                                onClick={() =>
                                                    setAddToCardItems(prev =>
                                                        prev.map(product =>
                                                            product.id === item.id
                                                                ? { ...product, quantity: product.quantity + 1 }
                                                                : product
                                                        )
                                                    )
                                                }
                                                className="p-1 rounded-md text-gray-500 hover:text-white hover:bg-white/10 transition-all duration-200">
                                                <Plus className="w-3.5 h-3.5" strokeWidth={2.5} />
                                            </button>
                                        </div>

                                        <div className="text-right">
                                            <span className="text-white font-bold text-sm">
                                                ${(item.price * item.quantity).toFixed(2)}
                                            </span>
                                            {item.quantity > 1 && (
                                                <p className="text-[10px] text-gray-600">
                                                    ${item.price.toFixed(2)} each
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                <div className="border-t border-white/6 px-6 py-5 space-y-4 bg-[#0d0d0d]">

                    {addToCardItems.length > 0 && (
                        <div className="space-y-2 text-sm">
                            <div className="flex items-center justify-between text-gray-400  text-lg">
                                <span>Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                        </div>
                    )}
                    <button
                        onClick={() => {
                            setCheckoutOpen(true)
                        }}
                        className="w-full flex items-center justify-center gap-2 bg-lime-400 hover:bg-lime-500 text-black font-semibold py-3.5 rounded-xl transition-all duration-200 active:scale-[0.98] shadow-lg shadow-lime-500/20 hover:shadow-lime-500/30">
                        Proceed to Checkout
                        <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                    </button>
                    <CheckoutOverlay
                        open={checkoutOpen}
                        onClose={() => setCheckoutOpen(false)}
                        total={subtotal.toFixed(2)}
                    />
                </div>
            </div >

            < style > {`
                @keyframes slide-in {
                    from { transform: translateX(100%); }
                    to { transform: translateX(0); }
                }
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-slide-in {
                    animation: slide-in 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .animate-fade-in {
                    animation: fade-in 0.3s ease-out;
                }
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 3px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(255, 255, 255, 0.2);
                }
            `}</style>
        </>
    );
};

export default AddToCard;
