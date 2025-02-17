import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Form, Input, Upload, Button, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Swal from 'sweetalert2';
import JoditEditor from 'jodit-react';
import { useUpdateBlogMutation } from '@/redux/features/blog/blogApi';
import getImageURL from '@/utils/uploadImage';

interface UpdateBlogModalProps {
      open: boolean;
      setOpen: (open: boolean) => void;
      modalData: BlogFormValues | undefined;
      setModalData: Dispatch<SetStateAction<BlogFormValues | undefined>>;
}

interface BlogFormValues {
      _id: string;
      title: string;
      content: string;
      author: string;
      image?: string;
}

const UpdateBlogModal: React.FC<UpdateBlogModalProps> = ({ setOpen, open, modalData, setModalData }) => {
      const [form] = Form.useForm<BlogFormValues>();
      const [loading, setLoading] = useState(false);
      const [imageFile, setImageFile] = useState<File | null>(null);
      const [content, setContent] = useState<string>('');
      const [updateBlog] = useUpdateBlogMutation();

      const handleImageUpload = (file: File) => {
            setImageFile(file);
            return false;
      };

      useEffect(() => {
            if (modalData) {
                  form.setFieldsValue({
                        title: modalData.title,
                        author: modalData.author,
                        content: modalData.content,
                  });
                  setContent(modalData.content);
                  setImageFile(null);
            }
      }, [modalData, form]);

      const uploadImages = async (values: any) => {
            const image = await getImageURL(values?.image?.file);
            return { image };
      };

      const onFinish = async (values: any) => {
            setLoading(true);
            const { image } = await uploadImages(values);
            const blogData = {
                  id: modalData?._id,
                  data: {
                        title: values?.title,
                        content,
                        author: values?.author,
                        image: image || modalData?.image,
                  },
            };

            const res = await updateBlog(blogData).unwrap();
            if (res.success) {
                  Swal.fire('Updated', 'Blog is updated successfully', 'success');
                  setLoading(false);
                  setOpen(false);
                  form.resetFields();
                  setImageFile(null);
                  setContent('');
            }
      };

      const closeModal = () => {
            setOpen(false);
            form.resetFields();
            setImageFile(null);
            setContent('');
            setModalData(undefined);
      };

      return (
            <Modal width={800} title={'Update Blog Post'} open={open} onCancel={closeModal} footer={null} centered>
                  <Form form={form} layout="vertical" onFinish={onFinish}>
                        <Form.Item name="title" label={<label className="font-medium text-gray-700">Blog Title</label>}>
                              <Input
                                    style={{ height: 42 }}
                                    placeholder="Exploring the Wonders of the Universe"
                                    className="border-gray-300 rounded-lg w-full"
                              />
                        </Form.Item>

                        <Form.Item name="content" label={<label className="font-medium text-gray-700">Content</label>}>
                              <JoditEditor value={content} onChange={(newContent) => setContent(newContent)} />
                        </Form.Item>

                        <Form.Item name="author" label={<label className="font-medium text-gray-700">Author</label>}>
                              <Input
                                    style={{ height: 42 }}
                                    placeholder="John Doe"
                                    className="border-gray-300 rounded-lg w-full"
                              />
                        </Form.Item>

                        <Form.Item
                              name="image"
                              label={<label className="font-medium text-gray-700">Blog Image (max-10mb)</label>}
                        >
                              <Upload
                                    listType="picture-card"
                                    beforeUpload={handleImageUpload}
                                    showUploadList={false}
                                    className="w-full"
                              >
                                    {imageFile ? (
                                          <img
                                                src={URL.createObjectURL(imageFile)}
                                                alt="Blog"
                                                className="w-full h-full object-cover rounded-lg"
                                          />
                                    ) : modalData?.image ? (
                                          <img
                                                src={modalData.image}
                                                alt="Blog"
                                                className="w-full h-full object-cover rounded-lg"
                                          />
                                    ) : (
                                          <div className="flex flex-col items-center justify-center text-gray-500 text-sm">
                                                <PlusOutlined className="text-2xl mb-2" />
                                                <span>Upload</span>
                                          </div>
                                    )}
                              </Upload>
                        </Form.Item>

                        <Form.Item>
                              <Button type="primary" htmlType="submit" style={{ height: 42, width: '100%' }}>
                                    {loading ? 'Uploading...' : 'Update Blog'}
                              </Button>
                        </Form.Item>
                  </Form>
            </Modal>
      );
};

export default UpdateBlogModal;
