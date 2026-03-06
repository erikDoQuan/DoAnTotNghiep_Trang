import React from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import HomePage from '@/pages/Home';
import DashboardPage from '@/pages/Dashboard/Dashboard';
import DashboardLayout from '@/components/Layout/DashboardLayout';

export const AppRouter = () => {
    const routes = useRoutes([
        {
            path: '/',
            element: <HomePage />,
        },
        {
            path: '/dashboard',
            element: (
                <DashboardLayout>
                    <DashboardPage />
                </DashboardLayout>
            ),
        },
        {
            path: '*',
            element: <Navigate to="/" replace />,
        },
    ]);

    return routes;
};
