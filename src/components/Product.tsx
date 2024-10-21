import { products } from '@wix/stores';
import Link from 'next/link';
import React from 'react'

interface ProductProps{
    product:products.Product;
}

const Product = ({product}:ProductProps) => {
  return (
    <Link href={`/products/${product.slug}`}>
        {product.name}
    </Link>
  )
}

export default Product