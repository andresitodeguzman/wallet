import { Controller as GetAllController } from './getAll';
import { Controller as GetOneController } from './getOne';

export const Paths = [
    {
        path: '/',
        actions: [
            { method: 'get', controller: GetAllController }
        ]
    },
    {
        path: '/:id',
        actions: [
            { method: 'get', controller: GetOneController }
        ]
    }
];