'use client';
import { useCreateFaqMutation, useUpdateFaqMutation } from '@/redux/features/faq/faqApi';
import { Button, Form, Input, Modal } from 'antd';
import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

interface propsType {
      openAddModel: boolean;
      setOpenAddModel: any;
      modalData: any;
      setModalData: any;
}

const AddFAQModal = ({ openAddModel, setOpenAddModel, modalData, setModalData }: propsType) => {
      const [createFaq] = useCreateFaqMutation();
      const [updateFaq] = useUpdateFaqMutation();
      const [form] = Form.useForm();

      useEffect(() => {
            if (modalData) {
                  form.setFieldsValue({
                        question: modalData?.question,
                        answer: modalData?.answer,
                  });
            }
      }, [modalData, form]);

      const onFinish = async (values: any) => {
            const data = {
                  question: values?.question,
                  answer: values?.answer,
            };

            try {
                  let res;
                  if (modalData) {
                        const updatedFaqData = {
                              id: modalData._id,
                              data: data,
                        };
                        res = await updateFaq(updatedFaqData).unwrap();
                        if (res.success) {
                              Swal.fire('Updated!', 'FAQ successfully updated', 'success');
                        }
                  } else {
                        // If no modalData, create a new FAQ
                        res = await createFaq(data).unwrap();
                        if (res.success) {
                              Swal.fire('Created!', 'FAQ successfully created', 'success');
                        }
                  }

                  // Close modal and reset form
                  setOpenAddModel(false);
                  setModalData(null);
                  form.resetFields();
            } catch (error) {
                  Swal.fire('Error!', 'Something went wrong', 'error');
            }
      };

      return (
            <Modal
                  centered
                  open={openAddModel}
                  onCancel={() => {
                        setOpenAddModel(false);
                        setModalData(null);
                        form.resetFields();
                  }}
                  width={500}
                  footer={false}
            >
                  <div className="p-6 py-0">
                        <h1 className=" text-[20px] font-medium" style={{ marginBottom: '12px' }}>
                              {modalData ? 'Update FAQ' : 'Add FAQ'}
                        </h1>
                        <Form onFinish={onFinish} form={form} layout="vertical">
                              <Form.Item
                                    name="question"
                                    style={{ marginBottom: '16px' }}
                                    label={<p style={{ display: 'block' }}>Question</p>}
                                    rules={[{ required: true, message: 'Please enter a question' }]}
                              >
                                    <Input
                                          type="text"
                                          placeholder="Enter Question"
                                          style={{
                                                border: '1px solid #E0E4EC',
                                                padding: '10px',
                                                height: '52px',
                                                background: 'white',
                                                borderRadius: '8px',
                                                outline: 'none',
                                                width: '100%',
                                          }}
                                    />
                              </Form.Item>
                              <Form.Item
                                    name="answer"
                                    style={{ marginBottom: '16px' }}
                                    label={<p style={{ display: 'block' }}>Answer</p>}
                                    rules={[{ required: true, message: 'Please enter an answer' }]}
                              >
                                    <Input.TextArea
                                          placeholder="Enter answer"
                                          style={{
                                                border: '1px solid #E0E4EC',
                                                padding: '10px',
                                                height: '152px',
                                                background: 'white',
                                                borderRadius: '8px',
                                                outline: 'none',
                                                width: '100%',
                                                resize: 'none',
                                          }}
                                    />
                              </Form.Item>
                              <Form.Item className=" text-end">
                                    <Button
                                          className="cursor-pointer"
                                          htmlType="submit"
                                          block
                                          style={{
                                                border: 'none',
                                                height: '44px',
                                                background: '#89a809',
                                                color: 'white',
                                                borderRadius: '8px',
                                                outline: 'none',
                                                padding: '10px 20px',
                                          }}
                                    >
                                          {modalData ? 'Update' : 'Submit'}
                                    </Button>
                              </Form.Item>
                        </Form>
                  </div>
            </Modal>
      );
};

export default AddFAQModal;
