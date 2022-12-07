/* eslint-disable @next/next/no-img-element */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

type Props = {
    name: string
    href: string
    imageSrc: string
    imageAlt: string
    price: string
    color: string
    isFavorite?: boolean

    handleAddToCart: () => void
    handleFavoriteProduct: () => void
}

export function Card({ name, href, imageSrc, imageAlt, price, color, isFavorite, handleAddToCart, handleFavoriteProduct }: Props) {
    return (
        <div className="p-5 border-2 mr-10 rounded-md mt-5">
            <div className="group relative">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                    <img
                        src={imageSrc}
                        alt={imageAlt}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                </div>
                <div className="mt-4 flex justify-between">
                    <div>
                        <h4 className="text-sm text-gray-700">
                            <a href={href}>
                                <span aria-hidden="true" className="absolute" />
                                {name}
                            </a>
                        </h4>
                        <p className="mt-1 text-sm text-gray-500">{color}</p>
                        <p className="mt-3 text-lg font-medium text-gray-900">{price}</p>
                    </div>
                    <div className="flex flex-col justify-between">
                        <div className="flex justify-end align-baseline">
                            <button
                                type="button"
                                className="flex-shrink-0 bg-white text-gray-400 hover:text-gray-500"
                                onClick={handleFavoriteProduct}
                            >
                                <FontAwesomeIcon icon={faHeart} size="lg" color={isFavorite ? 'red' : 'gray'} />
                            </button>
                        </div>

                        <div>

                            <button
                                type="button"
                                className="w-34 px-2 ml-4 flex-shrink-0 bg-green-500 p-2 border rounded-xl text-gray-100 hover:text-gray-300 hover:bg-green-7 text-sm text-center"
                                onClick={handleAddToCart}
                            >Adicionar ao carrinho</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}