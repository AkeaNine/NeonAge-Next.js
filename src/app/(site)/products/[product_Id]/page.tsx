import MainFooter from "../../MainComponents/MainFooter"
import Navigation from "../../MainComponents/Navigation"
import Product from "./components/Product"

interface PageProps {
  params: {
    id: any
  }
}

const page: React.FC<PageProps> = ({params}) => {
  return (
    <div className="w-full min-h-[100vh] flex flex-col justify-between">
      <div className="w-full">
        <Navigation />
      </div>
      <div className="w-full">
        <div className="flex justify-center">
          <section className="w-full max-w-[1399px]">
            <Product />
          </section>
        </div>
      </div>
      <div className="w-full">
        <MainFooter />
      </div>
    </div>
  )
}

export default page