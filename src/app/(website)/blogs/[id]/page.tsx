import BlogDetails from '@/components/ui/website/blogs/BlogsDetails';
import React from 'react';

const BlogsDetailsPage = ({ params }: { params: { id: string } }) => {
      return (
            <div>
                  <BlogDetails id={params.id} />
            </div>
      );
};

export default BlogsDetailsPage;
