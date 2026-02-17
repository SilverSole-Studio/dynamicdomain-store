"use client"
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {ShoppingCart, TextAlignJustify, User} from "lucide-react";
import {useUIStore} from "@/stores/ui-store";
import NotificationDot from "@/components/feature/notification_dot";
import {comingSoon} from "@/utils/util";


export default function Nav() {
  const isHome = false;
  const toggleCart = useUIStore((s) => s.toggleCart);

  return (
    <nav className="sticky top-0 z-50 h-[12dvh] w-full bg-sidebar">
      <div className="mx-auto flex h-full justify-between items-center px-4 sm:px-8 lg:px-20">
        <div className="flex gap-1">
          <Button variant="ghost" size="icon-sm" onClick={() => {
          }} className="p-1.5 md:hidden">
            <TextAlignJustify/>
          </Button>

          <h2 className="text-lg sm:text-2xl font-bold">
            {!isHome && <Link href="/" className="oxanium ">Dynamic Domain Tech.</Link>}
          </h2>
        </div>

        <div className="flex justify-end items-center">
          <div className="hidden sm:flex">
            <Button asChild variant="link">
              <Link href="/">產品</Link>
            </Button>

            <Button asChild variant="link">
              <Link href="/">募資</Link>
            </Button>

            <Button asChild variant="link">
              <Link href="/">關於我們</Link>
            </Button>
          </div>
          <Button variant="ghost" size="icon-sm" onClick={comingSoon} className="p-1.5 ml-5 hidden md:flex">
            <User/>
          </Button>
          <span className="h-6 w-px bg-border mx-3 hidden md:flex" aria-hidden="true"/>
          <Button variant="ghost" size="icon" className="relative" onClick={toggleCart}>
            <NotificationDot count={1}/>
            <ShoppingCart/>
          </Button>
        </div>
      </div>
    </nav>
  );
}
