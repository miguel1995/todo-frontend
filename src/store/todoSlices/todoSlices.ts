import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import Task from '../../interfaces/Task'

export interface CounterState {
  todoList: Task[]
}

const initialState: CounterState = {
  todoList: []
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    onGetTask: (state, action: PayloadAction<Task[]>) => {
      state.todoList = action.payload
    },
    onCreateTask: (state, action: PayloadAction<Task>) => {
        state.todoList.push(action.payload);
      },
    onCheckTask: (state, action: PayloadAction<Task>) => {
        
        state.todoList = state.todoList.map((item:Task)=>{

            if(item.id===action.payload.id){
                item.state=item.state!;
            }

            return item;
        })

        
      },


      
  },
})

export const {  onGetTask, onCreateTask, onCheckTask } = counterSlice.actions

export default counterSlice.reducer