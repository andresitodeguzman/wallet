import { Collection, getRepository, initialize } from "fireorm";
import { firestore } from "firebase-admin";

initialize(firestore());

@Collection('transaction')
export class TransactionModel {
    id!: string;
    appId!: string;
    uid!: string;
    walletId!: string;
    amount!: number;
    title!: string;
    description!: string;
    updatedAt!: Date;
    createdAt!: Date;
}

export const TransactionService = getRepository(TransactionModel);