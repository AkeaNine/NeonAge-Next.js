import { Button } from "@/components/ui/button";

const NewsLetterForm = () => {
  return (
    <div>
      <form>
          <div className="flex flex-col space-y-2">
            <div>
              <h1 className=" text-center text-lg md:text-xl">
                Subscribe for the Newsletter
              </h1>
              <p className="text-center text-sm md:text-base">
                Get updates about new products and offers, Stay tuned
              </p>
            </div>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-full py-2 px-4 rounded-tl-sm rounded-bl-sm text-sm bg-white text-black border-none outline-none"
              />
              <Button className=" rounded-tl-none rounded-bl-none">
                <p>Subscribe</p>
              </Button>
            </div>
          </div>
      </form>
    </div>
  );
};

export default NewsLetterForm;
