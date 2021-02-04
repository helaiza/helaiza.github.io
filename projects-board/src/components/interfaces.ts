type CreationDate = string; 

export interface IProject {
    id: number;
    name: string;
    creationDate: CreationDate;
}

export interface ITask {
    id: number;
    parentProjectId: IProject['id'];
    name: string;
    description: string;
    creationDate: CreationDate;
    estimate: number;
}

export interface IProjectWithTasks {
    id: number;
    name: string;
    creationDate: CreationDate;
    tasks: Array<ITask>;
}