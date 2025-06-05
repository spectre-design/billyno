import React from "react";

const PaymentTab: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col p-6">
      <h2 className="text-xl font-bold mb-4">Checkout</h2>
      <div className="bg-white rounded-xl p-4 mb-4">
        <div className="font-semibold mb-1">Delivery Address</div>
        <div className="flex items-center gap-2 text-gray-700 mb-2">
          <span className="text-lg">📍</span>
          <span>123 Main Street</span>
        </div>
        <div className="text-xs text-gray-500 mb-2">Apt 4B</div>
        <div className="text-xs text-gray-500 mb-2">New York, NY 10001</div>
      </div>
      <div className="bg-white rounded-xl p-4 mb-4">
        <div className="flex items-center justify-between mb-2">
          <div className="font-semibold">Payment Method</div>
          <a href="#" className="text-orange-500 text-sm font-semibold">Change</a>
        </div>
        <div className="flex items-center gap-2 mb-1">
          <span className="bg-blue-100 text-blue-700 font-bold rounded px-2 py-1 text-xs">VISA</span>
          <span className="font-semibold">Visa ending in 4242</span>
        </div>
        <div className="text-xs text-gray-500">Default payment method</div>
      </div>
      <div className="bg-white rounded-xl p-4 mb-4">
        <div className="font-semibold mb-2">Order Summary</div>
        <div className="flex flex-col gap-1 mb-2">
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
        <div className="flex items-center justify-between text-lg font-bold mb-2">
          <span>Total</span>
          <span>$33.21</span>
        </div>
      </div>
      <button className="bg-[#E95B2F] text-white font-bold rounded-full py-4 text-lg mt-auto">Proceed to Payment</button>
    </div>
  );
};

export default PaymentTab; 