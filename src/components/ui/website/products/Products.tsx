'use client';
import Heading from '@/components/shared/Heading';
import ProductCard from '@/components/shared/ProductCard';
import { useGetAllProductsQuery } from '@/redux/features/product/productApi';

export default function Products() {
      const { data: products } = useGetAllProductsQuery([]);
      return (
            <div className="container my-20 md:my-10 min-h-screen">
                  <Heading className="items-center text-[#eb9b9b] oswald text-center">
                        Our New Arrival <br /> Products
                  </Heading>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-10 ">
                        {products?.map((product, index) => (
                              <ProductCard key={index} product={product} />
                        ))}
                  </div>
            </div>
      );
}
