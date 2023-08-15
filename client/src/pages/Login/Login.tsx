import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Layout, Row } from 'antd';
import { passwordValidate } from './actions';

const Login = () => {
  return (
    <Layout className="login-form">
      <Row>
        <Col>
          <Form>
            <Form
              // initialValues={ { email: localStorage.getItem('email') } }
              autoComplete="off"
              layout="vertical"
              requiredMark={false}
            >
              <Form.Item
                name="email"
                rules={[
                  { type: 'email', required: true, message: 'Please input your email here!' }
                ]}
              >
                <Input
                  defaultValue={'test@gmail.com'}
                  placeholder="Email Address"
                  size={'large'}
                  prefix={<MailOutlined />}
                />
              </Form.Item>
              <Form.Item
                className="login-password-field"
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password here!'
                  },
                  ({ getFieldValue }) => {
                    return passwordValidate(getFieldValue('password'));
                  }
                ]}
              >
                <Input.Password
                  placeholder="Password"
                  type="password"
                  size={'large'}
                  prefix={<LockOutlined />}
                  visibilityToggle={true}
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="text"
                  className="forget-password"
                  // onClick={ handleForgetPassword }
                >
                  Forget Password?
                </Button>
              </Form.Item>
              <Row>
                <Col span={24} className="submit">
                  <Button type="primary" htmlType="submit" className="submit-btn">
                    Login
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col className="create-one">
                  <p>Do not have an account?</p>
                  <Button type="text">Create One</Button>
                </Col>
              </Row>
            </Form>
          </Form>
        </Col>
      </Row>
    </Layout>
  );
};

export default Login;
