import { AppService } from "../../entity/app";
import { createSecret } from "../../entity/appsecret";

export const Controller = async (req: any, res: any) => {
    const { id } = req.params;
    const appObject = await AppService.findById(id);
    if(!appObject) {
        res.json({ success: false, message: 'App Not Found' });
    } else {

        const result = await createSecret({ appId: id });
        
        res.json({
            success: true,
            data: result || []
        });
    }
};