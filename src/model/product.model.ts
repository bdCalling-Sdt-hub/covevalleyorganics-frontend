import { IProduct } from '@/interface/product.interface';
import mongoose, { Model, Schema } from 'mongoose';

const productSchema = new Schema<IProduct>(
      {
            name: { type: String, required: true },

            description: { type: String },
            image: { type: String },
            ingredientImage: { type: String },
      },
      {
            timestamps: true,
      }
);

export const Product: Model<IProduct> = mongoose.models.Product || mongoose.model<IProduct>('Product', productSchema);
