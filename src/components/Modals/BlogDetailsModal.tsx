/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input, Modal } from "antd";

interface propsType {
  setShowDetails: any;
  showDetails: any;
  modalData: any;
  setModalData: any;
}

const BlogDetailsModal = ({
  setShowDetails,
  showDetails,
  modalData,
  setModalData,
}: propsType) => {
  return (
    <div>
      <Modal
        open={showDetails}
        onCancel={() => {
          setShowDetails(false);
          setModalData(null);
        }}
        centered
        footer={false}
      >
        <div className="flex justify-center items-center">
          <img
            src={modalData?.BlogImage}
            className=" h-[120px] w-[120px] rounded-full  "
            alt=""
          />
        </div>
        <div className=" flex justify-center items-center">
          <div className="">
            <div className="flex items-center gap-5 w-full ">
              <p className="text-[#000000] text-sm ">Title: </p>
              <p className="text-[#5C5C5C] text-sm font-medium ">
                {modalData?.title}
              </p>
            </div>
            <div className=" w-full flex gap-2 items-center">
              <p className="text-[#000000] text-sm "> Subtitle:</p>
              <p className="text-[#5C5C5C] text-sm font-medium w-1/2">
                {modalData?.subTitle}
              </p>
            </div>
            <div className=" w-full ">
              <p className="text-[#000000] text-sm pb-1 ">Description:</p>
              <Input.TextArea
                className="w-[100%] border outline-none resize-none"
                rows={6}
                defaultValue={modalData?.description}
                readOnly
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default BlogDetailsModal;
