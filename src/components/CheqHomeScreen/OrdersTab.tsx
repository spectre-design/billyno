import React from "react";

const OrdersTab: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col p-6">
      <h2 className="text-xl font-bold mb-4">Order Status</h2>
      <div className="bg-[#FFF3ED] rounded-xl p-4 mb-6">
        <div className="flex items-center justify-between mb-1">
          <span className="font-bold text-lg">Order #12345</span>
          <span className="bg-[#E95B2F] text-white text-xs font-bold rounded px-3 py-1">PREPARING</span>
        </div>
        <div className="text-gray-700 mb-1">Ben's Artisan Pizza</div>
        <div className="text-xs text-gray-500 mb-1">Estimated Delivery</div>
        <div className="flex items-center justify-between">
          <span className="font-semibold text-base">15-25 min</span>
          <a href="#" className="text-[#E95B2F] text-sm font-semibold">View Details</a>
        </div>
      </div>
      <h3 className="font-bold mb-2">Order Progress</h3>
      <div className="flex flex-col gap-4 mb-6">
        {[
          { label: "Order Placed", time: "6:15 PM", desc: "Your order has been received by the restaurant.", done: true },
          { label: "Preparing", time: "6:20 PM", desc: "The restaurant is preparing your delicious food.", done: false },
          { label: "Ready", time: "6:30 PM", desc: "Your order is ready for pickup by the delivery driver.", done: false },
          { label: "On the Way", time: "6:40 PM", desc: "Your order is on the way to your location.", done: false },
          { label: "Delivered", time: "6:45 PM", desc: "Your order has been delivered. Enjoy your meal!", done: false },
        ].map((step, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="flex flex-col items-center">
              <span className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-white ${step.done ? 'bg-green-500' : 'bg-gray-200 text-gray-500 border border-gray-300'}`}>{i + 1}</span>
              {i < 4 && <span className="w-1 h-8 bg-gray-200" />}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className={`font-semibold ${step.done ? 'text-green-600' : 'text-gray-700'}`}>{step.label}</span>
                <span className="text-xs text-gray-400 font-semibold">{step.time}</span>
              </div>
              <div className="text-xs text-gray-500 mb-2">{step.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <h3 className="font-bold mb-2">Order Items</h3>
      <div className="bg-gray-50 rounded-xl p-4 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-semibold">Classic Cheese Pizza</div>
            <div className="text-xs text-gray-500">Medium • Quantity: 1</div>
          </div>
          <div className="font-bold">$12.99</div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="font-semibold">Pepperoni Pizza</div>
            <div className="text-xs text-gray-500">Medium • Quantity: 1</div>
          </div>
          <div className="font-bold">$14.99</div>
        </div>
      </div>
    </div>
  );
};

export default OrdersTab; 