let Product=()=>{
    var type="Mobiles"
    var product={
        pname:"Iphone11",
        pid:101,
        price:100000,
        colours:["red","green","black"],
        image:'data:image/jpeg;base64,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'
}
return <div>
    <h1>Produts</h1>
    <h2>{type}</h2>
    <div className="container">
    <div className="row">
    <div className="col-4">
    <div className="card">
        <div className="card-header bg-black">
    <img src={product.image} alt=""/>
    </div>
    <div className="card-body">
        <div className="form-group">
    <h2>{product.pid}</h2>
    <h2>{product.pname}</h2>
    <h2>{product.price}</h2>
    </div>
    </div>
    </div>
    </div><div className="col-4">
    <div className="card">
        <div className="card-header bg-black">
    <img src={product.image} alt=""/>
    </div>
    <div className="card-body">
        <div className="form-group">
    <h2>{product.pid}</h2>
    <h2>{product.pname}</h2>
    <h2>{product.price}</h2>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
</div>
}
export default Product;