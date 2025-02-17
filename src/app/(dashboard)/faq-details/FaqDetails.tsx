'use client';
import AddFAQ from '@/components/Modals/AddFAQModal';
import DashboardTitle from '@/components/shared/DashboardTitle';
import { useDeleteFaqMutation, useGetAllFaqQuery } from '@/redux/features/faq/faqApi';
import { Pencil, Trash2 } from 'lucide-react';
import { useState } from 'react';
import Swal from 'sweetalert2';

const FaqDetails = () => {
      const { data: faqs } = useGetAllFaqQuery([]);
      const [deleteFaq] = useDeleteFaqMutation();
      const [openAddModel, setOpenAddModel] = useState(false);
      const [modalData, setModalData] = useState();

      const handleDelete = async (id: any) => {
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
                        const res = await deleteFaq(id).unwrap();
                        if (res.success) {
                              Swal.fire('Deleted!', 'FAQ successfully deleted', 'success');
                        }
                  }
            });
      };

      return (
            <div className="  ">
                  <div className=" flex  items-center justify-between mb-5">
                        <DashboardTitle className="">Frequently Asked Questions</DashboardTitle>
                        <div className=" flex items-center gap-5 ">
                              <button
                                    className=" flex gap-2 text-white bg-primary  h-[45px] rounded-lg  px-4 justify-center items-center"
                                    onClick={() => {
                                          setOpenAddModel(true);
                                    }}
                              >
                                    Add FAQ
                              </button>
                        </div>
                  </div>

                  <div className="bg-white py-6 px-4 rounded-md">
                        {faqs?.map((item: any, index: number) => (
                              <div key={index + 1} className="flex justify-between items-start gap-4 ">
                                    <div className="mt-3">{index + 1}.</div>
                                    <div className="w-full ">
                                          <p className="text-base font-medium border-b rounded-xl py-2 px-4 flex items-center gap-8 ">
                                                <span className=" flex-1 "> {item?.question}</span>
                                          </p>
                                          <div className="flex justify-start items-start gap-2 border-b  py-2 px-4  rounded-xl my-4 ">
                                                <p className="text-[#919191] leading-[24px] ">{item?.answer}</p>
                                          </div>
                                    </div>
                                    <div className="w-[4%] flex justify-start items-center pt-4 gap-2">
                                          <Pencil
                                                onClick={() => {
                                                      setOpenAddModel(true);
                                                      setModalData(item);
                                                }}
                                                className="text-2xl cursor-pointer text-primary"
                                          />
                                          <Trash2
                                                onClick={() => handleDelete(item?._id)}
                                                className="text-2xl cursor-pointer text-red-600"
                                          />
                                    </div>
                              </div>
                        ))}
                  </div>

                  <AddFAQ
                        setOpenAddModel={setOpenAddModel}
                        openAddModel={openAddModel}
                        modalData={modalData}
                        setModalData={setModalData}
                  />
            </div>
      );
};

export default FaqDetails;
