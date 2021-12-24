import { TransactionService } from "../../entity/transaction";

export const Controller = async (req: any, res: any) => {
    req;
    const results = await TransactionService.find();
    res.json({
        success: true,
        data: results || []
    });
};