import MainFooter from "./(site)/MainComponents/MainFooter";
import Navigation from "./(site)/MainComponents/Navigation";
import Home from "./(site)/home/Home";

export default async function Page() {
  return (
    <div className="w-full min-h-[100vh] flex flex-col justify-between">
      <div className="w-full">
        <Navigation />
      </div>
      <div className="w-full">
        <div className="flex justify-center">
          <section className="w-full max-w-[1399px]">
            <Home />
          </section>
        </div>
      </div>
      <div className="w-full">
        <MainFooter />
      </div>
    </div>
  );
}
