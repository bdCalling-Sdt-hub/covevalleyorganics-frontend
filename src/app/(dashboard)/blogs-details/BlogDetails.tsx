'use client';
import AddBlogModal from '@/components/Modals/AddBlogModal';
import UpdateBlogModal from '@/components/Modals/UpdateBlogModal';
import DashboardTitle from '@/components/shared/DashboardTitle';
import { useDeleteBlogMutation, useGetAllBlogQuery } from '@/redux/features/blog/blogApi';
import { Table } from 'antd';
import { Pencil, Trash2 } from 'lucide-react';
import { useState } from 'react';
import Swal from 'sweetalert2';

const BlogDetails = () => {
      const [open, setOpen] = useState(false);
      const [deleteBlog] = useDeleteBlogMutation();
      const [updateModal, setUpdateModal] = useState(false);
      const { data: blogs } = useGetAllBlogQuery([]);
      const [modalData, setModalData] = useState<any>();

      const handleDelete = async (id: string) => {
            Swal.fire({
                  title: 'Are you sure?',
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Yes',
                  cancelButtonText: 'No',
            }).then(async (result: any) => {
                  if (result.isConfirmed) {
                        const res = await deleteBlog(id).unwrap();
                        if (res.success) {
                              Swal.fire('Deleted!', 'Blog successfully deleted', 'success');
                        }
                  }
            });
      };

      const columns = [
            {
                  title: 'S.No',
                  dataIndex: 'key',
                  key: 'key',
                  render: (_: string, _record: any, index: any) => index + 1,
            },
            {
                  title: 'Blog Image',
                  dataIndex: 'BlogImage',
                  key: 'BlogImage',
                  render: (_: any, record: any) => (
                        <div className=" flex items-center gap-1">
                              <img
                                    alt=""
                                    src={record?.image}
                                    style={{
                                          height: '65px',
                                          width: '100px',
                                          borderRadius: '10px',
                                          objectFit: 'cover',
                                    }}
                              />
                        </div>
                  ),
            },
            {
                  title: ' Title',
                  dataIndex: 'title',
                  key: 'title',
            },

            {
                  title: 'Action',
                  dataIndex: 'action',
                  key: 'action',
                  render: (_: any, record: any) => (
                        <div className=" flex items-center gap-4 ">
                              <button
                                    onClick={() => {
                                          setUpdateModal(true);
                                          setModalData(record);
                                    }}
                              >
                                    <Pencil />
                              </button>
                              <button onClick={() => handleDelete(record?._id)}>
                                    <Trash2 color="red" />
                              </button>
                        </div>
                  ),
            },
      ];

      return (
            <div>
                  {/* header  */}
                  <div className=" flex  items-center justify-between mb-5">
                        <DashboardTitle className=""> Blogs</DashboardTitle>
                        <div className=" flex items-center gap-5 ">
                              <button
                                    className=" flex gap-1 text-white bg-primary  h-[45px] rounded-lg  px-4 justify-center items-center"
                                    onClick={() => {
                                          setOpen(true);
                                    }}
                              >
                                    Add Blog
                              </button>
                        </div>
                  </div>

                  <Table columns={columns} dataSource={blogs} pagination={false} />

                  <AddBlogModal open={open} setOpen={setOpen} />
                  <UpdateBlogModal
                        open={updateModal}
                        setOpen={setUpdateModal}
                        modalData={modalData}
                        setModalData={setModalData}
                  />
            </div>
      );
};

export default BlogDetails;
