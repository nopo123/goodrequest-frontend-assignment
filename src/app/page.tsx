import { redirect } from "next/navigation";

import { AppRoute } from "@/routes/routes";

const Home = () => {
  redirect(AppRoute.DONATION);
};

export default Home;
