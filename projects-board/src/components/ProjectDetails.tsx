import * as React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { IProject, ITask } from './interfaces';
import TaskCard from './TaskCard';
import { StyledGrid } from '../styles/styled';
import ModalAddTask from './ModalAddTask';

interface IProjectDetailsProps {
    currentProject: IProject;
    tasksList: Array<ITask>;
    addTask:any;
    deleteTask: any;
}

const ProjectDetails = (props: IProjectDetailsProps) =>     
    (
    <Grid container item xs={9} spacing={3} >  
       {props.currentProject &&
       <Grid item xs= {12} alignContent="center">            
            <br />
             <Typography variant="h5" gutterBottom>
               {props.currentProject.name}
            </Typography>
            <Typography variant="h6" gutterBottom>
                creation date: {props.currentProject.creationDate}
            </Typography>         
        </Grid>
       }        
        {props.tasksList && props.currentProject && 
            <StyledGrid> 
                {
                    props.tasksList.map((task: ITask) => (
                    <TaskCard key={`task-${task.id}`} item={task} deleteTask={props.deleteTask} />
                ))
                }   
            <ModalAddTask  addTask={props.addTask} />               
            </StyledGrid> 
        }
        {}
        {!props.tasksList && 
        <Typography variant="h6" gutterBottom>
            Select Project
        </Typography>
        }     
    </Grid>
);
        
export default ProjectDetails;
