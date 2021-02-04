import { IProject } from "../components/interfaces";
import * as actions from '../actionTypes/actionTypes';
import { data } from '../mock-data';

export interface ProjectsState {
    projects: Array<IProject>
}

const initialState = {
    projects: data.projectsList
};


export const projectsReducer = (state: ProjectsState = initialState, action: actions.ProjectsAction ): ProjectsState => {
   switch (action.type) {     
        case actions.ADD_PROJECT:
            {
                const newProject: IProject = {
                    name: action.projectName,
                    creationDate: new Date().toLocaleString(),
                    id: Math.floor(Math.random()*100000)
                }
                return { 
                    ...state,
                    projects: [...state.projects, newProject]
                } 
            }
        case actions.SET_PROJECTS:
        case actions.GET_PROJECTS_SUCCESS:
            return {
                projects: action.projects
            };
        default:
            return state;        
   }    
}

export default projectsReducer;