import HomeContainer from "@/components/Home/HomeContainer";
import LandingLayout from "@/components/Layout/LandingLayout";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="container mx-auto">
        <HomeContainer />
      </div>
    </main>
  );
}

Home.getLayout = function getLayout(page) {
  return <LandingLayout>{page}</LandingLayout>;
};
