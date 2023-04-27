import React from 'react';
import type { RootState } from '../store/store'
import { useSelector, useDispatch } from 'react-redux'

export const useToDos = () => {
    
    const {todoList} = useSelector((state: RootState) => state.counter)
    const dispatch = useDispatch()


    return {
    
     //estados
        todoList

     //metodos



  }
}
