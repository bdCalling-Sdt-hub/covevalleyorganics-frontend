'use client';
import DashboardTitle from '@/components/shared/DashboardTitle';
import {
      useCreateSupportMutation,
      useGetSupportQuery,
      useUpdateSupportMutation,
} from '@/redux/features/support/supportApi';
import { Form, Input } from 'antd';
import Swal from 'sweetalert2';

const ContactEdit = () => {
      const { data: support, isLoading } = useGetSupportQuery([]);
      const [createSupport] = useCreateSupportMutation();
      const [updateSupport] = useUpdateSupportMutation();

      if (isLoading) {
            return <div>Loading...</div>;
      }

      const handleFinish = async (values: FormData) => {
            try {
                  if (support) {
                        const supportUpdatedData = {
                              id: support._id,
                              data: {
                                    ...values,
                              },
                        };

                        const res = await updateSupport(supportUpdatedData).unwrap();
                        if (res.success) {
                              Swal.fire('Updated', 'Support is updated successfully', 'success');
                        }
                  } else {
                        const res = await createSupport(values).unwrap();
                        if (res.success) {
                              Swal.fire('Created', 'Support is created successfully', 'success');
                        }
                  }
            } catch (error) {
                  Swal.fire('Error', 'Something went wrong', 'error');
            }
      };

      return (
            <div>
                  <DashboardTitle className="">Contact</DashboardTitle>
                  <div className="w-1/2 mx-auto mt-10">
                        <Form
                              initialValues={{
                                    ...support,
                              }}
                              onFinish={handleFinish}
                              layout="vertical"
                        >
                              <Form.Item
                                    name={'location'}
                                    label={<p className="text-gray-700 text-lg">Location</p>}
                                    rules={[{ required: true, message: 'Please input location!' }]}
                                    className="text-end mt-6"
                              >
                                    <Input style={{ height: 48 }} />
                              </Form.Item>
                              <Form.Item
                                    name={'contact'}
                                    label={<p className="text-gray-700 text-lg">Contact No.</p>}
                                    rules={[{ required: true, message: 'Please input contact!' }]}
                                    className="text-end mt-6"
                              >
                                    <Input style={{ height: 48 }} type="number" />
                              </Form.Item>
                              <Form.Item
                                    name={'email'}
                                    label={<p className="text-gray-700 text-lg">Email</p>}
                                    rules={[{ required: true, message: 'Please input email!' }]}
                                    className="text-end mt-6"
                              >
                                    <Input style={{ height: 48 }} type="email" />
                              </Form.Item>
                              <Form.Item className="text-end mt-6">
                                    <button
                                          type="submit"
                                          className="bg-primary w-[130px] text-[#FEFEFE] rounded-md h-[43px]"
                                          style={{ height: 48 }}
                                    >
                                          Save Changes
                                    </button>
                              </Form.Item>
                        </Form>
                  </div>
            </div>
      );
};

export default ContactEdit;
