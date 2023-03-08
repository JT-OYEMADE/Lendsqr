import React from 'react';
import { Button, Form, Input } from 'antd';

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

const LoginForm: React.FC = () => (
  
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
    className='ant-email'
      name="email"
      rules={[{
        type: 'email',
        message: 'The input is not valid E-mail!',
      },
      {
        required: true,
        message: 'Please input your E-mail!',
      },]}
    >
      <Input placeholder='Email' />
    </Form.Item>

    <Form.Item
      className='ant-password'
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password placeholder='Password' iconRender={(visible) => (visible ? <span>SHOW</span> : <span> HIDE</span>)} />
    </Form.Item>

    <Form.Item>
      <a className="login-form-forgot" href="#">
        Forgot Password?
      </a>
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      
      <Button type="primary" htmlType="submit" className='logButton'>
        log in
      </Button>
    </Form.Item>
  </Form>
);

export default LoginForm;
