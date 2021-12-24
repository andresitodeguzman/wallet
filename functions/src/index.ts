import { initializeApp } from "firebase-admin";
import * as functions from "firebase-functions";
const express = require('express');

initializeApp();

const appInstance = express();
const { routes } = require('./routes');

routes.forEach((el: any) => {
    if(el.actions)
        el.actions.forEach((el2: any) => appInstance[el2.method](el.path, el2.controller))
});

appInstance.use((req: any, res: any, next: any) => {
    res
        .status(404)
        .json({
            success: 'false', 
            message: 'Unknown route'
        });
});

export const app = functions.https.onRequest(appInstance);
