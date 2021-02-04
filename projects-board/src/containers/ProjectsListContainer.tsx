import React from 'react';
import { connect, useDispatch } from "react-redux";

import { AppState } from '../reducers/rootReducer';
import { addProject, setCurrentProject } from '../actionCreators/actionCreators';
import ProjectsList from '../components/ProjectsList';


const ProjectsListContainer = ({projects}) => {
    const dispatch = useDispatch()
    return <ProjectsList 
			projectsList={projects} 
			toggleProject={(item)=>{dispatch(setCurrentProject(item))}} 
			addProject={(name) => {dispatch(addProject(name))}} />;
};


const mapStateToProps = (state: AppState) => {
    return {
      projects: state.projects.projects
    };
  };


export default connect(
    mapStateToProps,
    null
  )(ProjectsListContainer);
  