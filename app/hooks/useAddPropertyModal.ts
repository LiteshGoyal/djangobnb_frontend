import {create} from "zustand";

interface AddPropertyModalstore{
    isOpen: boolean;
    open:()=> void;
    close:()=>void;
}

const useAddPropertyModal = create<AddPropertyModalstore>((set)=>({
    isOpen: false,
    open:()=> set({isOpen:true}),
    close:()=> set({isOpen:false}),
    
}));

export default useAddPropertyModal;