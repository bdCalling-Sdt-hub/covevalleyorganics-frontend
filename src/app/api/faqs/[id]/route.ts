import connectMongoDB from '@/libs/dbConnect';
import { StatusCodes } from 'http-status-codes';
import { NextRequest } from 'next/server';
import { apiResponse, handleError } from '@/libs/response';
import { Faq } from '@/model/faq.model';

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
      await connectMongoDB();

      try {
            const data = await request.json();
            const faq = await Faq.findByIdAndUpdate(params.id, data, { new: true });

            if (!faq) {
                  return apiResponse(false, StatusCodes.NOT_FOUND, 'FAQ not found');
            }

            return apiResponse(true, StatusCodes.OK, 'FAQ updated successfully', faq);
      } catch (error) {
            return handleError(error);
      }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
      await connectMongoDB();

      try {
            const faq = await Faq.findByIdAndDelete(params.id);

            if (!faq) {
                  return apiResponse(false, StatusCodes.NOT_FOUND, 'FAQ not found');
            }

            return apiResponse(true, StatusCodes.OK, 'FAQ deleted successfully');
      } catch (error) {
            return handleError(error);
      }
}
