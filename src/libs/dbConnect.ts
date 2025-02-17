import mongoose from 'mongoose';
import { seedAdmin } from './seedAdmin';

const connectMongoDB = async () => {
      try {
            if (mongoose.connection.readyState === 0) {
                  await mongoose.connect(process.env.MONGODB_URL as string);
                  console.log('Connected to MongoDB');

                  // Seed the admin user
                  await seedAdmin();
            } else {
                  console.log('MongoDB connection already established');
            }
      } catch (error) {
            console.error('Error connecting to MongoDB:', error);
            throw new Error('Failed to connect to MongoDB');
      }
};

export default connectMongoDB;
