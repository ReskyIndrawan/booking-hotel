import { Metadata } from "next";
import DashboardCards from "@/components/admin/dashboard-card";
import ReservationList from "@/components/admin/reservation-list";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Dashboard",
};

const DashboardPage = () => {
  return (
    <div className='max-w-screen-xl px-4 py-16 mt-20 mx-auto'>
      <h1 className='text-4xl font-bold text-gray-800'>Dashboard</h1>
      <Suspense fallback={<p>Loading Card....</p>}>
        <DashboardCards />
      </Suspense>
      <Suspense fallback={<p>Loading Reservation...</p>}>
        <ReservationList />
      </Suspense>
    </div>
  );
};

export default DashboardPage;
