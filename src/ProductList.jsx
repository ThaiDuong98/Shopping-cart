import { useState } from "react";

const ProductList = ({products, handleAddProduct}) => {
    const [count, setCount] = useState(0)

    const onAddProduct = (e, product) => {
        e.preventDefault()
        if(handleAddProduct){
            handleAddProduct(product)
        }

        setCount(prev => {
            return prev + 1
        })
    }

    return (
        <>
            <div className="wrapper">
                <div className="container">
                    {count}
                    <div className="row g-1">
                        {products && products.map(product => (
                            <div className="col-md-3" key={product.id}>
                                <div className="card p-3">
                                    <div className="text-center"> <img src={product.img} width="200" alt=""/> </div>
                                    <p className="lead">{product.title}</p>
                                    <div className="product-details"> <span className="d-block">{new Intl.NumberFormat().format(`${product.price}`)} VNĐ</span>
                                        <div>
                                            <input type="submit" className="btn btn-success cart-button btn-block" onClick={e => onAddProduct(e, product)} value="Add to cart" />
                                        </div>
                                    </div>
                                </div>                          
                            </div>
                        ))}                      
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductList
