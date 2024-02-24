import Layout from "@/layout/AuthLayout";
import Login from "@/modules/Login/Index"; 

export default function Home() {
  return <Login />;
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
