import connectMongoDB from '@/libs/dbConnect';
import { Product } from '@/model/product.model';
import { StatusCodes } from 'http-status-codes';
import { NextRequest } from 'next/server';
import { apiResponse, handleError } from '@/libs/response';

export async function POST(request: NextRequest) {
      try {
            const data = await request.json();
            await connectMongoDB();
            const res = await Product.create(data);

            return apiResponse(true, StatusCodes.CREATED, 'Product created successfully', res);
      } catch (error) {
            return handleError(error);
      }
}

export async function GET(request: NextRequest) {
      try {
            await connectMongoDB();
            const res = await Product.find();

            return apiResponse(true, StatusCodes.OK, 'Products retrieved successfully', res);
      } catch (error) {
            return handleError(error);
      }
}
