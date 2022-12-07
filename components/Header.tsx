import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

type Props = {
    isCheckout: boolean
    handleClickToCheckout: () => void
}

export function Header({ isCheckout, handleClickToCheckout }: Props) {
    return (
        <>
            <div className="flex justify-between flex-row">
                {isCheckout && <h3 className="cursor-grab" onClick={handleClickToCheckout}>{"<"} voltar</h3>}
                <h1 className="text-3xl ">{isCheckout ? "Carrinho" : "Aditum Ecommerce"}</h1>
                <FontAwesomeIcon icon={faCartPlus} size="2x" className='cursor-grab hover:text-gray-300' onClick={handleClickToCheckout} />
            </div>
            <div className="border-b-2 border-gray-300 mt-2 mb-10 w-full"></div>
        </>
    )
}