import connectMongoDB from '@/libs/dbConnect';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Admin } from '@/model/admin.model';
import { NextRequest, NextResponse } from 'next/server';
import { apiResponse, handleError } from '@/libs/response';
import { StatusCodes } from 'http-status-codes';

const createToken = (id: string, name: string) => {
      return jwt.sign({ id, name }, process.env.JWT_SECRET as string, { expiresIn: '30d' });
};

export async function POST(request: NextRequest, response: NextResponse) {
      await connectMongoDB();

      try {
            const { email, password } = await request.json();
            const admin = await Admin.findOne({ email });
            // console.log(admin, 'from login route');

            if (!admin) return apiResponse(false, StatusCodes.FORBIDDEN, 'Invalid email');

            const isPasswordValid = await bcrypt.compare(password, admin.password);
            if (!isPasswordValid) return apiResponse(false, StatusCodes.FORBIDDEN, 'Invalid password');

            const token = createToken(admin._id, admin.name);
            return apiResponse(true, StatusCodes.OK, 'Login in successful', token);
      } catch (error) {
            return handleError(error);
      }
}
