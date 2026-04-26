
import Image from "next/image";
// import ContactButton from "@/app/components/ContactButton";
// import PropertyList from "@/app/components/properties/PropertyList";
import apiService from "../services/apiService";
import Link from "next/link";

const MyReservationsPage = async () => {
  const reservations = await apiService.get("/api/auth/myreservations/");
  console.log('reservations',reservations)

  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <div className="">
        <h1 className="my-6 text-2xl">My Reservations</h1>

        <div className="space-y-4">
          {reservations.map((reservation: any) => {
            return (
              <div
      key={reservation.id} className="p-5 grid grid-cols-2 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
                <div className="col-span-1">
                  <div className="relative overflow-hidden aspect-square rounded-xl">
                    <Image
                      src={reservation.property.image_url}
                      fill
                      alt="reservation"
                      className="hover:scale-110 object-cover transition w-full h-full"
                    />
                  </div>
                </div>
                <div className="col-span-1 md:col-span-3 space-y-2">
                  <h2 className="mb-4 text-xl ">{reservation.property.title}</h2>
                  <p className="mb-2">
                    <strong>Check In Date: </strong>{reservation.start_date}
                  </p>
                  <p className="mb-2">
                    <strong>Check Out Date: </strong>{reservation.end_date}
                  </p>
                  <p className="mb-2">
                    <strong>Number of nights: </strong>{reservation.number_of_nights}
                  </p>
                  <p className="mb-2">
                    <strong>Total price: </strong>${reservation.total_price}
                  </p>
                  <Link href= {`/properties/${reservation.property.id}`}
                  className="cursor-pointer py-4 px-6 bg-airbnb text-white inline-block rounded-xl mt-6">
                    View Property
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};
export default MyReservationsPage;
