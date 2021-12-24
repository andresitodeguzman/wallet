import { TransactionService, TransactionModel } from "../../entity/transaction";

export const Controller = async (req: any, res: any) => {
    const { body: data } = req;

    const requiredFields = ['amount', 'uid'];
    const missingFields: Array<string> = [];

    requiredFields.forEach(el => {
        if(data && !data[el]) missingFields.push(el);
    });

    if(missingFields.length !== 0) {
        res.json({ success: false, message: `Missing fields: ${missingFields.join(', ')}` })
    } else {

        const transaction = new TransactionModel();

        transaction.amount = data.amount || 0;
        transaction.uid = data.uid || null;

        const result = await TransactionService.create(transaction);

        res.json({
            success: true,
            data: result
        });
    }

};