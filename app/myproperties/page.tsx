
import PropertyList from "@/app/components/properties/PropertyList";
import { getUserId } from "../lib/actions";


const MyPropertiesPage = async() => {
  const userId = await getUserId();




  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <div className="">
        <h1 className="my-6 text-2xl"><strong> My Properties</strong></h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <PropertyList landlord_id={userId}/>
        </div>
      </div>
    </main>
  );
};

export default MyPropertiesPage;
