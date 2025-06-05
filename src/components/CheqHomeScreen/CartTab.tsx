import React from "react";

const CartTab: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col p-6">
      <h2 className="text-xl font-bold mb-4">Your Cart (2)</h2>
      <div className="bg-white rounded-xl p-4 mb-4 flex items-center gap-4">
        <img src="/category-pizza.png" alt="Classic Cheese Pizza" className="w-16 h-16 rounded-lg object-cover" />
        <div className="flex-1">
          <div className="font-semibold">Classic Cheese Pizza</div>
          <div className="text-xs text-gray-500">Size: Medium</div>
          <div className="flex items-center gap-2 mt-2">
            <button className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center font-bold">-</button>
            <span>1</span>
            <button className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">+</button>
          </div>
        </div>
        <div className="font-bold">$12.99</div>
      </div>
      <div className="bg-white rounded-xl p-4 mb-4 flex items-center gap-4">
        <img src="/category-pizza.png" alt="Pepperoni Pizza" className="w-16 h-16 rounded-lg object-cover" />
        <div className="flex-1">
          <div className="font-semibold">Pepperoni Pizza</div>
          <div className="text-xs text-gray-500">Size: Medium</div>
          <div className="flex items-center gap-2 mt-2">
            <button className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center font-bold">-</button>
            <span>1</span>
            <button className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">+</button>
          </div>
        </div>
        <div className="font-bold">$14.99</div>
      </div>
      <div className="mt-auto">
        <div className="flex flex-col gap-1 mb-4">
          <div className="flex items-center justify-between text-gray-500">
            <span>Subtotal</span>
            <span>$27.98</span>
          </div>
          <div className="flex items-center justify-between text-gray-500">
            <span>Delivery Fee</span>
            <span>$2.99</span>
          </div>
          <div className="flex items-center justify-between text-gray-500">
            <span>Tax</span>
            <span>$2.24</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-lg font-bold mb-4">
          <span>Total</span>
          <span>$33.21</span>
        </div>
        <div className="flex gap-3">
          <button className="flex-1 border-2 border-[#E95B2F] text-[#E95B2F] font-bold rounded-full py-3">Split Bill</button>
          <button className="flex-1 bg-[#E95B2F] text-white font-bold rounded-full py-3">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartTab; 