import dotenv from 'dotenv';
dotenv.config();
// eslint-disable-next-line import/no-extraneous-dependencies
import 'reflect-metadata';

import app from './app';

app.run();
