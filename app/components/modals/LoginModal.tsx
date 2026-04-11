"use client";
import Modal from "./Modal";
import { useState } from "react";
import { useRouter } from "next/navigation";
import apiService from "@/app/services/apiService";

import { handleLogin } from "@/app/lib/actions";
import useLoginModal from "@/app/hooks/useLoginModal";
import CustomButton from "../forms/CustomButton";

const LoginModal = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  const loginModal = useLoginModal();
  const submitLogin = async () => {
    const formdata = {
      email: email,
      password: password,
    };
    const response = await apiService.postWithoutToken("/api/auth/login/", formdata);

    if (response.access) {
      handleLogin(response.user.pk, response.access, response.refresh);
      loginModal.close();

      router.push("/");
    } else {
      setErrors(response.non_field_errors);
    }
  };
  const content = (
    <>
      <h2 className="mb-6 text-2xl">Welcome, Please Login</h2>
      <form className="space-y-4" action={submitLogin}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="w-full px-4 h-[54px] border border-gray-100 rounded-xl"
          name=""
          id=""
          placeholder="Your Email Address"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="w-full px-4 h-[54px] border border-gray-100 rounded-xl"
          name=""
          id=""
          placeholder="Your PassWord "
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

        <CustomButton label="Submit" onClick={submitLogin} />
      </form>
    </>
  );

  return (
    <Modal
      isOpen={loginModal.isOpen}
      close={loginModal.close}
      label="Log In"
      content={content}
    />
  );
};
export default LoginModal;
