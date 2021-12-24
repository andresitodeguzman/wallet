import { UserService } from "../../entity/user";

export const Controller = async (req: any, res: any) => {
    const { id } = req.params;
    const results = await UserService.findById(id);
    res.json({
        success: true,
        data: results || []
    });
};