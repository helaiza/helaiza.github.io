import { IProject, ITask } from "../components/interfaces";

export const SET_PROJECTS = "projectsActionTypes/SET_PROJECTS";
export interface SetProjectsAction {
  type: typeof SET_PROJECTS;
  projects: Array<IProject>;
}

export const GET_PROJECTS = "projectsActionTypes/GET_PROJECTS";
export interface GetProjectsAction {
  type: typeof GET_PROJECTS;
}

export const GET_PROJECTS_SUCCESS = "projectsActionTypes/GET_PROJECTS_SUCCESS";
export interface GetProjectsSuccessAction {
  type: typeof GET_PROJECTS_SUCCESS;  
  projects: Array<IProject>;
}

export const ADD_PROJECT = "projectsActionTypes/ADD_PROJECT";
export interface AddProjectAction {
    type: typeof ADD_PROJECT; 
    projectName: string;
}

export const SET_CURRENT_PROJECT = "projectsActionTypes/SET_CURRENT_PROJECT";
export interface SetCurrentProjectAction {
    type: typeof SET_CURRENT_PROJECT;
    currentProject: IProject;
}

export const ADD_TASK = "projectsActionTypes/ADD_TASK";
export interface AddTaskAction {
  type: typeof ADD_TASK; 
  taskName: string;
  taskDescription: string;
  estimate: number;
  parentProjectId: IProject['id'];
}

export const DELETE_TASK = "projectsActionTypes/DELETE_TASK";
export interface DeleteTaskAction {
  type: typeof DELETE_TASK; 
  id: ITask['id'];
}

export const GET_CURRENT_PROJECT = "projectsActionTypes/GET_CURRENT_PROJECT";
export interface GetCurrentProjectAction {
    type: typeof GET_CURRENT_PROJECT;
}

export const GET_CURRENT_PROJECT_SUCCESS = "projectsActionTypes/GET_CURRENT_PROJECT_SUCCESS";
export interface GetCurrentProjectSuccessAction {
    type: typeof GET_CURRENT_PROJECT_SUCCESS;    
    currentProject: IProject;
}

export const SET_TASKS = "projectsActionTypes/SET_TASKS";
export interface SetTasksAction {
    type: typeof SET_TASKS;
    tasks: Array<ITask>;
}

export const GET_TASKS_BY_PROJECT = "projectsActionTypes/GET_TASKS_BY_PROJECT";
export interface GetTasksByProjectAction {
    type: typeof GET_TASKS_BY_PROJECT;
    id: IProject['id'];
}

export const GET_TASKS_BY_PROJECT_SUCCESS = "projectsActionTypes/GET_TASKS_BY_PROJECT_SUCCESS";
export interface GetTasksByProjectSuccessAction {
    type: typeof GET_TASKS_BY_PROJECT_SUCCESS;
    id: IProject['id'];
    tasks: Array<ITask>;
}

export const GET_DATA_FAILURE = "projectsActionTypes/GET_DATA_FAILURE";
export interface GetDataFailureAction {
  type: typeof GET_DATA_FAILURE;  
  error: Error | string;
}


export type ProjectsAction = 
| SetProjectsAction
| AddProjectAction
| AddTaskAction
| DeleteTaskAction
| GetProjectsAction
| GetProjectsSuccessAction
| AddProjectAction
| SetCurrentProjectAction
| GetCurrentProjectAction
| GetCurrentProjectSuccessAction
| SetTasksAction
| GetTasksByProjectAction
| GetTasksByProjectSuccessAction
| GetDataFailureAction
