
import '../App.css';
function ProductList({ product,addToCart }) {
    return (
        <div className='flex'>
            {
                product.map((productItem, productIndex) => {
                    return (
                        <div style={{ width: '25%', }}>
                            <div className='product-item'>
                                <img src={productItem.image} width="130px" height="150px" />
                                
                                <h2>{productItem.name} | {productItem.category} </h2>
                                <p>{productItem.category}</p>
                                <p> {productItem.seller} </p>
                                <p> Rs {productItem.price} /-</p>
                                <button
                                    onClick={() => addToCart(productItem)}
                                 style={{backgroundColor:"White", height:"36px", width:"120px",cursor:"pointer"}}>Add To Cart</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductList;