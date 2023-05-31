import Link from "next/link"

import { siteConfig } from "@/config/site"
import { getProducts } from "@/lib/get-products"
import { buttonVariants } from "@/components/ui/button"
import { Product } from "@/components/product"

export default async function IndexPage() {
  const products = await getProducts()
  console.log("hello")
  return (
    <section className="container grid items-center justify-center gap-6 pt-6 pb-8 md:grid-cols-2 lg:grid-cols-4 md:py-10">
      {products.map((product) => (
        <Product
          key={product.id}
          product={{
            name: product.name,
            id: product.id,
            description: product.description,
            price: product.price,
            url: product.url,
          }}
          className="w-[250px]"
          aspectRatio="square"
          width={250}
          height={250}
        />
      ))}
    </section>
  )
}
