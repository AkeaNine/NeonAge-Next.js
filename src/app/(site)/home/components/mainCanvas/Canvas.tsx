import SecondCanvas from "./components/SecondCanvas"
import ThirdCanvas from "./components/ThirdCanvas"
import Topcanvas from "./components/Topcanvas"

const Canvas = () => {
  return (
    <>
    <section className=" col-span-3">
        <div>
          <Topcanvas />
        </div>
      </section>
      <section className="hidden lg:grid grid-cols-1 grid-rows-2">
        <div>
          <SecondCanvas />
        </div>
        <div>
          <ThirdCanvas />
        </div>
      </section>
    </>
  )
}

export default Canvas