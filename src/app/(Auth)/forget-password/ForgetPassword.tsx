"use client";
import TextInput from "@/components/shared/TextInput";
import { Button, Form } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

const ForgetPassword = () => {
  const router = useRouter();

  const onFinish = () => {
    router.push("/otp-verify");
  };
  return (
    <div className="w-full min-h-screen transition-all duration-1000 ease-in-out  pt-[85px] flex  items-center justify-center ">
      <div className="md:w-1/2">
        <p className="text-center pb-4 text-3xl text-[#222222] font-[450]">
          Forgot Password ?{" "}
        </p>
        <p className="text-center text-[18px] pb-14 text-[#6B6B6B]">
          Please enter your email and password to continue
        </p>

        <Form onFinish={onFinish} layout="vertical" className=" w-full">
          <TextInput name="email" label="Email" />

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
            Send Code
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ForgetPassword;
