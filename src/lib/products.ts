import {supabase} from "@/utils/supabase";
import {Products} from "@/types/api.types";

export async function getProductsFromDatabase(): Promise<Products> {
  const {data, error} = await supabase.from("products").select("*");
  if (error) throw error;
  return { items: data ?? []}
}
