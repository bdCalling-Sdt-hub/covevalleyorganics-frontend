import { useEffect, useState } from 'react';
import { Form, Input, Upload, Button, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import getImageURL from '@/utils/uploadImage';
import { useUpdateProductMutation } from '@/redux/features/product/productApi';
import Swal from 'sweetalert2';

interface UpdateProductFormProps {
      open: boolean;
      setOpen: (open: boolean) => void;
      modalData: FormValues;
      setModalData: any;
}

interface FormValues {
      _id: any;
      name: string;
      description: string;
      image?: File | string;
      ingredientImage?: File | string;
}

const UpdateProductForm: React.FC<UpdateProductFormProps> = ({ open, setOpen, modalData }) => {
      const [form] = Form.useForm<FormValues>();
      const [updateProduct] = useUpdateProductMutation();
      const [loading, setLoading] = useState(false);
      const [imageFile, setImageFile] = useState<File | null>(null);
      const [ingredientImageFile, setIngredientImageFile] = useState<File | null>(null);

      useEffect(() => {
            if (open) {
                  form.setFieldsValue({
                        name: modalData.name,
                        description: modalData.description,
                        image: undefined,
                        ingredientImage: undefined,
                  });
                  setImageFile(null);
                  setIngredientImageFile(null);
            }
      }, [open, modalData, form]);

      const handleImageUpload = (file: File, type: 'product' | 'ingredient') => {
            if (type === 'product') {
                  setImageFile(file);
            } else if (type === 'ingredient') {
                  setIngredientImageFile(file);
            }
            return false;
      };

      const uploadImages = async (values: any) => {
            const image = await getImageURL(values?.image?.file);
            const ingredientImage = await getImageURL(values?.ingredientImage?.file);
            return { image, ingredientImage };
      };

      const handleUpdateProduct = async (values: any) => {
            setLoading(true);
            const { image, ingredientImage } = await uploadImages(values);

            const updatedProduct = {
                  id: modalData._id,
                  data: {
                        name: values.name,
                        description: values.description,
                        image: image || modalData.image,
                        ingredientImage: ingredientImage || modalData.ingredientImage,
                  },
            };

            const res = await updateProduct(updatedProduct).unwrap();

            if (res.success) {
                  Swal.fire('Updated!', 'This product updated successfully', 'success');
                  setOpen(false);
                  setLoading(false);
            }
      };

      const onFinish = (values: any) => {
            handleUpdateProduct(values);
      };

      const closeModal = () => {
            setOpen(false);
      };

      return (
            <Modal title="Update Product" open={open} onCancel={closeModal} footer={null} centered>
                  <Form form={form} layout="vertical" onFinish={onFinish}>
                        <Form.Item
                              name="name"
                              label={<label className="font-medium text-gray-700">Product Name</label>}
                        >
                              <Input
                                    style={{ height: 42 }}
                                    placeholder="Organic Baby Food"
                                    className="border-gray-300 rounded-lg w-full"
                              />
                        </Form.Item>

                        <Form.Item
                              name="description"
                              label={<label className="font-medium text-gray-700">Description</label>}
                        >
                              <Input.TextArea
                                    placeholder="A gentle, organic baby food."
                                    className="border-gray-300 rounded-lg w-full"
                              />
                        </Form.Item>

                        <div className="flex items-center gap-10 justify-center">
                              <Form.Item
                                    name="image"
                                    label={<label className="font-medium text-gray-700">Product Image</label>}
                              >
                                    <Upload
                                          listType="picture-card"
                                          beforeUpload={(file) => handleImageUpload(file, 'product')}
                                          showUploadList={false}
                                          className="w-full"
                                    >
                                          {imageFile ? (
                                                <img
                                                      src={URL.createObjectURL(imageFile)}
                                                      alt="Product"
                                                      className="w-full h-full object-cover rounded-lg"
                                                />
                                          ) : modalData.image ? (
                                                <img
                                                      src={modalData.image as string}
                                                      alt="Product"
                                                      className="w-full h-full object-cover rounded-lg"
                                                />
                                          ) : (
                                                <div className="flex flex-col items-center justify-center text-gray-500 text-sm">
                                                      <PlusOutlined className="text-2xl mb-2" />
                                                      <span>Upload New Image</span>
                                                </div>
                                          )}
                                    </Upload>
                              </Form.Item>

                              <Form.Item
                                    name="ingredientImage"
                                    label={<label className="font-medium text-gray-700">Ingredient Image</label>}
                              >
                                    <Upload
                                          listType="picture-card"
                                          beforeUpload={(file) => handleImageUpload(file, 'ingredient')}
                                          showUploadList={false}
                                          className="w-full"
                                    >
                                          {ingredientImageFile ? (
                                                <img
                                                      src={URL.createObjectURL(ingredientImageFile)}
                                                      alt="Ingredient"
                                                      className="w-full h-full object-cover rounded-lg"
                                                />
                                          ) : modalData.ingredientImage ? (
                                                <img
                                                      src={modalData.ingredientImage as string}
                                                      alt="Ingredient"
                                                      className="w-full h-full object-cover rounded-lg"
                                                />
                                          ) : (
                                                <div className="flex flex-col items-center justify-center text-gray-500 text-sm">
                                                      <PlusOutlined className="text-2xl mb-2" />
                                                      <span>Upload New Ingredient</span>
                                                </div>
                                          )}
                                    </Upload>
                              </Form.Item>
                        </div>

                        <Form.Item>
                              <Button style={{ height: 42, width: '100%' }} type="primary" htmlType="submit">
                                    {loading ? 'Updating' : 'Update Product'}
                              </Button>
                        </Form.Item>
                  </Form>
            </Modal>
      );
};

export default UpdateProductForm;
