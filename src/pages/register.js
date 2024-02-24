import Layout from "@/layout/AuthLayout";
import Register from "@/modules/Register";

export default function Signup() {
  return <Register />;
}

Signup.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
