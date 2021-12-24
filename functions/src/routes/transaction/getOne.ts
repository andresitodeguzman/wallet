import { TransactionService } from "../../entity/transaction";

export const Controller = async (req: any, res: any) => {
    const { id } = req.params;
    const results = await TransactionService.findById(id);
    res.json({
        success: true,
        data: results || []
    });
};