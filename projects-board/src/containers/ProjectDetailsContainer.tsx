import React from 'react';
import { connect, useDispatch } from "react-redux";

import { AppState } from '../reducers/rootReducer';
import { addTask, deleteTask } from '../actionCreators/actionCreators';
import ProjectDetails from '../components/ProjectDetails';

const ProjectDetailsContainer = ({currentProject, tasks}) => {
	const dispatch = useDispatch();
	const tasksArr = [...tasks];
	const tasksByProject = currentProject ? tasksArr.filter(task => task.parentProjectId === currentProject.id) : [];
	return (
		<ProjectDetails 
			currentProject={currentProject} 
			tasksList={tasksByProject} 
			addTask={(name, description, estimate)=> {dispatch(addTask(name, description, estimate, currentProject.id ))}} 
			deleteTask={(id) => {dispatch(deleteTask(id))}}
			/>
	);
};

const mapStateToProps = (state: AppState) => {
	return {
			tasks: state.tasks.tasks,
			currentProject: state.currentProject.currentProject			
		};
	};
	

export default connect(
		mapStateToProps,
		null
	)(ProjectDetailsContainer);
	

