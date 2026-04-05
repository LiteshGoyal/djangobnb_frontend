import {create} from "zustand";

interface SignupModalstore{
    isOpen: boolean;
    open:()=> void;
    close:()=>void;
}

const useSignupModal = create<SignupModalstore>((set)=>({
    isOpen: false,
    open:()=> set({isOpen:true}),
    close:()=> set({isOpen:false}),
    
}));

export default useSignupModal;