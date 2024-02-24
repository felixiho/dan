import { LayoutProvider } from "@/context/DashboardProvider";
import Layout from "@/layout/AuthLayout";
import DashboardLayout from "@/layout/DashboardLayout";
import Login from "@/modules/Login/Index"; 
import Purchase from "@/modules/Purchase/Index";

export default function PurchaseBtc() {
  return <Purchase />;
}

PurchaseBtc.getLayout = function getLayout(page) {
  return (
    <LayoutProvider>
      {" "}
      <DashboardLayout pageTitle="Purchase Btc">{page}</DashboardLayout>{" "}
    </LayoutProvider>
  );
};
