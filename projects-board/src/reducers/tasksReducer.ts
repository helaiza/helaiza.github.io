import { ITask } from "../components/interfaces";
import * as actions from '../actionTypes/actionTypes';
import { data } from '../mock-data';

export interface TasksState {
    tasks: Array<ITask>;
}

const initialState = {
    tasks: data.tasksList
};

export const tasksReducer = (state: TasksState = initialState, action: actions.ProjectsAction ) => {
    switch (action.type) {
        case actions.ADD_TASK:
            {
                const newTask:ITask = {
                    name: action.taskName,
                    description: action.taskDescription,
                    estimate: action.estimate,
                    parentProjectId: action.parentProjectId,
                    creationDate: new Date().toLocaleString(),
                    id: Math.floor(Math.random()*100000)
                }
                return {
                    ...state,
                    tasks: [...state.tasks, newTask]
                }
            }
        case actions.DELETE_TASK:         
                return {
                    ...state,
                    tasks: state.tasks.filter(task => task.id !== action.id) 
                }            
            
        case actions.SET_TASKS:
        case actions.GET_TASKS_BY_PROJECT_SUCCESS:
            return {
               tasks: action.tasks
            }
        default:
            return state;	
        }
}

export default tasksReducer;