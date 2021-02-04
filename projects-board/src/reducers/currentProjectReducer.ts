import { IProject } from "../components/interfaces";
import * as actions from '../actionTypes/actionTypes';

export interface CurrentProjectState {
    currentProject : IProject | null
  }
  
const initialState: CurrentProjectState = {
   currentProject: null
  };

export const currentProjectReducer = (state: CurrentProjectState = initialState, action: actions.ProjectsAction ) => {
	switch (action.type) {
		case actions.SET_CURRENT_PROJECT:
			return {
				currentProject: action.currentProject
			}
		default:
			return state;		
	}
}
