import { IBlog } from '@/interface/blog.interface';
import mongoose, { Model, Schema } from 'mongoose';

const blogSchema = new Schema(
      {
            title: { type: String, required: true },
            content: { type: String, required: true },
            author: { type: String, required: true },
            image: { type: String },
      },
      {
            timestamps: true,
      }
);

export const Blog: Model<IBlog> = mongoose.models.Blog || mongoose.model('Blog', blogSchema);
