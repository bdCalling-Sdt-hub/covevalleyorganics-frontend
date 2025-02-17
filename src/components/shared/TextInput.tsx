"use client"
import { Form, Input } from 'antd';
import React, { useEffect } from 'react';

const TextInput = ({name , label   }:{name:string , label:string  }) => { 
    const form = Form.useFormInstance() 

    useEffect(()=>{ 
        form.setFieldsValue({name: ""}) 
    },[form])
    return (
        <Form.Item name={name}   
        label={<p className='text-[#6D6D6D]'>{label}</p>}
        rules={[{ required: true, message: `Please input your ${label}!` }]}
        > 
        <Input   
        className="w-[100%] border outline-none h-[40px]" />     
        </Form.Item>
    );
};

export default TextInput;