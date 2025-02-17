import { IFaq } from '@/interface/faq.interface';
import mongoose, { Schema, Model } from 'mongoose';

const faqSchema = new Schema<IFaq>(
      {
            question: {
                  type: String,
                  required: [true, "The 'question' field is required."],
            },
            answer: {
                  type: String,
                  required: [true, "The 'answer' field is required."],
            },
      },
      {
            timestamps: true,
      }
);

export const Faq: Model<IFaq> = mongoose.models.Faq || mongoose.model<IFaq>('Faq', faqSchema);
