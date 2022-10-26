require('file-loader?name=[name].[ext]!./index.html');
import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/App';
import './components/App.js'



const root = createRoot(document.getElementById('app'));

root.render(<App/>);