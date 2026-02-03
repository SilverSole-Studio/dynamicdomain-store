"use client"
import {useRouter} from "next/navigation";
import CartBody from "@/components/feature/cart_body";
import MainBodyShell from "@/components/feature/main_body_shell";

export default function Home() {
  const router = useRouter();

  return (
    <div className="h-[93dvh] w-full bg-sidebar px-5 flex gap-1">
      <MainBodyShell title="Products" backButton={false}>
        {/* Items */}
        <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden no-scrollbar p-4 space-y-4">
          <div className="group overflow-hidden relative w-full h-125 dark:bg-gray-200 cursor-pointer rounded-xl"
               tabIndex={0} onClick={() => router.push("/product/SilverSole")}>
            <img
              src="/images/silversole/silversole_product_bg_v2.png"
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-[90%_center] md:object-right select-none pointer-events-none"
            />
            <h1
              className="anton font-extrabold text-6xl lg:text-9xl absolute left-4 bottom-4 text-blue-700 select-none bg-gray-100 2xl:bg-transparent max-sm:backdrop-blur-2xl p-4 rounded-xl max-sm:shadow-2xl">
              SilverSole
            </h1>
          </div>

          <div className="relative w-full h-125 overflow-x-clip bg-sidebar rounded-xl">
            <h1 className="anton font-extrabold text-8xl sm:text-9xl absolute left-4 bottom-4 text-gray-200">Coming
              Soon...</h1>
          </div>
        </div>
      </MainBodyShell>

      <CartBody/>
    </div>
  );
}
