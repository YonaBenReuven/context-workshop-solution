import React from 'react';

import AppProvider from './AppProvider';
import ClassOne from './ClassOne';
import ClassTwo from './ClassTwo';
import Func from './Func';

import './App.css';

// see AppProvider.jsx for explanation about AppProvider;

const App = () => (
    <AppProvider>
        <div className="App">
            <ClassOne />
            <ClassTwo />
            <Func />
        </div>
    </AppProvider>
);

export default App;