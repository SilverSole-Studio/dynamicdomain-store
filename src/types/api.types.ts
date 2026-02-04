import {Tables} from "@/types/supabase";


export enum GetProductsListReason {
  server = "server",
  invalid = "invalid",
  not_found = "not_found",
  unauthorized = "unauthorized",
}

export type Products = {
  items: Tables<"products">[],
}

export type GetProductsListResult =
  | {
      success: true;
      reason: GetProductsListReason;
      products: Products
    }
  | {
      success: false;
      reason: GetProductsListReason;
    };
