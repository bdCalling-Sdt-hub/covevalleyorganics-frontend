import { ISupport } from '@/interface/support.interface';
import mongoose, { Schema, Model } from 'mongoose';

const supportSchema = new Schema<ISupport>(
      {
            location: {
                  type: String,
                  required: [true, "The 'location' field is required."],
            },
            contact: {
                  type: String,
                  required: [true, "The 'contact' field is required."],
            },
            email: {
                  type: String,
                  required: [true, "The 'email' field is required."],
            },
      },
      {
            timestamps: true,
      }
);

export const Support: Model<ISupport> = mongoose.models.Support || mongoose.model<ISupport>('Support', supportSchema);
