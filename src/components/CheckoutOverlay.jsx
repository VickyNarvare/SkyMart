import { X, MapPin, CreditCard, ShoppingBag } from "lucide-react";
import { Bounce, toast } from "react-toastify";
import { UserContext } from "../context/userContext";
import { useContext } from "react";

const CheckoutOverlay = ({ open, onClose, total }) => {
  if (!open) return null;
  const { setAddToCardOpen, setAddToCardItems } = useContext(UserContext)
  return (
    <div className="fixed inset-0 z-999 flex items-center justify-center bg-black/70 backdrop-blur-md">
      <div className="w-[95%] max-w-lg rounded-3xl border border-white/10 bg-[#181818] p-6 shadow-2xl animate-in fade-in zoom-in duration-200">

        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">
            Checkout
          </h2>

          <button
            onClick={onClose}
            className="rounded-full bg-white/10 p-2 hover:bg-red-500 transition"
          >
            <X size={20} className="text-white" />
          </button>
        </div>

        <div className="mt-5 rounded-2xl bg-[#222] p-4 flex gap-3">
          <MapPin className="text-lime-400 mt-1" />

          <div>
            <h4 className="text-white font-semibold">
              Shipping Address
            </h4>

            <p className="text-gray-400 text-sm">
              123 Street Name,
              New Delhi,
              India
            </p>
          </div>
        </div>

        <div className="mt-5 rounded-2xl bg-[#222] p-4 flex gap-3">
          <CreditCard className="text-lime-400 mt-1" />

          <div>
            <h4 className="text-white font-semibold">
              Payment Method
            </h4>

            <p className="text-gray-400 text-sm">
              Cash On Delivery
            </p>
          </div>
        </div>

        <div className="mt-6 flex justify-between border-t border-white/10 pt-5">
          <span className="text-lg text-gray-300">
            Total
          </span>

          <span className="text-2xl font-bold text-lime-400">
            ${total}
          </span>
        </div>

        <div className="mt-7 flex gap-3">

          <button
            onClick={onClose}
            className="flex-1 rounded-xl border border-white/10 bg-[#252525] py-3 text-white hover:bg-[#333] transition"
          >
            Cancel
          </button>

          <button
            onClick={() => {
              toast.success("  🎉 Order Placed !")
              onClose();
              setAddToCardOpen(false)
              setAddToCardItems([]);
            }
            }
            className="flex-1 rounded-xl bg-lime-400 py-3 font-semibold text-black hover:bg-lime-300 transition"
          >
            Place Order
          </button>

        </div>
      </div>
    </div>
  );
};

export default CheckoutOverlay;
