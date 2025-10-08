import React from 'react';

export const metadata = {
  title: 'Dashboard - 0xguidev',
  description: 'Dashboard page',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="dashboard-layout p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      {children}
    </section>
  );
}
