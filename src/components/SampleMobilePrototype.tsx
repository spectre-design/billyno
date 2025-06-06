import React from "react";

export default function SampleMobilePrototype() {
  return (
    <div className="w-[390px] h-[839px] bg-gradient-to-br from-solidOpal to-grisNautico rounded-[36px] shadow-inner flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-xs bg-white rounded-2xl shadow p-4 flex flex-col gap-4">
        <h2 className="text-xl font-bold text-seaDeep text-center">Checkout</h2>
        <input className="border rounded px-3 py-2" placeholder="Card Number" />
        <input className="border rounded px-3 py-2" placeholder="MM/YY" />
        <input className="border rounded px-3 py-2" placeholder="CVC" />
        <button className="bg-seaDeep text-solidOpal rounded py-2 font-semibold hover:bg-nickelPlate transition">Pay $49.99</button>
      </div>
    </div>
  );
}
