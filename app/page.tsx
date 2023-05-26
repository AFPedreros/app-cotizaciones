import Link from "next/link"

import { siteConfig } from "@/config/site"
import { getProducts } from "@/lib/get-products"
import { buttonVariants } from "@/components/ui/button"
import { Product } from "@/components/product"

export default async function IndexPage() {
  const products = await getProducts()

  console.log(products)

  return (
    <section className="container grid items-center justify-center gap-6 pt-6 pb-8 md:grid-cols-2 lg:grid-cols-4 md:py-10">
      {products.map((product) => (
        <Product
          key={product.id}
          product={{
            name: product.fields.Nombre,
            id: product.fields.Id,
            description: product.fields.Descripción,
            price: product.fields.Precio,
          }}
          className="w-[250px]"
          aspectRatio="square"
          width={250}
          height={330}
        />
      ))}
    </section>
  )
}
