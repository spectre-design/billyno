import React from "react";
import { MapPin, QrCode, ShoppingCart, Wifi, BatteryFull, Signal } from "lucide-react";

export type FoodCategory = { name: string; img: string };
export type Restaurant = {
  name: string;
  cuisine: string;
  img: string;
  rating: number;
  reviews: number;
  isNew: boolean;
  isFavorite: boolean;
  discount: string;
  category: string;
  delivery: string;
  distance: string;
  tags: string[];
};

function RestaurantCard({ r }: { r: Restaurant }) {
  return (
    <div className="relative bg-white rounded-3xl border border-gray-200 flex items-start py-2 px-3 gap-3 overflow-hidden">
      <img src={r.img} alt={r.name} className="w-24 h-24 rounded-2xl object-cover flex-shrink-0" />
      <div className="flex-1 min-w-0 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <div className="font-bold text-base text-[#222]">{r.name}</div>
            {r.isNew && <span className="bg-green-100 text-green-700 text-xs font-bold rounded px-2 py-0.5 ml-1">NEW</span>}
          </div>
          <div className="text-sm text-gray-500 mb-1">{r.cuisine}</div>
          <div className="flex items-center text-xs text-gray-500 gap-2 mb-1">
            <span className="flex items-center gap-1">⭐ <span className="font-semibold text-[#222]">{r.rating}</span> <span className="text-gray-400">({r.reviews})</span></span>
            <span className="mx-1">·</span>
            <span className="flex items-center gap-1"><svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M12 8v4l3 1" stroke="#A0AEC0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>{r.delivery}</span>
            <span className="mx-1">·</span>
            <span className="flex items-center gap-1"><svg width="16" height="16" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#A0AEC0" strokeWidth="2"/><circle cx="12" cy="12" r="3" stroke="#A0AEC0" strokeWidth="2"/></svg>{r.distance}</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-1">
            {r.tags.map((tag) => (
              <span key={tag} className="bg-[#F7F9FB] text-gray-700 text-xs font-semibold rounded-full px-3 py-1 border border-gray-200">{tag}</span>
            ))}
          </div>
        </div>
        <button className="mt-2 bg-[#E95B2F] text-white text-xs font-bold rounded-full px-4 py-2 shadow hover:bg-[#d14e28] transition">Order Now</button>
      </div>
      {r.discount && (
        <span className="absolute top-2 left-2 bg-[#E95B2F] text-white text-xs font-bold rounded px-2 py-1 z-10 shadow">{r.discount}</span>
      )}
      <span className="absolute top-2 right-2">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path d="M12 21s-6.2-5.2-8.5-8.1C1.2 10.1 2.1 7 5 6.2c1.7-.4 3.3.5 4.1 1.7C9.9 7.5 11.1 7 12 7s2.1.5 2.9.9c.8-1.2 2.4-2.1 4.1-1.7 2.9.8 3.8 3.9 1.5 6.7C18.2 15.8 12 21 12 21z" stroke="#E95B2F" strokeWidth="2" fill={r.isFavorite ? '#E95B2F' : 'white'} />
        </svg>
      </span>
    </div>
  );
}

type HomeTabProps = {
  foodCategories: FoodCategory[];
  featuredRestaurants: Restaurant[];
};

const HomeTab: React.FC<HomeTabProps> = ({ foodCategories, featuredRestaurants }) => {
  return (
    <>
      {/* Status Bar */}
      <div className="flex items-center justify-between w-full px-6 pt-4 pb-2 text-xs text-[#222] font-semibold select-none">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <Wifi className="w-4 h-4" />
          <Signal className="w-4 h-4" />
          <span>100%</span>
          <BatteryFull className="w-5 h-5 ml-1" />
        </div>
      </div>
      {/* Header */}
      <div className="w-full flex items-center justify-between px-6 pt-2 pb-3">
        <div className="flex flex-col gap-0.5">
          <span className="text-xs text-gray-400 font-medium">Your Location</span>
          <span className="flex items-center gap-1 text-lg font-bold text-[#222]">
            <MapPin className="w-4 h-4 text-[#E95B2F]" /> New York
          </span>
        </div>
        <div className="flex items-center gap-4">
          <button className="relative bg-[#F7F9FB] rounded-full p-2 border border-[#E5E7EB]">
            <QrCode className="w-5 h-5 text-[#222]" />
          </button>
          <button className="relative bg-[#F7F9FB] rounded-full p-2 border border-[#E5E7EB]">
            <ShoppingCart className="w-5 h-5 text-[#222]" />
            <span className="absolute -top-1 -right-1 bg-[#E95B2F] text-white text-xs font-bold rounded-full px-1.5 py-0.5 border-2 border-white">2</span>
          </button>
        </div>
      </div>
      {/* Promo Card */}
      <div className="w-[390px] min-h-[180px] rounded-2xl overflow-hidden shadow relative mb-6 flex flex-col items-center justify-center" style={{ background: '#E95B2F' }}>
        <img src="/delivery_driver.jpg" alt="Delivery Promo" className="absolute inset-0 w-full h-full object-cover object-top z-0" />
        <div className="absolute inset-0 bg-[#E95B2F]/25 z-10" />
        <div className="flex flex-col items-center justify-center w-full px-6 py-8 relative z-20">
          <span className="inline-block bg-white text-[#E95B2F] text-xs font-bold rounded px-3 py-1 mb-3">LIMITED TIME</span>
          <h2 className="text-white text-xl font-extrabold leading-tight mb-2 text-center">Free Delivery Week</h2>
          <p className="text-white text-sm font-medium mb-5 text-center">No fees on all orders over $15<br />+ earn 5% back on pickup</p>
          <button className="bg-white text-[#E95B2F] font-bold rounded-full px-6 py-2 text-sm shadow-lg">Order Now</button>
        </div>
      </div>
      {/* Carousel Dots */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <span className="w-3 h-3 rounded-full bg-[#E95B2F]" />
        <span className="w-2 h-2 rounded-full bg-gray-300" />
        <span className="w-2 h-2 rounded-full bg-gray-300" />
      </div>
      {/* Food Categories */}
      <div className="w-full px-6 mb-6">
        <h3 className="text-lg font-bold text-[#222] mb-3">Food Categories</h3>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {foodCategories.map((cat) => (
            <div key={cat.name} className="flex flex-col items-center min-w-[72px]">
              <div className="w-[72px] h-[72px] rounded-full bg-white shadow border-2 border-[#F7F9FB] flex items-center justify-center overflow-hidden mb-1">
                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover" />
              </div>
              <span className={`text-sm font-semibold ${cat.name === 'Pizza' ? 'text-[#E95B2F]' : 'text-gray-700'}`}>{cat.name}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Featured Restaurants */}
      <div className="w-full px-6 mb-0">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold text-[#222]">Featured Restaurants</h3>
          <a href="#" className="text-[#E95B2F] text-sm font-bold">View all</a>
        </div>
        <div className="flex flex-col overflow-y-auto pb-0 items-center" style={{ maxHeight: 320 }}>
          {featuredRestaurants.map((r, i) => (
            <div key={r.name} className={i === featuredRestaurants.length - 1 ? '' : 'mb-6'}>
              <RestaurantCard r={r} />
            </div>
          ))}
        </div>
      </div>
      {/* Spacer for below-the-fold */}
      <div className="flex-1" />
    </>
  );
};

export default HomeTab; 