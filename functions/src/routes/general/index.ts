import { Controller as HomeController } from './home';

export const Paths = [
    {   path: '/',
        actions: [
            { method: 'get', controller: HomeController }
        ]
    }
];