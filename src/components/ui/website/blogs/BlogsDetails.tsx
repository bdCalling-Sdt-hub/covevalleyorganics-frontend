'use client';
import { useGetSingleBlogQuery } from '@/redux/features/blog/blogApi';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

// Load the relativeTime plugin
dayjs.extend(relativeTime);
const BlogDetails = ({ id }: { id: string }) => {
      const { data: blog } = useGetSingleBlogQuery(id);

      return (
            <div className="container  min-h-screen flex flex-col items-center py-10">
                  <div className="relative w-full max-w-[70vw] h-[500px] bg-yellow-100 flex items-center justify-center rounded-lg overflow-hidden mt-8">
                        <img src={blog?.image as string} alt="Header Image" className="object-cover w-full" />
                  </div>

                  <div className="l mx-auto bg-white rounded-lg shadow-lg mt-6 p-8">
                        <div className="flex items-center space-x-3 text-gray-500 mb-4">
                              <div>
                                    <p className="text-lg">
                                          {blog?.createdAt
                                                ? `${dayjs(blog.createdAt).format('MMMM DD, YYYY')} (${dayjs(
                                                        blog.createdAt
                                                  ).fromNow()})`
                                                : ''}
                                    </p>
                              </div>
                        </div>

                        <h1 className="text-3xl  text-[#657C1E] mb-2">{blog?.title}</h1>

                        <p className="text-sm text-gray-500 mb-4">• 2 Min Read</p>

                        <div className="w-full" dangerouslySetInnerHTML={{ __html: blog?.content as TrustedHTML }} />
                  </div>
            </div>
      );
};

export default BlogDetails;
