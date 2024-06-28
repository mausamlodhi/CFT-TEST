import express from 'express';
import Bootstrap from './bootstrap.js';
const app = express();
app.set('port',5000);
const bootstrap = new Bootstrap(app)