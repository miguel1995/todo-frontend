

import React, { useEffect } from 'react'
import { Button, Checkbox, Col, Row, Divider, Form, Input, List, Typography } from 'antd';
import Task from '../../interfaces/Task';
import { useToDos } from '../../hooks/useToDos';
import { CheckboxChangeEvent } from 'antd/es/checkbox';




export const Pages = () => {

    const {todoList, createTodo, getToDos, checkToDoList} = useToDos();
    console.log(todoList);


    useEffect(() => {
       getToDos();
    }, [])
    

    const onChange = (task:Task) => {
        
        
        //setChecked(e.target.checked);
        checkToDoList(task);


      };
    const handleClick = (item:Task) => {
        console.log('item = ', item);
        //setChecked(e.target.checked);
        //updateToDo();


      };

    

    const onFinish = (values: any) => {
        console.log('Success:', values);
        //TODO: Llamar al servicio de create Task del backend
    

        let taskTemp:Task = {
            id:111111, 
            name: values.username,
            state: false
        }

        
        createTodo(taskTemp);    

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


    <List header={<div>My Todo List</div>} footer={<div> Fiduoccidente</div>} bordered dataSource={todoList} renderItem={(item) => (
      <List.Item >
        <Checkbox  checked={item.state} onChange={ ()=>onChange(item) } ></Checkbox> {item.name}
      </List.Item>)} />


  </>



    
  )
}
