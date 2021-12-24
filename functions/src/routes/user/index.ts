import { Controller as GetAllController } from './getAll';
import { Controller as CreateController } from './create';
import { Controller as GetOneController } from './getOne';

export const Paths = [
    {
        path: '/',
        actions: [
            { method: 'get', controller: GetAllController },
            { method: 'post', controller: CreateController }
        ]
    },
    {
        path: '/:id',
        actions: [
            { method: 'get', controller: GetOneController }
        ]
    }
];