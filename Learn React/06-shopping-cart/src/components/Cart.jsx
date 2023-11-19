import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons";

export function Cart() {
    const cartCheckboxId = useId()
    return (
        <>
            <label className='cart-button' htmlFor={cartCheckboxId}>
                <CartIcon/>
            </label>
            <input id={cartCheckboxId} type='checkbox' hidden />

            <aside className='cart'>
                <ul>
                    <li>
                        <img 
                            src="https://i.dummyjson.com/data/products/2/thumbnail.jpg" 
                            alt="Iphone" 
                        />
                        <div>
                            <stronger>Iphone</stronger> - $1499
                        </div>
                    </li>

                    <footer>
                        <small>
                            Qty: 1
                        </small>
                        <button>+</button>
                    </footer>
                </ul>

                <button>
                    <ClearCartIcon/>
                </button>
            </aside>
        </>
    )
}