import { Collection, getRepository, initialize } from "fireorm";
import { firestore } from "firebase-admin";

initialize(firestore());

/**
 * AppModel
 * 
 * 
 */
@Collection('app')
export class AppModel {
    id!: string;
    name!: string;
    description!: string;
    symbol!: string;
    updatedAt!: Date;
    createdAt!: Date;
}

/**
 * AppService
 * 
 * 
 */
export const AppService = getRepository(AppModel);