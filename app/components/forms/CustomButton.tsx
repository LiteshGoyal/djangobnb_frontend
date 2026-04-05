interface CustomButtonProps{
    label : string;
    onClick?: () => void;
    className?:string
}

const CustomButton: React.FC<CustomButtonProps> = ({
    label,
    className,
    onClick
}) =>{
    return(
        <div
            onClick={onClick}
        className={` py-4 bg-airbnb hover:bg-airbnb-dark text-white rounded-xl transition cursor-pointer    text-center ${className}`}>
            {label}

        </div>
    )
}


export default CustomButton;