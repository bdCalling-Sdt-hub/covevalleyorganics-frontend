import { IAdmin } from '@/interface/admin.interface';
import mongoose, { Model, Schema } from 'mongoose';

const AdminSchema = new Schema<IAdmin>({
      name: { type: String, required: true },
      email: { type: String, unique: true, required: true },
      password: { type: String, required: true },
      role: { type: String, default: 'admin' },
});

export const Admin: Model<IAdmin> = mongoose.models.Admin || mongoose.model<IAdmin>('Admin', AdminSchema);
