import { AppService } from "../../entity/app";

export const Controller = async (req: any, res: any) => {
    req;
    const results = await AppService.find();
    res.json({
        success: true,
        data: results || []
    });
};