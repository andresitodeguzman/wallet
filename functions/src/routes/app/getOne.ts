import { AppService } from "../../entity/app";

export const Controller = async (req: any, res: any) => {
    const { id } = req.params;
    const results = await AppService.findById(id);
    res.json({
        success: true,
        data: results || []
    });
};