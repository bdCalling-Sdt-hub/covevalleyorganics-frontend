import bcrypt from 'bcrypt';
import { Admin } from '@/model/admin.model';

const adminData = {
      name: 'GiGi',
      email: process.env.ADMIN_EMAIL as string,
      password: bcrypt.hashSync(process.env.ADMIN_PASSWORD as string, 10),
};

// Seed Admin Function
export const seedAdmin = async () => {
      try {
            const existingAdmin = await Admin.findOne({ email: adminData.email });

            if (!existingAdmin) {
                  await Admin.create(adminData);
                  console.log('Admin user seeded successfully.');
            } else {
                  console.log('Admin user already exists, skipping seed.');
            }
      } catch (error) {
            console.error('Error seeding admin user:', error);
      }
};
