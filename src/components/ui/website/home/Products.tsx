'use client';
import ProductCard from '@/components/shared/ProductCard';
import { useGetAllProductsQuery } from '@/redux/features/product/productApi';

export default function Products() {
      const { data: products } = useGetAllProductsQuery([]);

      return (
            <div className="bg-[#ffe4d8] py-10">
                  <div className="container mt-10 ">
                        <h1 className="text-[#eb9b9b] oswald text-3xl md:text-6xl text-center">Our Products</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-10 gap-4">
                              {products?.slice(0, 3).map((product, index) => (
                                    <ProductCard key={index} product={product} />
                              ))}
                        </div>
                  </div>
            </div>
      );
}
