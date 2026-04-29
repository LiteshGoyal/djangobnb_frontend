"use client";
import { useState } from "react";
import SelectCountry, { SelectCountryValue } from "../forms/SelectCountry";
import Modal from "./Modal";
import { Range } from "react-date-range";
import useSearchModal, { SearchQuery } from "@/app/hooks/useSearchModal";
import CustomButton from "../forms/CustomButton";
import DatePicker from "../forms/Calendar";

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

const SearchModal = () => {
  let content = <></>;

  const SearchModal = useSearchModal();

  const [dateRange, setDateRange] = useState<Range>(initialDateRange);
  const [country, setCountry] = useState<SelectCountryValue>();
  const [numGuests, setNumGuests] = useState<string>('1');
  const [numBedrooms, setNumBedrooms] = useState<string>('0');
  const [numBathrooms, setNumBathrooms] = useState<string>('0');


  const closeAndSearch = () =>{
    const newSearchQuery: SearchQuery ={
        country: country?.label,
        checkIn : dateRange.startDate,
        checkOut : dateRange.endDate,
        guests: parseInt(numGuests),
        bedrooms: parseInt(numBedrooms),
        bathrooms: parseInt(numBathrooms),
        category:''


    }

    SearchModal.setQuery(newSearchQuery);
    
    SearchModal.close();
  }

  // SET DATE RANGE
  const _setDateRange = (selection: Range) => {
    if (SearchModal.step === "checkin") {
      SearchModal.open("checkout");
    } else if (SearchModal.step === "checkout") {
      SearchModal.open("details");
    }

    setDateRange(selection);
  };

  const contentLocation = (
    <>
      <h2 className="mb-6 text-2xl">Where do you want to go</h2>

      <SelectCountry
        value={country}
        onChange={(value) => setCountry(value as SelectCountryValue)}
      />

      <div className="mt-6 flex flex-row gap-4">
        <CustomButton
          label="Check-in Date"
          onClick={() => SearchModal.open("checkin")}
        />
      </div>
    </>
  );

  const contentCheckin = (
    <>
      <h2 className="mb-6 text-2xl">When Do you wan to Check-in?</h2>

      <DatePicker
        value={dateRange}
        onChange={(value) => _setDateRange(value.selection)}
      />
      <div className="mt-6 flex flex-row gap-4">
        <CustomButton
          label="Location"
          onClick={() => SearchModal.open("location")}
        />
      </div>
      <div className="mt-6 flex flex-row gap-4">
        <CustomButton
          label="Check-out Date"
          onClick={() => SearchModal.open("checkout")}
        />
      </div>
    </>
  );

  const contentCheckout = (
    <>
      <h2 className="mb-6 text-2xl">When Do you want to Check-out?</h2>

      <DatePicker
        value={dateRange}
        onChange={(value) => _setDateRange(value.selection)}
      />
      <div className="mt-6 flex flex-row gap-4">
        <CustomButton
          label="Check-in"
          onClick={() => SearchModal.open("checkin")}
        />
      </div>
      <div className="mt-6 flex flex-row gap-4">
        <CustomButton
          label="Details"
          onClick={() => SearchModal.open("details")}
        />
      </div>
    </>
  );

  const contentDetails = (
    <>
      <h2 className="mb-6 text-2xl">Details</h2>

      <div className="space-y-4">
        <div className="space-y-4">
            <label htmlFor="">Number Of Guests:</label>
            <input type="number" min="1" value={numGuests} onChange={(e) => setNumGuests(e.target.value)} 
            className='w-full h-14 px-4 border border-gray-300 rounded-xl'
            placeholder="Number Of Guests..."
            />
        </div>

        <div className="space-y-4">
            <label htmlFor="">Number Of BedRooms:</label>
            <input type="number" min="1" value={numBedrooms} onChange={(e) => setNumBedrooms(e.target.value)} 
            className='w-full h-14 px-4 border border-gray-300 rounded-xl'
            placeholder="Number Of Bedrooms..."
            />
        </div>

        <div className="space-y-4">
            <label htmlFor="">Number Of  Bathrooms:</label>
            <input type="number" min="1" value={numBathrooms} onChange={(e) => setNumBathrooms(e.target.value)} 
            className='w-full h-14 px-4 border border-gray-300 rounded-xl'
            placeholder="Number Of Bathrooms..."
            />
        </div>

      </div>

      <div className="mt-6 flex flex-row gap-4">
        <CustomButton
          label="Check-out"
          onClick={() => SearchModal.open("checkout")}
        />
      </div>
      <div className="mt-6 flex flex-row gap-4">
        <CustomButton
          label="Search"
          onClick={closeAndSearch}
        />
      </div>
    </>
  );

  if (SearchModal.step == "location") {
    content = contentLocation;
  } else if (SearchModal.step == "checkin") {
    content = contentCheckin;
  } else if (SearchModal.step == "checkout") {
    content = contentCheckout;
  }  else if (SearchModal.step == "details") {
    content = contentDetails;
  } 

  return (
    <Modal
      isOpen={SearchModal.isOpen}
      close={SearchModal.close}
      label="Search"
      content={content}
    />
  );
};

export default SearchModal;
