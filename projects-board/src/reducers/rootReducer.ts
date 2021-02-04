import { combineReducers } from 'redux';
import { projectsReducer } from './projectsReducer';
import { tasksReducer } from './tasksReducer';
import { currentProjectReducer } from './currentProjectReducer';
import { errorReducer } from './errorReducer';

export const rootReducer = combineReducers({
    projects: projectsReducer,
    tasks: tasksReducer,
    currentProject: currentProjectReducer,
    error: errorReducer    
})

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;