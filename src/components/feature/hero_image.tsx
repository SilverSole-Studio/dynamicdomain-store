import Link from "next/link";
import {Products} from "@/types/api.types";

type HeroImageProps = {
  products?: Products | null;
};

export default function HeroImage({products}: HeroImageProps) {
  const item = products?.items?.[0];

  if (!item) return null;

  return (
    <Link
      href={`/products/${item.slug}`}
      className="group overflow-hidden relative block w-full min-h-[45dvh] dark:bg-gray-200 cursor-pointer rounded-lg"
    >
      <img
        src={item.cover_image_path ?? ""}
        alt={item.short_name}
        className="absolute inset-0 w-full h-full object-cover object-[90%_center] md:object-right select-none pointer-events-none"
      />
      <h1
        style={{color: item.theme_color ?? undefined}}
        className="anton font-extrabold text-6xl lg:text-9xl absolute left-4 bottom-4 select-none bg-gray-100 2xl:bg-transparent max-sm:backdrop-blur-2xl p-4 rounded-xl max-sm:shadow-2xl"
      >
        {item.short_name}
      </h1>
    </Link>
  );
}
