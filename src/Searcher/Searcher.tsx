import { useEffect, useState } from "react"

function ProductCard() {
    interface Product {
        name: string
        price: number
    }

    const initialProducts: Product[] = [
        { name: 'Papa', price: 2000 },
        { name: 'Arroz', price: 20000 },
        { name: 'Banano', price: 1000 },
        { name: 'Agua', price: 200 },
        { name: 'Leche', price: 3500 },
        { name: 'Pan', price: 1500 },
        { name: 'Huevos', price: 6000 },
        { name: 'Queso', price: 8000 },
        { name: 'Tomate', price: 2500 },
        { name: 'Cebolla', price: 1800 },
        { name: 'Manzana', price: 3000 },
        { name: 'Pollo', price: 12000 },
        { name: 'Carne', price: 25000 },
        { name: 'Pescado', price: 18000 },
        { name: 'Cereal', price: 7000 },
        { name: 'Yogur', price: 4000 },
        { name: 'Café', price: 10000 },
        { name: 'Té', price: 5000 },
        { name: 'Zanahoria', price: 2200 },
        { name: 'Pepino', price: 1500 },
    ]

    const [products, setProducts] = useState(initialProducts)

    const productItems = products.map((product, index) => (
        <li
            className="bg-white rounded p-4 text-center"
            key={index}
        >
            <p className="text-xl font-medium">{product.name}</p>
            <p className="font-normal text-base text-gray-700">${product.price}</p>
        </li>
    ))

    const [value, setValue] = useState('')

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchValue: any = e.target.value.toLowerCase()
        setValue(searchValue)

    }

    useEffect(() => {
        const filteredProducts = initialProducts.filter(product =>
            product.name.toLowerCase().includes(value)
        )
        setProducts(filteredProducts)
    }, [value])

    return (
        <div className="w-10/12 p-4 flex gap-8 flex-col justify-center items-center">
            <div>
                <input
                    onChange={handleSearch}
                    type="search"
                    name="productSearcher"
                    id="productSearcher"
                    placeholder="Search products..."
                    className="py-2 px-4 bg-white outline-none rounded"
                />
            </div>
            <ul className="w-full gap-4 flex flex-wrap justify-center items-center">
                {productItems}
            </ul>
        </div>
    )
}

export default ProductCard
