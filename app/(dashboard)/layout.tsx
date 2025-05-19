import { ReactNode } from 'react';

export type TProps = {
    children: ReactNode;
};

export default function DashboardLayout({ children }: TProps) {
    return <div className='bg-red-500 h-[100vh]'>{children}</div>;
}