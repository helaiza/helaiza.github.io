import * as React from 'react';
import { Button, Dialog, DialogTitle, TextField, DialogActions, DialogContent, DialogContentText,  Grid, IconButton } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

interface IProjectModalProps {
    addProject: any
}


export const ModalAddProject = (props: IProjectModalProps) => {  
    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState("");

   
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setName("");
        setOpen(false);        
    };     

    const handleSubmit = () => {
        name.length && name.length > 3 && props.addProject(name); 
        handleClose();
    }
    return (
    <>
        <Grid item xs={3}>
            <IconButton aria-label="add"  color="primary" onClick={handleOpen}>
                <AddCircleOutlineIcon/>
            </IconButton>
        </Grid>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create New Project</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter project's name and press "CREATE"
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Project Name"
            type="name"
            fullWidth
            onChange={event => setName(event.target.value)}
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