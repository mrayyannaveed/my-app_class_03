const Product = (props: any) =>{
    console.log(props.params.product1);
    
    return(
        <div>
            <h1 className="text-center text-[30px]">Product Details</h1>
        </div>
    )
}

export default Product;