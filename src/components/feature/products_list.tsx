import {Products} from "@/types/api.types";
import {Skeleton} from "@/components/ui/skeleton";
import Link from "next/link";
import {getProductsFromDatabase} from "@/lib/products";
import {Suspense} from "react";

export default function ProductsList({products} : {products: Products}) {

  return (
    <Suspense fallback={<ProductsListSkeleton/>}>
      {renderProducts(products)}
    </Suspense>
  );
}

function renderProducts(products: Products) {
  return (
    <>
      <h1 className="text-5xl sm:text-5xl lg:text-2xl font-bold pt-10">Products</h1>
      <div className="flex justify-between flex-wrap">
        {products.items.map((item, i) => {
          return (
            <div key={item.id} className="flex flex-col gap-1 w-full md:w-56 lg:w-60" tabIndex={i}>
              <div className="relative w-full  h-[25dvh] mb-2 overflow-hidden rounded-2xl">
                <Link href={`/products/${item.slug}`} className="absolute inset-0 z-30"/>
                <img
                  src={item.product_image_path ?? ""}
                  alt={item.name}
                  className="absolute inset-0 z-10 h-full w-full object-contain object-center p-2"
                />
                <div className="absolute inset-0 z-20 bg-black/20"/>
              </div>
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <div className="flex gap-2 items-baseline">
                <p className="text-md font-semibold text-red-400">{item.currency}${item.unit_price}</p>
                <p className="text-sm font-semibold line-through text-gray-500">{item.currency}${item.origin_price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  )
}

export function ProductsListSkeleton() {
  return (
    <div className="flex justify-between overflow-x-clip">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="flex flex-col gap-5">
          <Skeleton className="w-[20dvw] h-[25dvh] rounded-2xl" />
          <Skeleton className="w-[10dvw] h-7" />
          <Skeleton className="w-[15dvw] h-7" />
        </div>
      ))}
    </div>
  );
}
