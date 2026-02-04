"use client"
import {useRouter} from "next/navigation";
import CartBody from "@/components/feature/cart_body";
import MainBodyShell from "@/components/feature/main_body_shell";
import ProductsList from "@/components/feature/products_page";

export default function Home() {
  const router = useRouter();

  return (
    <div className="h-[93dvh] w-full bg-sidebar px-5 flex gap-1">
      <MainBodyShell title="Products" backButton={false}>
        <ProductsList/>
      </MainBodyShell>

      <CartBody/>
    </div>
  );
}
