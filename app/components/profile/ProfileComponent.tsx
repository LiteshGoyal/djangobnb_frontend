"use client";

import { useEffect } from "react";
import useLoginModal from "@/app/hooks/useLoginModal";
import CustomButton from "../forms/CustomButton";
import { useRouter } from "next/navigation";

const ProfileComponent = ({ user }: { user: any | null }) => {
  const loginModal = useLoginModal();
  const router = useRouter();
  useEffect(() => {
    if (!user) {
      loginModal.open();
    }
  }, [user]);

  if (!user) return null;

  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
        <div className="">
          <h1 className="my-6 text-2xl">
            <strong> My Profile</strong>
          </h1>
        </div>

        {/* PROFILE SECTION  */}

        <section className="py-12 bg-gray-50 sm:py-16 lg:py-8">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 px-12 mt-12 sm:mt-16 gap-y-12 sm:gap-x-10 sm:grid-cols-2 sm:px-0 xl:grid-cols-2 lg:mt-20">
              <div className="xl:items-stretch xl:flex w-xl lg:w-4xl ">
                <img
                  className="object-cover w-auto h-64 shrink-0 rounded-xl"
                  src={user.avatar_url || '/profile_pic_1.jpg'}
                  alt=""
                />

                <div className="flex flex-col justify-between flex-1 mt-6 xl:mt-0 xl:ml-10">
                  <div>
                    <label htmlFor="">Name:</label>
                    <input
                      type="text"
                      placeholder={user.name}
                      className="w-full p-2 bg-gray-200 rounded-xl"
                      //   value={newMessage}
                      //   onChange={(e) => setNewMessage(e.target.value)}
                    />
                    <label htmlFor="">Email:</label>
                    <input
                      type="text"
                      placeholder={user.email}
                      className="w-full p-2 bg-gray-200 rounded-xl"
                      //   value={newMessage}
                      //   onChange={(e) => setNewMessage(e.target.value)}
                    />
                  </div>


                  <div className="mt-6 space-x-6 grid grid-cols-2">
                    
                    
                    <CustomButton label='Go to Reservations' onClick= {()=> router.push('myreservations')} />
                    <CustomButton label='Go to Properties'  onClick= {()=> router.push('myproperties')} />


                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
  );
};

export default ProfileComponent;

// const ProfileComponent = ({ user }: { user: any | null }) =>{
    
//   const loginModal  = useLoginModal();

  
//   if (userId) {
//     return (
//       <main className="max-w-[1500px] mx-auto px-6 pb-6">
//         <div className="">
//           <h1 className="my-6 text-2xl">
//             <strong> My Profile</strong>
//           </h1>
//         </div>

//         {/* PROFILE SECTION  */}

//         <section className="py-12 bg-gray-50 sm:py-16 lg:py-8">
//           <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//             <div className="grid grid-cols-1 px-12 mt-12 sm:mt-16 gap-y-12 sm:gap-x-10 sm:grid-cols-2 sm:px-0 xl:grid-cols-2 lg:mt-20">
//               <div className="xl:items-stretch xl:flex">
//                 <img
//                   className="object-cover w-auto h-64 shrink-0 rounded-xl"
//                   src={user.avatar_url}
//                   alt=""
//                 />

//                 <div className="flex flex-col justify-between flex-1 mt-6 xl:mt-0 xl:ml-10">
//                   <div>
//                     <label htmlFor="">Name:</label>
//                     <input
//                       type="text"
//                       placeholder={user.name}
//                       className="w-full p-2 bg-gray-200 rounded-xl"
//                       //   value={newMessage}
//                       //   onChange={(e) => setNewMessage(e.target.value)}
//                     />
//                     <label htmlFor="">Email:</label>
//                     <input
//                       type="text"
//                       placeholder={user.email}
//                       className="w-full p-2 bg-gray-200 rounded-xl"
//                       //   value={newMessage}
//                       //   onChange={(e) => setNewMessage(e.target.value)}
//                     />
//                     {/* <p className="text-lg font-bold text-gray-900">
//                     {user.email}
//                   </p>
//                   <p className="mt-1 text-sm font-medium text-gray-500">
//                     {user.name}
//                   </p> */}
//                   </div>

//                   <div className="mt-6 xl:mt-0">
//                     <p className="text-sm font-medium text-gray-600">
//                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                       Aliquam sit elit posuere morbi laoreet tortor auctor.
//                     </p>
//                     <p className="mt-4 text-sm font-medium text-gray-600">
//                       Aliquam sit elit posuere morbi laoreet tortor auctor. Urna
//                       integer enim id neque.
//                     </p>
//                   </div>

//                   <div className="mt-6 xl:mt-0">
//                     <a
//                       href="#"
//                       title=""
//                       className="inline-flex items-center justify-center flex-1 px-5 py-3 text-xs font-bold tracking-widest text-white uppercase transition-all duration-200 border border-transparent rounded-lg shrink-0 bg-sky-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 hover:bg-sky-500"
//                       role="button"
//                     >
//                       Follow on Twitter
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//     );
//   }else{
//     loginModal.open()
//   }
// }

// export default ProfileComponent;