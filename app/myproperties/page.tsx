import Image from "next/image";
import ContactButton from "@/app/components/ContactButton";
import PropertyList from "@/app/components/properties/PropertyList";
const MyPropertiesPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <div className="">
        <h1 className="my-6 text-2xl">My Propes</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
          <PropertyList />
        </div>
      </div>
    </main>
  );
};

export default MyPropertiesPage;
