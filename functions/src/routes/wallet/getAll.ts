import { WalletService } from "../../entity/wallet";

export const Controller = async (req: any, res: any) => {
    req;
    const results = await WalletService.find();
    res.json({
        success: true,
        data: results || []
    });
};