import connectMongoDB from '@/libs/dbConnect';

import { StatusCodes } from 'http-status-codes';
import { NextRequest } from 'next/server';
import { apiResponse, handleError } from '@/libs/response';
import { Support } from '@/model/support.model';

export async function POST(request: NextRequest) {
      try {
            const data = await request.json();
            console.log(data);
            await connectMongoDB();
            const res = await Support.create(data);

            return apiResponse(true, StatusCodes.CREATED, 'Support created successfully', res);
      } catch (error) {
            return handleError(error);
      }
}

export async function GET(request: NextRequest) {
      try {
            await connectMongoDB();
            const res = await Support.find();

            return apiResponse(true, StatusCodes.OK, 'Support retrieved successfully', res);
      } catch (error) {
            return handleError(error);
      }
}
