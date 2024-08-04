
import styles from "./page.module.css"
import { getAllProducts } from "./services/productService";
import ProductCard from "./Components/productCard/productCard";

export default async function Home() {
  const products = await getAllProducts();

  return (
    <main className={styles.main}>
      {products.map(product => (
        <ProductCard key={product.id} product={product}/>
      ))}
    </main>
  );
}
