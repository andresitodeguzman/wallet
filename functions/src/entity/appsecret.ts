import { Collection, getRepository, initialize } from "fireorm";
import { firestore } from "firebase-admin";
import { v4 } from "uuid";

import { AppService } from './app';

initialize(firestore());

/**
 * AppSecretModel
 * 
 */
@Collection('app-secret')
export class AppSecretModel {
    id!: string;
    appId!: string;
    secret!: string;
    expiredAt!: Date | null;
    updatedAt!: Date;
    createdAt!: Date;
}

/**
 * AppSecretService
 * 
 * 
 */
export const AppSecretService = getRepository(AppSecretModel);

/**
 * createSecret
 * 
 * opts - Config options
 */
export const createSecret = async (opts: any) => {
    const appSecretConstruct = new AppSecretModel();

    const appObject = await AppService.findById(opts.appId);

    if(!appObject) {
        return 'App not found';
    }
    
    appSecretConstruct.id = opts.appId;
    appSecretConstruct.appId = opts.appId;
    
    appSecretConstruct.secret = v4();
    appSecretConstruct.expiredAt = null;

    appSecretConstruct.createdAt = new Date();
    appSecretConstruct.updatedAt = new Date();

    const existingSecret = await AppSecretService.findById(opts.appId);
    let result;
    if(!existingSecret) {
        result = await AppSecretService.create(appSecretConstruct);
    } else {
        result = await AppSecretService.update(appSecretConstruct);
    }
    return result;
};

/**
 * verifySecret
 * 
 * @param opts 
 */
export const verifySecret = async (opts: any) => {
    const result = await AppSecretService.findById(opts.appId);
    if(!result) {
        return false;
    } else {
        if(result.secret === opts.secret) {
            return true;
        } else {
            return false;
        }
    }
};