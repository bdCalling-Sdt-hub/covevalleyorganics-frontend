"use client";
import { Button, Form, Input } from "antd";
import { useRouter } from "next/navigation";

import React from "react";

const ResetPassword = () => {
  const router = useRouter();

  const onFinish = () => {
    router.push("/login");
  };
  return (
    <div
      className={` w-full min-h-screen transition-all duration-1000 ease-in-out  pt-[85px] flex  items-center justify-center `}
    >
      <div className="md:w-1/2">
        <p className="text-center pb-4 text-3xl text-[#222222] font-[450]">
          Set a new password
        </p>
        <p className="text-center text-[18px] pb-14 text-[#6B6B6B]">
          Create a new password. Ensure it differs from <br />
          previous ones for security
        </p>

        <Form onFinish={onFinish} layout="vertical" className=" w-full">
          <Form.Item
            style={{ marginBottom: 0 }}
            name="new_password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
            label={<p className="text-[#6D6D6D]">Password</p>}
          >
            <Input.Password
              type="password"
              placeholder="Enter your password"
              style={{
                border: "1px solid #E0E4EC",
                height: "52px",
                background: "white",
                borderRadius: "8px",
                outline: "none",
                marginBottom: "20px",
              }}
            />
          </Form.Item>

          <Form.Item
            name="confirm_password"
            label={<p className="text-[#6D6D6D]">Confirm Password</p>}
            dependencies={["new_password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("new_password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The new password that you entered do not match!")
                  );
                },
              }),
            ]}
          >
            <Input.Password
              placeholder="Enter Confirm Password"
              className="placeholder:text-[#818181] placeholder:text-[16px] placeholder:font-normal placeholder:leading-6"
              style={{
                width: "100%",
                height: 50,
                boxShadow: "none",
                outline: "none",
                border: "1px solid #E0E0E0",
                borderRadius: 6,
                background: "#FEFEFE",
              }}
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
            Update Password
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ResetPassword;
