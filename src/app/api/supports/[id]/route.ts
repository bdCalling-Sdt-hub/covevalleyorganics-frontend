import connectMongoDB from '@/libs/dbConnect';

import { StatusCodes } from 'http-status-codes';
import { NextRequest } from 'next/server';
import { apiResponse, handleError } from '@/libs/response';
import { Support } from '@/model/support.model';

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
      try {
            await connectMongoDB();

            const data = await request.json();
            const product = await Support.findByIdAndUpdate(params.id, data, { new: true });
            if (!product) {
                  return apiResponse(false, StatusCodes.NOT_FOUND, 'support not found');
            }

            return apiResponse(true, StatusCodes.OK, 'support updated successfully', product);
      } catch (error) {
            return handleError(error);
      }
}
