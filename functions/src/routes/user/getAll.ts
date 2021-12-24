import { UserService } from "../../entity/user";

export const Controller = async (req: any, res: any) => {
    req;
    const results = await UserService.find();
    res.json({
        success: true,
        data: results || []
    });
};