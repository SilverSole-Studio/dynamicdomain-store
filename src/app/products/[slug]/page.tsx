"use client"
import {Button} from "@/components/ui/button";
import {Tag} from "lucide-react";
import {useParams, useRouter} from "next/navigation";
import {Input} from "@/components/ui/input";
import {useState} from "react";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import CartBody from "@/components/feature/cart_body";
import MainBodyShell from "@/components/feature/main_body_shell";

export default function ProductPage() {
  const params = useParams<{ slug: string }>();
  const router = useRouter();
  const [count, setCount] = useState(1);

  const add = () => {
    setCount(Math.min(count + 1, 1000));
  };

  const remove = () => {
    setCount(Math.max(count - 1, 1));
  };

  const addToCart = () => {
    //TODO: add to cart
    router.back();
  }

  return (
    <div className="h-[93dvh] w-full bg-sidebar px-5 flex gap-1">

      <MainBodyShell title={params.slug} backButton={true}>
        {/* Items */}
        <div className="flex-1 min-h-0 overflow-y-auto overflow-x-auto p-4 space-y-4">
          <div className="flex flex-col sm:flex-row h-full sm:gap-20">

            {/* Product Image */}
            <div
              className="flex-1 group overflow-hidden relative w-full min-h-75 sm:h-full bg-sidebar cursor-pointer rounded-xl select-none pointer-events-none"
              tabIndex={0}>
              <img src="/images/silversole/silversole_full.png" className="w-full h-full object-contain object-center"
                   alt=""/>
            </div>

            {/* Product Detail */}
            <div className="flex-1 flex flex-col gap-4 pt-4 justify-start item-center">
              <h1 className="text-4xl font-bold">{params?.slug} 智慧隱形照護鞋墊</h1>

              {/* Price Group */}
              <div className="flex gap-4">
                <p className="text-2xl text-red-500 dark:text-red-400 font-bold">$1920</p>
                <p className="text-2xl line-through">$4920</p>
                <div className="flex gap-2 items-center px-2 rounded-3xl bg-green-700">
                  <Tag className='text-white stroke-3 w-4'/>
                  <p className="text-white textxl font-bold">-60%</p>
                </div>
              </div>

              {/* Button Group */}
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <div className="flex gap-1">
                  <Button variant="secondary" onClick={remove}>-</Button>
                  <Input
                    className="w-20"
                    type="number"
                    inputMode="numeric"
                    step={1}
                    value={count}
                    min={1}
                    max={1000}
                    onChange={(e) => {
                      const next = e.target.value;
                      if (!/^\d*$/.test(next)) return;
                      setCount(next === "" ? 1 : parseInt(next, 10));
                    }}
                  />
                  <Button variant="secondary" onClick={add}>+</Button>
                </div>
                <Button className="flex-1" onClick={addToCart}>Add to Cart</Button>
              </div>

              {/* Product Introduction*/}
              <Accordion
                type="single"
                collapsible
                defaultValue="shipping"
                className="mt-20 w-full"
              >
                <AccordionItem value="shipping">
                  <AccordionTrigger>What are your shipping options?</AccordionTrigger>
                  <AccordionContent>
                    We offer standard (5-7 days), express (2-3 days), and overnight
                    shipping. Free shipping on international orders.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="returns">
                  <AccordionTrigger>What is your return policy?</AccordionTrigger>
                  <AccordionContent>
                    Returns accepted within 30 days. Items must be unused and in original
                    packaging. Refunds processed within 5-7 business days.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="support">
                  <AccordionTrigger>How can I contact customer support?</AccordionTrigger>
                  <AccordionContent>
                    Reach us via email, live chat, or phone. We respond within 24 hours
                    during business days.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </MainBodyShell>

      <CartBody/>
    </div>

  );
}
