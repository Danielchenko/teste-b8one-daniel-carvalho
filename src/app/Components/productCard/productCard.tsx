import BuyButton from "../buyButton/buyButton"
import Wishlist from "../wishlist/wishlist";
import Image from "next/image";
import styles from "./productCard.module.css"
import formatCurrency from "@/app/utils/formatCurrency";
import { Product } from "@/app/types";

interface ProductCardProps {
  product: Product;
}



const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  
    return (
        <>
          <div key={product.id} className={styles.card}>
            <Image src={product.image} width={240} height={240} alt={product.name} className={styles.image}/>
            <div className={styles.infos}>
              <h3 className={styles.productName}>{product.name}</h3>
              <div>
                <p className={styles.productPrice}> {formatCurrency(product.price)}</p>
                <p className={styles.productDiscount}>{formatCurrency(product.discountValue)}</p>
                <p className={styles.productInstallment}>em até {product.installment}x de <span>{formatCurrency((product.discountValue / product.installment))}</span> sem juros</p>
              </div>
            </div>
            <BuyButton />
            <Wishlist />
          </div>
          
        </>
    );
  }

  export default ProductCard;