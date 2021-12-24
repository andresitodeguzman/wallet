import { WalletService } from "../../entity/wallet";

export const Controller = async (req: any, res: any) => {
    const { id } = req.params;
    const results = await WalletService.findById(id);
    res.json({
        success: true,
        data: results || []
    });
};