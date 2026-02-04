"use client"
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Moon, ShoppingCart, Sun} from "lucide-react";
import {useState} from "react";
import {useUIStore} from "@/stores/ui-store";
import NotificationDot from "@/components/feature/notification_dot";


export default function Nav() {
  const isHome = false;
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);

    if (next) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleCart = useUIStore((s) => s.toggleCart);

  return (
    <nav className="sticky top-0 z-50 h-[6dvh] w-full bg-sidebar">
      <div className="mx-auto flex h-full justify-between items-center px-6 sm:px-10">
        <h2 className="text-lg sm:text-2xl font-bold">
          { !isHome && <Link href="/" className="oxanium ">Dynamic Domain Tech.</Link> }
        </h2>
        <div className="flex justify-end items-center gap-5">
          {/* Store */}
          <Button asChild variant="link" className="hidden sm:flex">
            <Link href="/">Store</Link>
          </Button>

          {/* About */}
          <Button asChild variant="link" className="hidden sm:flex">
            <Link href="/">About</Link>
          </Button>

          {/* Theme */}
          <Button asChild variant="secondary" size="icon-sm" onClick={toggleTheme} className="p-1 ">
            { isDark ? <Moon/> : <Sun/>}
          </Button>
          <span className="h-6 w-px bg-border " aria-hidden="true"/>
          <Button variant="ghost" size="icon" className="relative ml-2" onClick={toggleCart}>
            <NotificationDot count={1}/>
            <ShoppingCart/>
          </Button>
        </div>
      </div>
    </nav>
  );
}
