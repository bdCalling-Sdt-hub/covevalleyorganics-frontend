import connectMongoDB from '@/libs/dbConnect';

import { StatusCodes } from 'http-status-codes';
import { NextRequest } from 'next/server';
import { apiResponse, handleError } from '@/libs/response';
import { Faq } from '@/model/faq.model';

export async function POST(request: NextRequest) {
      try {
            const data = await request.json();
            await connectMongoDB();
            const res = await Faq.create(data);

            return apiResponse(true, StatusCodes.CREATED, 'FAQ created successfully', res);
      } catch (error) {
            return handleError(error);
      }
}

export async function GET(request: NextRequest) {
      try {
            await connectMongoDB();
            const res = await Faq.find().sort('-createdAt');

            return apiResponse(true, StatusCodes.OK, 'FAQs retrieved successfully', res);
      } catch (error) {
            return handleError(error);
      }
}
