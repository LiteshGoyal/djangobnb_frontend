import {create} from "zustand";

interface LoginModalstore{
    isOpen: boolean;
    open:()=> void;
    close:()=>void;
}

const useLoginModal = create<LoginModalstore>((set)=>({
    isOpen: false,
    open:()=> set({isOpen:true}),
    close:()=> set({isOpen:false}),
    
}));

export default useLoginModal;