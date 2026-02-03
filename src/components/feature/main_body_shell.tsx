"use client"
import {useUIStore} from "@/stores/ui-store";
import {ReactNode} from "react";
import {ArrowLeft} from "lucide-react";
import {useRouter} from "next/navigation";

type MainBodyShellProps = {
  title: string;
  backButton: boolean;
  children?: ReactNode;
};

export default function MainBodyShell({title, backButton, children}: MainBodyShellProps) {
  const router = useRouter();
  const showWithMobile = useUIStore(s => !s.isCartOpen);

  return (
    <div
      className={`sm:w-full h-full bg-background rounded-xl border flex flex-col min-h-0 overflow-hidden transition-[width,opacity,transform] duration-300 ${
        showWithMobile
          ? "w-full opacity-100 translate-x-0"
          : "w-0 opacity-0 -translate-x-2 pointer-events-none"
      } sm:max-w-none sm:opacity-100 sm:translate-x-0 sm:pointer-events-auto sm:flex-1`}
    >
      {/* Toolbar */}
      <div className="flex min-h-13 p-2 items-center gap-4">
        {backButton && <ArrowLeft onClick={router.back}/>}
        <p className="font-bold pl-2">{title}</p>
      </div>
      <hr/>
      {children}
    </div>
  );
}
