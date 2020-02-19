import express from 'express';
import morgan from 'morgan';
import indexRoutes from './routes/index'
import path from 'path';
var cors = require('cors')

const app = express();

// settings
app.set('port', process.env.PORT || 3001);

//middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//routes
app.use('/api', indexRoutes);

//carpeta para imagenes
app.use('/uploads', express.static(path.resolve('uploads')));
app.use('/uploads2', express.static(path.resolve('uploads2')));

export default app; 
