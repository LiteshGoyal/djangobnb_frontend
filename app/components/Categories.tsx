"use client";

import Image from "next/image";
import { useState } from "react";

import useSearchModal, { SearchQuery } from "../hooks/useSearchModal";

const Categories = () => {
  const searchModal = useSearchModal();
  const [category, setCategory] = useState("");

  const _setCategory = (_category: string) => {
    setCategory(_category);

    const query: SearchQuery = {
      country: searchModal.query.country,
      checkIn: searchModal.query.checkIn,
      checkOut: searchModal.query.checkOut,
      guests: searchModal.query.guests,
      bedrooms: searchModal.query.bedrooms,
      bathrooms: searchModal.query.bathrooms,
      category: _category,
    };

    searchModal.setQuery(query);
  };

  return (
    <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
      <div
        onClick={() => _setCategory("")}
        className={`pb-4 flex flex-col items-center space-y-2 border-b-2  opacity-60 hover:opacity-100 hover:border-gray-200 ${category=='' ? 'border-black opacity-80' : 'border-white'} `}
      >
        <Image src="/icn_category.png" alt="category" width={20} height={20} />
        <span className="text-xs">All</span>
      </div>

      <div
        onClick={() => _setCategory("Beach")}
        className={`pb-4 flex flex-col items-center space-y-2 border-b-2  ${category=='Beach' ? 'border-black opacity-80' : 'border-white'} opacity-60 hover:opacity-100 hover:border-gray-200`}
      >
        <Image src="/icn_category.png" alt="category" width={20} height={20} />
        <span className="text-xs">Beach</span>
      </div>

      <div
        onClick={() => _setCategory("Villas")}
         className={`pb-4 flex flex-col items-center space-y-2 border-b-2  ${category==='Villas' ? 'border-black  opacity-80' : 'border-white'} opacity-60 hover:opacity-100 hover:border-gray-200`}>
        <Image src="/icn_category.png" alt="category" width={20} height={20} />
        <span className="text-xs">Villas</span>
      </div>

      <div
        onClick={() => _setCategory("Cabins")}
         className={`pb-4 flex flex-col items-center space-y-2 border-b-2  ${category==='Cabins' ? 'border-black  opacity-80' : 'border-white'} opacity-60 hover:opacity-100 hover:border-gray-200`}>
        <Image src="/icn_category.png" alt="category" width={20} height={20} />
        <span className="text-xs">Cabins</span>
      </div>

      <div
        onClick={() => _setCategory("Tiny Homes")}
         className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category==='Tiny Homes' ? 'border-black  opacity-80' : 'border-white'} opacity-60 hover:opacity-100 hover:border-gray-200`}>
        <Image src="/icn_category.png" alt="category" width={20} height={20} />
        <span className="text-xs">Tiny homes</span>
      </div>
    </div>
  );
};

export default Categories;
