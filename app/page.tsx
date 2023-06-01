import { useEffect, useState } from "react"
import useSWR from "swr"

import { siteConfig } from "@/config/site"
import { getProducts } from "@/lib/get-products"
import { Product as ProductType } from "@/lib/types"
import { Product } from "@/components/product"

async function getData() {
  const url = "http://localhost:3000/api/products"

  const res = await fetch(url)

  return res.json()
}

export default async function IndexPage() {
  //  const { data: products, error } = useSWR("/api/products", GET)
  // if (error) return <div>Error loading products.</div>
  // if (!products) return <div>Loading...</div>
  const products: ProductType[] = await getData()

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
