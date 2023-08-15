import { MailOutlined } from '@ant-design/icons';
import { Form, Input, Modal, notification } from 'antd';
import React, { useState } from 'react';
// import { useForget } from '../action';

type forgetPasswordProps = {
  onCancel: () => void;
  onSuccess: () => void;
};

export const ForgetPassword = (props: forgetPasswordProps) => {
  // const { forgetPassword } = useForget();
  const { onCancel, onSuccess } = props;
  const [email, setEmail] = useState('');

  const handleForgetSubmit = async () => {
    try {
      localStorage.setItem('email', email);
      // await forgetPassword(email);
      onSuccess();
      notification.success({
        message: 'Success',
        description: 'Password reset email has been sent.'
      });
    } catch (error: any) {
      const errorMsg = error.response?.data?.message || error.message;
      if (errorMsg) {
        notification.error({
          message: 'Error',
          description: errorMsg
        });
      }
      onCancel();
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <Modal
      title="Reset Password"
      okText="Submit"
      cancelText="Cancel"
      open={true}
      onOk={handleForgetSubmit}
      onCancel={onCancel}
    >
      <Form
        initialValues={{ remember: true }}
        autoComplete="off"
        layout="vertical"
        requiredMark={false}
        onFinish={handleForgetSubmit}
      >
        <Form.Item
          name="forgetemail"
          rules={[{ type: 'email', required: true, message: 'Please input your email here!' }]}
        >
          <Input
            placeholder="Enter your email address"
            size={'large'}
            prefix={<MailOutlined />}
            value={email}
            onChange={handleEmailChange}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ForgetPassword;
