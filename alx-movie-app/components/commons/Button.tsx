import React from "react";

 type ButtonProps = {
   Label: string;
   onPress: () => void;
   className?: string;
   
 };
    const Button: React.FC<ButtonProps> = ({
        Label,
        onPress,
        className = "",
       
    }) => {
        return (
            <button 
                onClick={onPress}
                className={`px-4 py-2 bg-blue-500 text-white rounded ${className} 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
                
            >
                {Label}
            </button>
        );
    }
export default Button;