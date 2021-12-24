import { Controller as GetAllController } from './getAll';
import { Controller as GetOneController } from './getOne';
import { Controller as GenerateSecretController } from './generateSecret';

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
    },
    {
        path: '/:id/secret/generate',
        actions: [
            { method: 'get', controller: GenerateSecretController }
        ]
    }
];