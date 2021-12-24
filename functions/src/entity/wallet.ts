import { Collection, getRepository, initialize } from "fireorm";
import { firestore } from "firebase-admin";

initialize(firestore());

@Collection('wallet')
export class WalletModel {
    id!: string;
    appId!: string;
    userId!: string;
    isActive!: string;
    balance!: number;
    updatedAt!: Date;
    createdAt!: Date;
}

export const WalletService = getRepository(WalletModel);