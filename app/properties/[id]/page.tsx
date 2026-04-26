import Image from "next/image";
import ReservationSideBar from "../../components/properties/ReservationSideBar";
import { getUserId } from "@/app/lib/actions";

import apiService from "@/app/services/apiService";
import Link from "next/link";

const PropertyDetailPage = async ({params}:{params: Promise<{ id: string }>}) => {
  const resolvedParams = await params;
  
  const property = await apiService.get(`/api/properties/${resolvedParams.id}/`)
  const userId = await getUserId();

  return (
    <main className=" max-w-[1500px] px-6 mx-auto pb-6">
      <div className="w-full h-[64vh] overflow-hidden relative rounded-xl mb-4">
        <Image
          fill
          src={property.image_url}
          className="object-cover w-full h-full"
          alt="Beach House"
        />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="col-span-3 py-6 pr-6">
            <h1 className="mb-4 text-4xl">{property.title}</h1>
            <span className="mb-6 block text-lg text-gray-600">{property.guests}Guests - {property.bedrooms}Beds - {property.bathrooms}Bath</span>
            <hr />

            <Link className="py-6 flex items-center space-x-4"
            href={`/landlords/${property.landlord.id}`}>
              {property.landlord.avatar_url && (

                <Image src="/profile_pic_1.jpg" alt="DP" width={50} height={50} className="rounded-full"/>
              )}
                <p><strong>{property.landlord.name}</strong> is your host</p>
            </Link>
            <hr />
            <p className="mt-6 text-lg">{property.description}</p>
        </div>
        <ReservationSideBar property={property} userId={userId} />
      </div>
    </main>
  );
};

export default PropertyDetailPage;
