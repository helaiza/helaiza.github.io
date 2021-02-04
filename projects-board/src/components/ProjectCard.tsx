import * as React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

interface IProjectProps {
    item: any;
    toggle: any
}

const ProjectCard = (props: IProjectProps) => (
    <>
        <ListItem button onClick={()=> {props.toggle(props.item)}}>
            <ListItemText  primary= {props.item.name} />
        </ListItem>
        <Divider />
    </>
    
);

export default ProjectCard;
