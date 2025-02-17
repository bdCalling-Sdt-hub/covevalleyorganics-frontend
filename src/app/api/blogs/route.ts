import connectMongoDB from '@/libs/dbConnect';
import { apiResponse, handleError } from '@/libs/response';
import { Blog } from '@/model/blog.model';
import { StatusCodes } from 'http-status-codes';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
      try {
            const data = await request.json();

            await connectMongoDB();
            const res = await Blog.create(data);

            return apiResponse(true, StatusCodes.CREATED, 'Blog created successfully', res);
      } catch (error) {
            return handleError(error);
      }
}
export async function GET(request: NextRequest) {
      try {
            await connectMongoDB();
            const res = await Blog.find();

            return apiResponse(true, StatusCodes.OK, 'Blogs retrieved successfully', res);
      } catch (error) {
            return handleError(error);
      }
}
