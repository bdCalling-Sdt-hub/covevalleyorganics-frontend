'use client';
import BlogCard from '@/components/shared/BlogCard';
import Heading from '@/components/shared/Heading';
import { useGetAllBlogQuery } from '@/redux/features/blog/blogApi';

export default function Blogs() {
      const { data: blogs } = useGetAllBlogQuery([]);
      return (
            <div className=" my-2 min-h-screen grid items-center">
                  <div className="container grid grid-cols-12 gap-5">
                        <div className="col-span-12 md:col-span-3">
                              <Heading className="text-center md:text-start">Healthy food from farm to spoon</Heading>
                        </div>
                        <div className="col-span-12 md:col-span-9">
                              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
                                    {blogs?.map((blog, index) => (
                                          <BlogCard key={index} blog={blog} />
                                    ))}
                              </div>
                        </div>
                  </div>
            </div>
      );
}
