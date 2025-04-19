"use client";

import { useRouter } from "next/navigation";
import * as Tabs from "@radix-ui/react-tabs";
import { useState } from "react";
import { products } from "@/data/products";

export default function ProductsPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<string>(products[0]?.id || "");

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    const selectedProduct = products.find((p) => p.id === value);
    if (selectedProduct) {
      router.push(`/products/${selectedProduct.slug}`);
    }
  };

  return (
    <Tabs.Root
      value={activeTab}
      onValueChange={handleTabChange}
      className="w-full px-4"
    >
      <Tabs.List
        className="flex flex-wrap gap-2 bg-gray-100 p-4 rounded-md shadow mb-8"
        aria-label="Product Tabs"
      >
        {products.map((product) => (
          <Tabs.Trigger
            key={product.id}
            value={product.id}
            className={`px-4 py-2 text-sm md:text-base rounded-lg transition-colors duration-300 focus:outline-none
              ${
                activeTab === product.id
                  ? "bg-[#0E9696] text-white"
                  : "bg-white text-black hover:bg-[#0E9696] hover:text-white"
              }`}
          >
            {product.name}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
    </Tabs.Root>
  );
}
