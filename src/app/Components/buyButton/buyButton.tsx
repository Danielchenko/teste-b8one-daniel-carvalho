'use client'
import { useState } from "react";
import styles from "./buyButton.module.css"

interface ButtonProps {
    id: number;
  }

const BuyButton: React.FC<ButtonProps> = ({ id }) => {
const [isActive, setIsActive] = useState(false);
const [productId, setProductId] = useState<number | null>(null);


const handleClick = () => {
  const newIsActive = !isActive;
    setIsActive(newIsActive);
    
    if (newIsActive) {
      setProductId(id); 
    } else {
      setProductId(null);
    }
};

return(
    <button 
        type='button'
        onClick={handleClick} 
        className={ isActive ? styles.containerActive : styles.containerDefault}>
        <span>adicionar</span>
    </button>  

)}

export default BuyButton