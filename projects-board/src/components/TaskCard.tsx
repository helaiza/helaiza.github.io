import * as React from 'react';
import { Card, CardContent, CardActions, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

interface ITaskProps {
    item: any,
    deleteTask: any
}

const TaskCard = (props: ITaskProps) => (
        <Card>
            <CardContent>
                <b><div className="name">{props.item.name}</div></b>
                <div className="description">{props.item.description}</div>
                <div className="date-created">created: {props.item.creationDate}</div>
                <div className="estimate">estimation (hours): {props.item.estimate} </div>
            </CardContent>
            <CardActions>
                <IconButton aria-label="delete" onClick={() => props.deleteTask(props.item.id)}>
                    <DeleteIcon />
                </IconButton>
            </CardActions>            
        </Card>
);

export default TaskCard;
