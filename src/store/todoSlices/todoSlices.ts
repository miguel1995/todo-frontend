import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import Task from '../../interfaces/Task'

export interface CounterState {
  todoList: Task[]
}

const initialState: CounterState = {
  todoList: [
    { id:12456, name:"Racing car sprays burning fuel into crowd", state: true },
    { id:12456, name:"Japanese princess to wed commoner.', 'Australian walks 100km after outback crash", state: true },
    { id:12456, name:"Man charged over missing wedding girl.', 'Los Angeles battles huge wildfir", state: true }
    ]
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    getTodos: (state, action: PayloadAction<Task[]>) => {
      state.todoList = action.payload
    },
  },
})

export const {  getTodos } = counterSlice.actions

export default counterSlice.reducer