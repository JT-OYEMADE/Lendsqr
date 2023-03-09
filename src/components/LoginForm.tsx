import React from "react";
import { Button, Form, Input } from "antd";
import { useNavigate} from 'react-router-dom'

interface IValues {
  email: string;
  password: string
}

const LoginForm: React.FC = () => {

const navigate = useNavigate()
  const handleSubmit = (values: IValues) => {
    console.log(values);
    navigate('/users')
  };
 

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      autoComplete="off"
      onFinish={handleSubmit}
    >
      <Form.Item
        className="ant-email"
        name="email"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input placeholder="Email" />
      </Form.Item>

      <Form.Item
        className="ant-password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password
          placeholder="Password"
          iconRender={(visible) =>
            visible ? <span>SHOW</span> : <span> HIDE</span>
          }
        />
      </Form.Item>

      <Form.Item>
        <p className="login-form-forgot">Forgot Password?</p>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" className="logButton" htmlType="submit" >
          log in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
