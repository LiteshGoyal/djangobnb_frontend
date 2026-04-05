import Image from "next/image";
import ContactButton from "@/app/components/ContactButton";
import PropertyList from "@/app/components/properties/PropertyList";
const MyReservationsPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <div className="">
        <h1 className="my-6 text-2xl">My Reservations</h1>

        <div className="space-y-4">
          <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
            <div className="col-span-1">
              <div className="relative overflow-hidden aspect-square rounded-xl">
                <Image
                  src="/beach_1.jpg"
                  fill
                  alt="reservation"
                  className="hover:scale-110 object-cover transition w-full h-full"
                />
              </div>
            </div>
            <div className="col-span-1 md:col-span-3 space-y-2">
              <h2 className="mb-4 text-xl ">Prop Name</h2>
              <p className="mb-2">
                <strong>Check In Date: </strong>16Dec2003
              </p>
              <p className="mb-2">
                <strong>Check Out Date: </strong>18Dec2003
              </p>
              <p className="mb-2">
                <strong>Number of nights: </strong>2
              </p>
              <p className="mb-2">
                <strong>Total price: </strong>$200
              </p>
              <div className="cursor-pointer py-4 px-6 bg-airbnb text-white inline-block rounded-xl mt-6">
                Go to Property
              </div>
            </div>
          </div>

          <div className="p-5 grid  grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
            <div className="col-span-1">
              <div className="relative overflow-hidden aspect-square rounded-xl">
                <Image
                  src="/beach_1.jpg"
                  fill
                  alt="reservation"
                  className="hover:scale-110 object-cover transition w-full h-full"
                />
              </div>
            </div>
            <div className="col-span-1 md:col-span-3 space-y-2">
              <h2 className="mb-4 text-xl ">Prop Name</h2>
              <p className="mb-2">
                <strong>Check In Date: </strong>16Dec2003
              </p>
              <p className="mb-2">
                <strong>Check Out Date: </strong>18Dec2003
              </p>
              <p className="mb-2">
                <strong>Number of nights: </strong>2
              </p>
              <p className="mb-2">
                <strong>Total price: </strong>$200
              </p>
              <div className="cursor-pointer py-4 px-6 bg-airbnb text-white inline-block rounded-xl mt-6">
                Go to Property
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default MyReservationsPage;
