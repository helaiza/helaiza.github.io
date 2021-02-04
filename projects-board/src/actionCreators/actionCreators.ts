import { IProject, ITask } from "../components/interfaces";
import * as actions from '../actionTypes/actionTypes';

export function setProjects(projects: Array<IProject>): actions.SetProjectsAction {
    return {
      type: actions.SET_PROJECTS,
      projects
    };
}

export function getProjects(): actions.GetProjectsAction {
    return{
        type: actions.GET_PROJECTS
    };
}


export function getProjectsSuccess(projects: Array<IProject>): actions.GetProjectsSuccessAction {
    return{
        type: actions.GET_PROJECTS_SUCCESS,
        projects
    };
}

export function addProject(projectName: string): actions.AddProjectAction {
    return{
        type: actions.ADD_PROJECT,
        projectName: projectName
    };
}

export function addTask(taskName: string, taskDescription: string, estimate: number, parentProjectId: IProject['id']): actions.AddTaskAction {
    return{
        type: actions.ADD_TASK,
        taskName: taskName, 
        taskDescription: taskDescription, 
        estimate: estimate,
        parentProjectId: parentProjectId
    };
}

export function deleteTask(id: ITask['id']): actions.DeleteTaskAction {
    return {
        type: actions.DELETE_TASK,
        id: id
    }
}

export function setCurrentProject(currentProject: IProject): actions.SetCurrentProjectAction {
    return {
      type: actions.SET_CURRENT_PROJECT,
      currentProject: currentProject 
    };
}

export function getCurrentProject(): actions.GetCurrentProjectAction {
    return {
      type: actions.GET_CURRENT_PROJECT
    };
}

export function getCurrentProjectSuccess(currentProject: IProject): actions.GetCurrentProjectSuccessAction {
    return {
      type: actions.GET_CURRENT_PROJECT_SUCCESS,
      currentProject
    };
}

export function setTasks(tasks: Array<ITask>): actions.SetTasksAction {
    return{
        type: actions.SET_TASKS,
        tasks
    };
}

export function getTasksByProject(id: IProject['id']): actions.GetTasksByProjectAction {
    return{
        type: actions.GET_TASKS_BY_PROJECT,
        id
    };
}

export function getTasksByProjectSuccess(tasks: Array<ITask>, id: IProject['id']): actions.GetTasksByProjectSuccessAction {
    return{
        type: actions.GET_TASKS_BY_PROJECT_SUCCESS,
        id,
        tasks
    };
}

export function getDataFailure(error: Error | string): actions.GetDataFailureAction {
    return {
        type: actions.GET_DATA_FAILURE,
        error
    };
}