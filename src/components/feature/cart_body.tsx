import {useUIStore} from "@/stores/ui-store";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Delete, Trash} from "lucide-react";

export default function CartBody() {
  const sidebarOpen = useUIStore(s => s.isCartOpen);
  const comingSoon = () => {};
  return (
    <div
      className={`h-full overflow-hidden transition-[width,transform] duration-300 ease-out ${
        sidebarOpen ? "w-full sm:w-75 translate-x-0" : "w-0 translate-x-3"
      }`}
    >
      <div className="w-full h-full bg-background rounded-xl border flex flex-col min-h-0">
        {/* Toolbar */}
        <div className="flex min-h-13 p-2 items-center gap-4">
          <p className="font-bold pl-2">Cart</p>
        </div>
        <hr/>

        <div className="flex-1 min-h-0 overflow-y-auto">
          <div className="flex flex-col gap4">
            <div className="flex gap-4 p-4 items-center">
              <div className="rounded-xl w-20 h-20 bg-sidebar flex items-center justify-center overflow-hidden">
                <img className="w-full h-full object-contain" src="/images/silversole/silversole_full.png" alt=""/>
              </div>
              <div className="flex flex-1 min-w-0 flex-col">
                <h3 className="text-lg font-medium">SilverSole</h3>
                <p className="text-sm text-gray-500">Classic</p>
                <h3 className="text-lg font-medium">$1920</h3>
                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center">
                    <Button variant="secondary" onClick={comingSoon} size='sm'>-</Button>
                    <p className="min-w-10 text-center">1</p>
                    <Button variant="secondary" onClick={comingSoon} size="sm">+</Button>
                  </div>
                  <Button variant="ghost">
                    <Trash className="text-red-500"/>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr/>
        <div className="flex flex-col min-h-13 p-2 items-center gap-4">
          <div className="w-full flex justify-between">
            <p className="font-bold pl-2 text-gray-400">Subtotal</p>
            <p className="font-bold pl-2">NTD $1920</p>
          </div>
          <Button className="w-full" onClick={comingSoon}>Checkout</Button>
        </div>
      </div>
    </div>
  );
}
