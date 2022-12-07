import { useState } from "react"
import { Card } from "../components/Card"
import { CheckOutCard } from "../components/CheckOutCard"
import { Header } from "../components/Header"

/* eslint-disable @next/next/no-img-element */
const _products = [
  {
    id: 1,
    name: 'Basic Tee',
    description: "Existem muitas variações das passagens do Lorem Ipsum disponíveis, mas a maior parte sofreu alterações de alguma forma, pela injecção de humor, ou de palavras aleatórias que nem sequer parecem suficientemente credíveis. Se vai usar uma passagem do Lorem Ipsum, deve ter a certeza que não contém nada de embaraçoso escondido no meio do texto.",
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 2,
    name: 'Basic Tee',
    description: "Existem muitas variações das passagens do Lorem Ipsum disponíveis, mas a maior parte sofreu alterações de alguma forma, pela injecção de humor, ou de palavras aleatórias que nem sequer parecem suficientemente credíveis. Se vai usar uma passagem do Lorem Ipsum, deve ter a certeza que não contém nada de embaraçoso escondido no meio do texto.",
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
]

interface Product {
  id: number
  description: string
  name: string
  href: string
  imageSrc: string
  imageAlt: string
  price: string
  color: string
  quantity?: number
  isFavorite?: boolean
}

export default function Home() {
  const [isCheckout, setIsCheckout] = useState(false)
  const [products, setProducts] = useState<Product[]>(_products)
  const [cartProducts, setCartProducts] = useState<Product[]>([])

  const handleClickToCheckout = () => {
    setIsCheckout(!isCheckout)
  }

  const handleAddToCart = (product: Product) => {
    const isProductInCart = cartProducts.find((item) => item.id === product.id)

    if (isProductInCart) {
      cartProducts.forEach((item) => {
        if (item.id === product.id) {
          item.quantity = item.quantity ? item.quantity + 1 : 1
        }
      })

      setCartProducts([...cartProducts])
    } else {
      setCartProducts([...cartProducts, { ...product, quantity: 1 }])
    }

    alert('Produto adicionado ao carrinho!')
  }

  const handleRemoveFromCart = (id: number) => {
    var answer = window.confirm("Desaja remover o produto do carrinho?");

    if (!answer) {
      return
    }

    const newCartProducts = cartProducts.filter((item) => item.id !== id)

    setCartProducts(newCartProducts)
  }

  const handleFavoriteProduct = (id: number) => {
    const newProducts = products.map((product) => {
      if (product.id === id) {
        product.isFavorite = !product.isFavorite
      }

      return product
    })

    setProducts(newProducts)
  }

  const handleChangeQuantity = (id: number, quantity: number) => {
    const newCartProducts = cartProducts.map((product) => {
      if (product.id === id) {
        product.quantity = quantity
      }

      return product
    })

    setCartProducts(newCartProducts)
  }


  return (
    <div className="w-full h-full p-20">
      <Header isCheckout={isCheckout} handleClickToCheckout={handleClickToCheckout} />

      <div className="flex flex-col">
        <div className="flex flex-row flex-wrap justify-start">
          {!isCheckout ?
            products.map((product) => (
              <Card
                key={product.id}
                handleAddToCart={() => handleAddToCart(product)}
                handleFavoriteProduct={() => handleFavoriteProduct(product.id)}
                {...product}
              />
            )) :
            cartProducts.map((product) => (
              <CheckOutCard
                key={product.id}
                handleRemoveFromCart={() => handleRemoveFromCart(product.id)}
                handleChangeQuantity={(quantity) => handleChangeQuantity(product.id, quantity)}
                {...product}
              />))}
        </div>
      </div>

    </div>
  )
}
