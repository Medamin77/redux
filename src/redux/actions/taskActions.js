import { ADD_TASK } from "./type"

export const addTask = (newTask) => {
    return{
        type : ADD_TASK,
        payload : newTask 

    }}