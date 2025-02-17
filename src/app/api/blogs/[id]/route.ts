import connectMongoDB from '@/libs/dbConnect';
import { StatusCodes } from 'http-status-codes';
import { NextRequest } from 'next/server';
import { apiResponse, handleError } from '@/libs/response';
import { Blog } from '@/model/blog.model';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
      await connectMongoDB();

      try {
            const blog = await Blog.findById(params.id);

            if (!blog) {
                  return apiResponse(false, StatusCodes.NOT_FOUND, 'blog not found');
            }

            return apiResponse(true, StatusCodes.OK, 'blog retrieved successfully', blog);
      } catch (error) {
            return handleError(error);
      }
}
export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
      await connectMongoDB();

      try {
            const data = await request.json();
            const blog = await Blog.findByIdAndUpdate(params.id, data, { new: true });

            if (!blog) {
                  return apiResponse(false, StatusCodes.NOT_FOUND, 'blog not found');
            }

            return apiResponse(true, StatusCodes.OK, 'blog updated successfully', blog);
      } catch (error) {
            return handleError(error);
      }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
      await connectMongoDB();

      try {
            const blog = await Blog.findByIdAndDelete(params.id);

            if (!blog) {
                  return apiResponse(false, StatusCodes.NOT_FOUND, 'blog not found');
            }

            return apiResponse(true, StatusCodes.OK, 'blog deleted successfully');
      } catch (error) {
            return handleError(error);
      }
}
