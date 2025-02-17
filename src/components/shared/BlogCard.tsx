import { MoveRight } from 'lucide-react';
import Link from 'next/link';

const BlogCard = ({ blog }: { blog: any }) => {
      return (
            <div className="relative rounded-3xl text-white group overflow-hidden">
                  <img alt="image" className="rounded-3xl  w-full object-cover h-[440px] mx-auto " src={blog?.image} />
                  <div className=" absolute rounded-3xl -bottom-[700px] md:-bottom-[500px] group-hover:bottom-0 duration-500 bg-[#f37e2b54] left-0 flex justify-center items-center w-full h-full">
                        <Link
                              href={`/blogs/${blog?._id}`}
                              className="text-center flex flex-col justify-center items-center"
                        >
                              {/* <p className="uppercase">{blog.shortTitle}</p> */}
                              <h2 className="text-2xl">{blog?.title}</h2>
                              <p className="mt-2">
                                    <MoveRight color="#fff" />
                              </p>
                        </Link>
                  </div>
            </div>
      );
};

export default BlogCard;
