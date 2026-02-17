"use client"

import {Button} from "@/components/ui/button";
import {Facebook, Instagram, Mail, Youtube} from "lucide-react";

export default function Footer() {
  return (
    <footer className="p-10 md:p-20 w-full bg-sidebar flex flex-col">
      <div className="py-20 w-full flex flex-col sm:flex-row">
        {/* Card Begin */}
        <div className="flex-1 flex flex-col gap-4 pb-20 md:pb-0">
          <h2 className="text-xl oxanium font-bold">
            Dynamic Domain Tech.
          </h2>
          <p>Build next and innovation</p>
          <div className="flex gap-3">
            <Button variant="ghost" size="icon-sm" aria-label="Facebook">
              <Facebook className="size-6"/>
            </Button>
            <Button variant="ghost" size="icon-sm" aria-label="Instagram">
              <Instagram className="size-6"/>
            </Button>
            <Button variant="ghost" size="icon-sm" aria-label="YouTube">
              <Youtube className="size-6"/>
            </Button>
            <Button variant="ghost" size="icon-sm" aria-label="Email">
              <Mail className="size-6"/>
            </Button>
          </div>
        </div>

        {/* Footer Nav */}
        <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-6">
          <div className="flex flex-col gap-1">
            <p className="text-xl font-semibold mb-2">About</p>
            <p className="text hover:underline">關於我們</p>
            <p className="text hover:underline">聯絡我們</p>
            <p className="text hover:underline">軟體</p>
            <p className="text hover:underline">工具</p>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-xl font-semibold mb-2">Pages</p>
            <p className="text hover:underline">登入</p>
            <p className="text hover:underline">註冊</p>
            <p className="text hover:underline">產品</p>
            <p className="text hover:underline">結帳</p>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-xl font-semibold mb-2">Legal</p>
            <p className="text hover:underline">使用條款</p>
            <p className="text hover:underline">隱私政策</p>
            <p className="text hover:underline">團隊</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xl font-semibold mb-2">Resources</p>
            <p className="text hover:underline">產品說明書</p>
            <p className="text hover:underline">保固</p>
            <p className="text hover:underline">退換貨流程</p>
            <p className="text hover:underline">常見問題</p>
          </div>
        </div>
      </div>
      <div>
        <p>© 2026 Dynamic Domain Technology</p>
      </div>
    </footer>
  );
}
