import React from 'react';
import { Divider, List, Typography } from 'antd';
import Task from './interfaces/Task';
import { Pages } from './todos/pages/pages';
import { store } from './store/store'
import { Provider } from 'react-redux'




const App: React.FC = () => (
  <>
  <Provider store={store}>

  <Pages/>
  </Provider>

  </>
  );


export default App;
