import { getProductBySlug } from '@/wix-api/product'
import { notFound } from 'next/navigation'
import React from 'react'
import ProductDetails from './ProductDetails'

interface PageProps{
    params: {slug: string}
}




const page = async ({params:{slug}}:PageProps) => {
    const product = await getProductBySlug(slug)
    if (!product?._id) notFound()
  return (
    <div className='max-w-7xl mx-auto space-y-10 px-5 py-10'>
<ProductDetails product={product}/>
    </div>
  )
}

export default page