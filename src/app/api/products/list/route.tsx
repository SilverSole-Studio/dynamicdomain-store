import {supabase} from "@/utils/supabase";
import {NextResponse} from "next/server";

export async function GET() {
  const {data: items, error: itemErr} = await supabase
    .from('products')
    .select('*');

  if (itemErr) {
    console.error("items error: ", itemErr);
    return NextResponse.json({
      success: false, result: "server error"
    }, {
      status: 500
    });
  }

  return NextResponse.json({
    success: true,
    reason: "success",
    products: {
      items: items
    }
  });
}
