/* eslint-disable @next/next/no-img-element */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { coverMoneyCentInReal } from '../helpers/coverMoneyCentInReal'

type Props = {
    name: string
    description: string
    href: string
    imageSrc: string
    imageAlt: string
    price: string
    color: string
    quantity?: number

    handleRemoveFromCart: () => void
    handleChangeQuantity: (quantity: number) => void
}

export function CheckOutCard({ name, description, imageSrc, imageAlt, price, quantity = 1, handleRemoveFromCart, handleChangeQuantity }: Props) {
    return (
        <div className="flex flex-col justify-center items-center w-full mb-5 px-52">
            <div className="p-5 border rounded-xl w-full">
                <div className="grid grid-cols-6 gap-4">
                    <div className="col-span-1">
                        <img
                            src={imageSrc}
                            alt={imageAlt}
                            className="w-28 h-28 rounded-xl"
                        />
                    </div>
                    <div className="col-span-2 flex flex-col pt-1">
                        <p className="text-xl text-gray-900">{name}</p>
                        <p className="text-sm text-gray-500 line-clamp-3">
                            {description}
                        </p>
                    </div>
                    <div className="col-span-2 flex justify-end">
                        <div className="flex flex-col items-end justify-between">
                            <div className="flex flex-row items-center">
                                <p className="text-md text-gray-500 mr-2">Quantidade:</p>
                                <input type="number" className="w-12 h-10 border border-gray-300 rounded-md text-center" value={quantity}
                                    onChange={(e) => handleChangeQuantity(Number(e.target.value))}
                                />
                            </div>
                            <div className="flex flex-row items-center">
                                <p className="text-md text-gray-500 mr-2">SubTotal:</p>
                                <p className="text-xl text-gray-900">{coverMoneyCentInReal(Number(price) * quantity)}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 flex justify-center items-center border-l-2 w-full">
                        <button className="border-red-500 border text-white rounded-md p-2 h-12 w-12 ml-3" onClick={handleRemoveFromCart}>
                            <FontAwesomeIcon icon={faTrash} size="lg" color='red' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}