"use client"
import {useEffect, useState} from "react";
import {GetProductsListResult, Products} from "@/types/api.types";
import {toast} from "sonner";
import {useRouter} from "next/navigation";
import {Skeleton} from "@/components/ui/skeleton";

export default function ProductsList() {
  const router = useRouter();
  const [products, setProducts] = useState<Products | null>(null);

  useEffect(() => {
    async function getProducts() {
      const result: GetProductsListResult = await (
        await fetch("/api/products/list")
      ).json();
      if (result.success) {
        setProducts(result.products);
      } else {
        toast.error("Oops! Something went wrong! Please try again.");
      }
    }

    void getProducts();
  }, []);

  return (
    <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden no-scrollbar p-4 space-y-4">
      {products ? renderProducts(products, router) : productsSkeleton()}

      <div className="relative w-full h-125 overflow-x-clip bg-sidebar rounded-xl">
        <h1 className="anton font-extrabold text-8xl sm:text-9xl absolute left-4 bottom-4 text-gray-200">Coming
          Soon...</h1>
      </div>
    </div>
  );
}

function renderProducts(products: Products, router: ReturnType<typeof useRouter>) {
  return (
    <>
      {products.items.map((item, i) => {
        return (
          <div key={item.id} className="group overflow-hidden relative w-full h-125 dark:bg-gray-200 cursor-pointer rounded-xl"
               tabIndex={i} onClick={() => router.push(`products/${item.slug}`)}>
            <img
              src={item.cover_image_path ?? ''}
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-[90%_center] md:object-right select-none pointer-events-none"
            />
            <h1
              style={{color: item.theme_color ?? undefined}}
              className="anton font-extrabold text-6xl lg:text-9xl absolute left-4 bottom-4 select-none bg-gray-100 2xl:bg-transparent max-sm:backdrop-blur-2xl p-4 rounded-xl max-sm:shadow-2xl">
              {item.name}
            </h1>
          </div>
        );
      })}
    </>
  )
}

function productsSkeleton() {
  return (
    <Skeleton className="w-full h-125 cursor-pointer rounded-xl"/>
  );
}
