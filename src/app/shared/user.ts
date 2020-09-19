export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    role: UserRole;
    phone: string;
    website: string;
}

export type UserRole = 'Admin' | 'User';
