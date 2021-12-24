import { UserService, UserModel } from "../../entity/user";

export const Controller = async (req: any, res: any) => {
    const { body: data } = req;

    const requiredFields = ['firstName', 'lastName', 'email'];
    const missingFields: Array<string> = [];

    requiredFields.forEach(el => {
        if(data && !data[el]) missingFields.push(el);
    });

    if(missingFields.length !== 0) {
        res.json({ success: false, message: `Missing fields: ${missingFields.join(', ')}` })
    } else {

        const user = new UserModel();

        user.firstName = data.firstName;
        user.lastName = data.lastName;
        user.email = data.email;

        const result = await UserService.create(user);

        res.json({
            success: true,
            data: result
        });
    }

};