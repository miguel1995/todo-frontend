import React from 'react';
import type { RootState } from '../store/store'
import { useSelector, useDispatch } from 'react-redux'
import Task from '../interfaces/Task';
import { onCreateTask, onGetTask, onCheckTask } from '../store/todoSlices/todoSlices';

export const useToDos = () => {
    
    const {todoList} = useSelector((state: RootState) => state.counter)
    const dispatch = useDispatch()

    const createTodo = async (task:Task)=> {

        //TODO: create Task A LA BASE DE DATOS
    
        dispatch(onCreateTask(task))

    }

    const getToDos = async ()=> {

        const taskList:Task[] = [];
        //TODO: get Task BASE DE DATOS
        
        /*taskList = [
            { id:12456, name:"Racing car sprays burning fuel into crowd", state: true },
            { id:12456, name:"Japanese princess to wed commoner.', 'Australian walks 100km after outback crash", state: true },
            { id:12456, name:"Man charged over missing wedding girl.', 'Los Angeles battles huge wildfir", state: true }
        ];*/

        dispatch(onGetTask(todoList));

    }

    const checkToDoList = async (task:Task)=> {
        //Actualizar Base de datos
        

        //Actualiza Store Redux  
        dispatch(onCheckTask(task))

    }

    return {
    
     //estados
        todoList,

     //metodos
        createTodo,
        getToDos,
        checkToDoList,


  }
}
