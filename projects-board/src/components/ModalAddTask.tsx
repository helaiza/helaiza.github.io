import * as React from 'react';
import { Button, Dialog, DialogTitle, TextField, DialogActions, DialogContent, DialogContentText,  Grid, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

interface IProjectModalProps {
    addTask: any
}


export const ModalAddProject = (props: IProjectModalProps) => {  
    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [estimate, setEstimate] = React.useState(0);

   
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setName("");
        setOpen(false);        
    };     

    const handleSubmit = () => {
        name.length && name.length > 3 && description.length && props.addTask(name, description, estimate); 
        handleClose();
    }
    return (
    <>
        <Grid item xs={3}>
            <IconButton aria-label="addTask"  color="primary" onClick={handleOpen}>
                <AddIcon />
            </IconButton>
        </Grid>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        	<DialogTitle id="form-dialog-title">New Task</DialogTitle>
			<DialogContent>
				<DialogContentText>
					Enter name, description, estimate (optional) and press "CREATE"
				</DialogContentText>
				<TextField
				autoFocus
				margin="dense"
				id="name"
				label="Task Name"
				type="name"
				fullWidth
				onChange={event => setName(event.target.value)}
				/>
				<TextField
					margin="dense"
					id="description"
					label="Description"
					type="description"
					fullWidth
					onChange={event => setDescription(event.target.value)}
				/>
				<TextField
					margin="dense"
					id="description"
					label="Estimate"
					type="number"
					onChange={event => setEstimate(parseInt(event.target.value.replace(/\D/,''), 10))}
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleSubmit} color="primary">
					Create
				</Button>
				<Button onClick={handleClose} color="primary">
					Cancel
				</Button>
			</DialogActions>
      	</Dialog>
     </> 
    );
}


export default ModalAddProject;