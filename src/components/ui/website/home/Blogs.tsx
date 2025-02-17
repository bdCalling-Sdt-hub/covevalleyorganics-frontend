'use client';
import BlogCard from '@/components/shared/BlogCard';
import Heading from '@/components/shared/Heading';
import { useGetAllBlogQuery } from '@/redux/features/blog/blogApi';

export default function Blogs() {
      const { data: blogs } = useGetAllBlogQuery([]);

      return (
            <div className="bg-[#e9dfec] text-[#a78aaf] md:py-32 py-5">
                  <div className="md:mt-28">
                        <div className="container md:grid grid-cols-12 items-start gap-5">
                              <div className="col-span-3 my-5">
                                    <Heading className="text-center md:text-start">
                                          Farm-Fresh Nutrition <br /> in Every <br /> Bite
                                    </Heading>
                              </div>
                              <div className="col-span-9">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
                                          {blogs?.slice(0, 3).map((blog, index) => (
                                                <BlogCard key={index} blog={blog} />
                                          ))}
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}
