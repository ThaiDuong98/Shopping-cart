const CartList = ({cart, hadleDeleteCart, total, onIncrease, onDecrease, countProduct}) => {

    const onDeleteCart = (item) => {
       if(hadleDeleteCart){
        hadleDeleteCart(item)
       }
    }

    const onIncreaseNumber = (item) => {
        if(onIncrease){
            onIncrease(item)
        }
    }

    const onDecreaseNmber = (item) => {
        if(onDecrease){
            onDecrease(item)
        }
    }

    return (
        <>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{float: "right"}}>
                <span>{countProduct ? `(${countProduct})` : ''}</span>  View Cart
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" role="dialog">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">      
                        <div className="modal-body">
                            <table className="table table-image">
                            <thead>
                                <tr>
                                    <th scope="col">Code</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Product</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Total</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart && cart.map(item => (
                                    <tr key={item.id}>
                                        <td scope="col">{item.id}</td>
                                        <td className="w-25">
                                            <img src={item.img} className="img-fluid img-thumbnail" alt="" />
                                        </td>
                                        <td>{item.title}</td>
                                        <td>{new Intl.NumberFormat().format(`${item.price}`)} VNĐ</td>
                                        <td className="qty">
                                            <p>
                                                <button type="button" className="btn btn-primary btn-sm" onClick={() => onDecreaseNmber(item)}>-</button>
                                                    {item.quantity}
                                                <button type="button" className="btn btn-primary btn-sm" onClick={() => onIncreaseNumber(item)}>+</button>
                                            </p>                      
                                        </td>
                                        <td>{new Intl.NumberFormat().format(`${item.quantity * item.price}`)} VNĐ</td>
                                        <td>
                                            <input type="button" className="btn btn-danger btn-sm" onClick={() => onDeleteCart(item)} value="X" />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            </table> 
                            <div className="d-flex justify-content-end">
                                <h5>Total: <span className="price text-success">{total && new Intl.NumberFormat().format(`${total}`)} VNĐ</span></h5>
                            </div>
                        </div> 
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>       
                    </div>
                    
                </div> 
            </div>
        </>
    )
}

export default CartList


