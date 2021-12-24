import { Collection, getRepository, initialize } from "fireorm";
import { firestore } from "firebase-admin";
import { isEmail } from "class-validator";

initialize(firestore());

/**
 * UserModel
 * 
 */
@Collection('user')
export class UserModel {
    id!: string;
    firstName!: string;
    lastName!: string;
    email!: string;
    isActive!: boolean;
    updatedAt!: Date;
    createdAt!: Date;
}

/**
 * UserService
 * 
 */
export const UserService = getRepository(UserModel);

/**
 * deactivateUser
 * 
 * @param id 
 * @returns 
 */
export const deactivateUser = async (id: string) => {

    const userConstruct = new UserModel();
    userConstruct.id = id;
    userConstruct.isActive = false;

    const result = await UserService.update(userConstruct);

    return result;
};

/**
 * activateUser
 * 
 * @param id 
 * @returns 
 */

export const activateUser = async (id: string) => {

    const userConstruct = new UserModel();
    userConstruct.id = id;
    userConstruct.isActive = true;

    const result = await UserService.update(userConstruct);

    return result;
};