import Link from "next/link"

import { siteConfig } from "@/config/site"
import { getProducts } from "@/lib/get-products"
import { buttonVariants } from "@/components/ui/button"
import { Product } from "@/components/product"

export default async function IndexPage() {
  // const products = await getProducts()

  // console.log(products)

  return (
    <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
      <Product
        product={{
          name: "Hosting",
          id: 1,
          description: "Descripcion del producto 1",
          price: 1000,
        }}
        className="w-[250px]"
        aspectRatio="portrait"
        width={250}
        height={330}
      />
    </section>
  )
}
