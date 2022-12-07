import { useEffect, useState } from "react"
import { Card } from "../components/Card"
import { CheckOutCard } from "../components/CheckOutCard"
import { Header } from "../components/Header"
import { fetchProducts } from "../lib/api"

/* eslint-disable @next/next/no-img-element */

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
  const [products, setProducts] = useState<Product[]>([])
  const [cartProducts, setCartProducts] = useState<Product[]>([])

  useEffect(() => {
    fetchProducts().then(({ data }) => {
      setProducts(data.products)
    })

  }, [])

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
