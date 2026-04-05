import Image from "next/image";
import ReservationSideBar from "./ReservationSideBar";
const PropertyDetailPage = () => {
  return (
    <main className=" max-w-[1500px] px-6 mx-auto pb-6">
      <div className="w-full h-[64vh] overflow-hidden relative rounded-xl mb-4">
        <Image
          fill
          src="/beach_1.jpg"
          className="object-cover w-full h-full"
          alt="Beach House"
        />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="col-span-3 py-6 pr-6">
            <h1 className="mb-4 text-4xl">Property Name</h1>
            <span className="mb-6 block text-lg text-gray-600">4Guests - 2Beds - 1Bath</span>
            <hr />

            <div className="py-6 flex items-center space-x-4">
                <Image src="/profile_pic_1.jpg" alt="DP" width={50} height={50} className="rounded-full"/>
                <p><strong>John Doe</strong> is your host</p>
            </div>
            <hr />
            <p className="mt-6 text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis vel, rem quisquam inventore ipsum alias, amet itaque dicta unde explicabo architecto.</p>
        </div>
        <ReservationSideBar />
      </div>
    </main>
  );
};

export default PropertyDetailPage;
