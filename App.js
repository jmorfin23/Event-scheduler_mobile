import React from 'react';
import { createAppContainer } from 'react-navigation';

import Navigator from './navigators/TabNav';

const App = createAppContainer(Navigator);


export default App;
