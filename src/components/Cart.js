import React from "react";

function Cart({cart, removeCart})
{
	
	return(



<React.Fragment>

  <br />
  <div className="container">
      <h1 className="phead"> ___ Cart ___ </h1>
      <hr />


      <div className="row">
  

      {
        cart.map((product, idx)=>(

    
     <div className="col-md-4" key={idx}>
      <figure className="card card-product">
        <div className="img-wrap">
         <img className="figure-img img-responsive rounded" src={product.image} />
        </div>
        
        <figcaption className="info-wrap figure-caption">
           <h4 className="title"> { product.title } </h4>
           <p className="desc"> { product.desc }</p>
        </figcaption>

        <div className="bottom-wrap">
          <a  className="btn btn-warning btn-md float-right" onClick={()=>removeCart(product)} > Remove </a>
          <div className="price-wrap h5">
             <span className="price-new">{ product.price } /- only.</span>
          </div>
        </div>
      </figure>
    </div>



          )


          )
      }

   </div>
   </div>

</React.Fragment>


	);
}
export default Cart;