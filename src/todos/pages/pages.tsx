

import React from 'react'
import { Button, Checkbox, Col, Row, Divider, Form, Input, List, Typography } from 'antd';
import Task from '../../interfaces/Task';



const data:Task[] = [
    { id:12456, name:"Racing car sprays burning fuel into crowd", state: true },
    { id:12456, name:"Japanese princess to wed commoner.', 'Australian walks 100km after outback crash", state: true },
    { id:12456, name:"Man charged over missing wedding girl.', 'Los Angeles battles huge wildfir", state: true }
    ];

export const Pages = () => {

    const onFinish = (values: any) => {
        console.log('Success:', values);
        //TODO: Llamar al servicio de create Task del backend
      };
      
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };

  
  
    return (
<>
    <Divider orientation="left">Todo List</Divider>

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
        <Row>

      <Col span={12}>
      <Form.Item
      name="username"
      rules={[{ required: true, message: 'Please input your task' }]}
    >
            <Input placeholder='Type your new task' />
        </Form.Item>
      </Col>

      <Col span={12}>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
      </Col>
      </Row>


  </Form>


    <List header={<div>My Todo List</div>} footer={<div> Fiduoccidente</div>} bordered dataSource={data} renderItem={(item) => (
      <List.Item>
        <Checkbox>Remember me</Checkbox>
        <Typography.Text mark>[ITEM]
        </Typography.Text>
        {item.name}
      </List.Item>)} />




  </>


    
  )
}
