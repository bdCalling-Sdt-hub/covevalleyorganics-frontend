"use client";
import { Button, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

const OtpVerify = () => {
  const router = useRouter();
  const handleResend = () => {};

  const onFinish = (values: any) => {
    router.push("/reset-password");
  };

  return (
    <div
      className={` w-full min-h-screen transition-all duration-1000 ease-in-out  pt-[85px] flex  items-center justify-center `}
    >
      <div className="md:w-1/2">
        <p className="text-center pb-4 text-3xl text-[#222222] font-[450]">
          Verification code
        </p>
        <p className="text-center text-[18px] pb-8 text-[#6B6B6B] ">
          We sent a reset link to email@gmail.com <br /> enter 5 digit code that
          is mentioned in the email{" "}
        </p>

        <Form onFinish={onFinish} layout="vertical" className=" w-full mx-auto">
          <Form.Item
            name="otp"
            rules={[
              {
                required: true,
                message: "Please Enter 5 Digit OTP",
              },
            ]}
            className=" flex items-center justify-center"
          >
            <Input.OTP
              length={5}
              size="large"
              style={{
                width: "100%",
                height: 65,
                boxShadow: "none",
                outline: "none",
                background: "transparent",
              }}
              className=" placeholder:text-[#818181] placeholder:text-[22px] placeholder:font-medium placeholder:leading-6"
            />
          </Form.Item>

          <Button
            className="cursor-pointer"
            htmlType="submit"
            block
            style={{
              border: "none",
              height: "44px",
              background: "#89a809",
              color: "white",
              borderRadius: "8px",
              outline: "none",
              padding: "10px 20px",
            }}
          >
            {" "}
            Verify Code
          </Button>
        </Form>

        <p className="py-4 text-[#6B6B6B] text-center">
          You have not received the email?{" "}
          <span
            onClick={handleResend}
            className="text-[#00445B] font-semibold "
          >
            Resend
          </span>
        </p>
      </div>
    </div>
  );
};

export default OtpVerify;
