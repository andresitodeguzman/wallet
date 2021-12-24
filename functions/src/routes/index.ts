import { Paths as GeneralPaths } from "./general";
import { Paths as TransactionPaths } from "./transaction";
import { Paths as AppPaths } from "./app";
import { Paths as UserPaths } from "./user";
import { Paths as WalletPaths } from "./wallet";

export const routes = [
    ...GeneralPaths,
    ...AppPaths.map(el => { el.path = `/app${el.path}`; return el; }),
    ...TransactionPaths.map(el => { el.path = `/transaction${el.path}`; return el; }),
    ...UserPaths.map(el => { el.path = `/user${el.path}`; return el; }),
    ...WalletPaths.map(el => { el.path = `/wallet${el.path}`; return el; })
];