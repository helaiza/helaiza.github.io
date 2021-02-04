import React from 'react';
import { createStore,compose } from 'redux';
import { rootReducer } from './reducers/rootReducer';
import { Provider } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import ProjectsListContainer from './containers/ProjectsListContainer';
import ProjectDetailsContainer from './containers/ProjectDetailsContainer';


declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers());


function App() {
    
    return (
        <Provider store={store}>
            <Grid container spacing={3} className="App">
                <ProjectsListContainer />
                <ProjectDetailsContainer />
            </Grid>
        </Provider>
        
    );
}

export default App;
