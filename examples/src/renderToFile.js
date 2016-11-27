import path from 'path';
import React from 'react';
import App from './app';
import { renderToFile } from '../../lib';
const debug = require('debug')('example');
const output = path.resolve(__dirname, './example.html');

renderToFile(output, <App bannerText="React-AMP-Template" />, App.config)
.catch(debug);