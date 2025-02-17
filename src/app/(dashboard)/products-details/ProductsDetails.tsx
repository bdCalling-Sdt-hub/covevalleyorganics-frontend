'use client';
import AddProductForm from '@/components/Modals/AddProductModal';
import UpdateProductForm from '@/components/Modals/UpdateProductModal';
import DashboardTitle from '@/components/shared/DashboardTitle';
import { useDeleteProductMutation, useGetAllProductsQuery } from '@/redux/features/product/productApi';
import { Table } from 'antd';
import { Pencil, Trash2 } from 'lucide-react';
import { useState } from 'react';
import Swal from 'sweetalert2';

const ProductsDetails = () => {
      const [open, setOpen] = useState(false);
      const [updateModal, setUpdateModal] = useState(false);
      const [deleteProduct] = useDeleteProductMutation();
      const { data: allProducts } = useGetAllProductsQuery([]);
      const [modalData, setModalData] = useState<any>({});

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
                        const res = await deleteProduct(id).unwrap();
                        if (res.success) {
                              Swal.fire({
                                    text: 'Product has been deleted.',
                                    icon: 'success',
                                    showConfirmButton: false,
                                    timer: 1500,
                              });
                        }
                  }
            });
      };

      const columns = [
            {
                  title: 'S.No',
                  dataIndex: 'key',
                  key: 'key',
                  render: (_filed: any, _record: any, index: number) => index + 1,
            },
            {
                  title: 'Image',
                  dataIndex: 'image',
                  key: 'image',
                  render: (_: any, record: any) => (
                        <div className=" flex items-center gap-1">
                              <img src={record?.image} alt="image" className="size-16 rounded-full" />
                        </div>
                  ),
            },
            {
                  title: 'Ingredient Image',
                  dataIndex: 'ingredientImage',
                  key: 'ingredientImage',
                  render: (_: any, record: any) => (
                        <div className=" flex items-center gap-1">
                              <img src={record?.ingredientImage} alt="image" className="size-16 rounded-full" />
                        </div>
                  ),
            },
            {
                  title: 'Name',
                  dataIndex: 'name',
                  key: 'name',
            },
            {
                  title: 'Description',
                  dataIndex: 'description',
                  key: 'description',
                  render: (desc: string) => {
                        return <p className="text-gray-700 max-w-[50ch] line-clamp-2">{desc}</p>;
                  },
            },

            {
                  title: 'Action',
                  dataIndex: 'action',
                  key: 'action',
                  render: (_: any, record: any) => (
                        <div className=" flex items-center gap-4 ">
                              <button
                                    onClick={() => {
                                          setModalData(record);
                                          setUpdateModal(true);
                                    }}
                              >
                                    <Pencil />
                              </button>
                              <button onClick={() => handleDelete(record?._id)}>
                                    <Trash2 color="red" size={22} />{' '}
                              </button>
                        </div>
                  ),
            },
      ];

      return (
            <div>
                  {/* header  */}
                  <div className=" flex  items-center justify-between mb-5">
                        <DashboardTitle>Products</DashboardTitle>
                        <div className=" flex items-center gap-5 ">
                              <button
                                    className=" flex gap-1 text-white bg-primary  h-[45px] rounded-lg  px-4 justify-center items-center"
                                    onClick={() => {
                                          setOpen(true);
                                    }}
                              >
                                    Add Product
                              </button>
                        </div>
                  </div>

                  <Table columns={columns} dataSource={allProducts} pagination={false} />

                  <AddProductForm open={open} setOpen={setOpen} />
                  <UpdateProductForm
                        setModalData={setModalData}
                        modalData={modalData}
                        open={updateModal}
                        setOpen={setUpdateModal}
                  />
            </div>
      );
};

export default ProductsDetails;
