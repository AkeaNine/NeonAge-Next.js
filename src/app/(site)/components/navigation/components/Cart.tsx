import { GetCartData } from "@/hooks/user/getCartData";
// import CardSheet from "./CardSheet";
import dynamic from 'next/dynamic'

const Cart = async () => {

  const cart = await GetCartData();

  const NoSSR = dynamic(() => import('./CardSheet'), { ssr: false })

  
  return (
    <div>
      <div className="relative">
        <NoSSR/>
      </div>
    </div>
  );
}

export default Cart;
