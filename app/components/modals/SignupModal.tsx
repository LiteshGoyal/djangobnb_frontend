"use client";
import Modal from "./Modal";
import { useState } from "react";
import { useRouter } from "next/navigation";

import useSignupModal from "@/app/hooks/useSignupModal";
import CustomButton from "../forms/CustomButton";
import apiService from "@/app/services/apiService";
import { handleLogin } from "@/app/lib/actions";

const SignupModal = () => {
  const router = useRouter();
  const signupModal = useSignupModal();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const [errors, setErrors] = useState<string[]>([]);

  const submitSignup = async () => {
    const formData = {
        email : email,
        name : name,
        password1 : password1,
        password2 : password2
    }
    const response : any = await apiService.postWithoutToken('/api/auth/register/', formData);
    if(response.access){
        handleLogin(response.user.pk, response.access, response.refresh)
        signupModal.close();

        router.push('/');

    }else{
        const tmpErrors : string[] = Object.values(response).map((error: any) =>{
            return error;
        })
        setErrors(tmpErrors);
    }
  };

  const content = (
    <>
      <h2 className="mb-6 text-2xl">Welcome, Please SignUp</h2>
      <form onSubmit={(e) => {
  e.preventDefault();
  submitSignup();
}} className="space-y-4">
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="w-full px-4 h-[54px] border border-gray-100 rounded-xl"
          name=""
          id=""
          placeholder="Your Email Address"
        />
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="w-full px-4 h-[54px] border border-gray-100 rounded-xl"
          name=""
          id=""
          placeholder="Your name"
        />

        <input
          onChange={(e) => setPassword1(e.target.value)}
          type="password"
          className="w-full px-4 h-[54px] border border-gray-100 rounded-xl"
          name=""
          id=""
          placeholder="Your password "
        />

        <input
          onChange={(e) => setPassword2(e.target.value)}
          type="password"
          className="w-full px-4 h-[54px] border border-gray-100 rounded-xl"
          name=""
          id=""
          placeholder="Repeat password "
        />

        {errors.map((error, index) => {
          return (
            <div
              className="p-5 bg-airbnb text-white rounded-xl opacity-80"
              key={`error_${index}`}
            >
              {error}
            </div>
          );
        })}

        <CustomButton
          label="Submit"
          onClick={submitSignup}
        />
      </form>
    </>
  );

  return (
    <Modal
      isOpen={signupModal.isOpen}
      close={signupModal.close}
      label="Sign Up"
      content={content}
    />
  );
};
export default SignupModal;
