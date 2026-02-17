import CartBody from "@/components/feature/cart_body";
import HeroImage from "@/components/feature/hero_image";
import {getProductsFromDatabase} from "@/lib/products";
import ProductsList from "@/components/feature/products_list";
import {MainBodyClearShell} from "@/components/feature/main_body_shell";

export const revalidate = 60;

export default async function Home() {

  const products = await getProductsFromDatabase();

  return (
    <div className="w-full bg-sidebar flex gap-1 px-4 sm:px-8 lg:px-20">
      <MainBodyClearShell>
        <HeroImage products={products}/>
        <ProductsList products={products}/>
      </MainBodyClearShell>
      <CartBody/>
    </div>
  );
}
