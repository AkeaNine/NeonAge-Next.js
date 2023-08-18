import Home from "./(site)/home/Home";
import Navigation from "./(site)/MainComponents/Navigation";
import MainFooter from "./(site)/MainComponents/MainFooter";
import NewsLetterForm from "./(site)/components/footer/components/NewsLetterForm";

export default async function Page() {
  
  return (
    <div className="w-full">
      <div className="w-full">
        <Navigation/>
      </div>
      <div className="w-full">
        <div className="flex justify-center">
        <section className="w-full max-w-[1399px]">
          <Home />
        </section>
        </div>
      </div>
      {/* <NewsLetterForm/> */}
      <div className="w-full">
        <MainFooter/>
      </div>
    </div>
  );
}
