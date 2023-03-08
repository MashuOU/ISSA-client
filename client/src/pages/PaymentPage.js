import { useDispatch } from "react-redux";
import { snap } from "../store/actions/actionCreator";



export default function PaymentPage() {
  
  const dispatch = useDispatch()
  
  return (
    <div className=" pl-4 pt-16 border-black">
      
      <h5 class="text-xl mb-6 font-semibold tracking-tight mt-10 text-gray-900 dark:text-white"> Pembayaran  </h5>

      <button onClick={() => dispatch(snap())}  >Pay</button>
      
    </div>
  );
}
