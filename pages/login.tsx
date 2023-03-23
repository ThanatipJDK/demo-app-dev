import React from 'react'
import { Button, Checkbox, Form, Input, Row, Col } from 'antd';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import styles from '@/styles/Login.module.css'
import useAuth from '@/components/useAuth';

const Login = () => {
  const router = useRouter()
  const { login } = useAuth();
  const onFinish = async (values: any) => {
    console.log('Success:', values);
    const body = { 
      username : values.username,
      passwod : values.passwod
    }
    // const call = await axios.post('....',body,{
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    login(JSON.stringify(body));
    // localStorage.setItem("token", JSON.stringify(body)) //ตัวอย่างจริงๆ ก็เอา token ที่ได้มาใส่แทน
    router.push('/profile')
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      
      <Row gutter={[16, 16]}>
      <Col span={12} style={{display:'flex', justifyContent:'center',    background: 'mistyrose'}}>
          <div className={styles.div_txt_welcome}>
          <h2>Hello Again</h2>
          <h3>Welcome back you've been missed!</h3>
          </div>
         
        </Col>
        <Col span={12}>
          <h3 style={{ textAlign: 'center' }}>Login to your account</h3>
          <div className={styles.login_form}>

            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 10 }}
              style={{ width: 600 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>

        </Col>
       
      </Row>

    </>
  )
}

export default Login