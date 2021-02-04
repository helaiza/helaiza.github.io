import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import { IProject } from './interfaces';
import ProjectCard from './ProjectCard';
import ModalAddProject from './ModalAddProject';

interface IProjectsListProps {
    projectsList: Array<IProject>;
    toggleProject: any,
    addProject: any
}

const ProjectsList = (props: IProjectsListProps) => (
    <Grid item xs={3}>
        <List>
        {props.projectsList.map((project: IProject) => (
            <ProjectCard key={`project-${project.id}`} item={project} toggle={props.toggleProject} />
        ))}
        </List>
        <ModalAddProject addProject={props.addProject}/>
    </Grid>
    
    
);

export default ProjectsList;
