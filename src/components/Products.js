import React from "react";
import { useState } from 'react';

function Product({addToCart})
{
	const [products] = useState([
     {
      title:"Realme 6 Pro ",
      desc:"This is a great mobile phone with 6GB RAM and 128GB ROM Blue color qualcomm snapdragon 720g processor",
      image:"https://d2pa5gi5n2e1an.cloudfront.net/webp/global/images/product/mobilephones/Realme_6_Pro/Realme_6_Pro_L_1.jpg",
      price:"₹ 19,000"

     },

    {
      title:"Apple Iphone 11 (Product) Red",
      desc:"This is an Red Apple Iphone with (64 Gb) Ram ",
      image:"data:image/webp;base64,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",
      price:"₹ 72,000"
      
      },
      {
        title:"Bedsure Sherpa Fleece Blanket Twin Size Grey Plush Blank",
        desc:"About this item 100% Microfiber UNIQUE DESIGN PHILOSOPHY: Bedsure Dual Sided Super Soft Blanket with Fleece Face and Plush Sherpa reverse offers you ...",
        image:"https://images-na.ssl-images-amazon.com/images/I/71THWcYwDML._AC_SX522_.jpg",
        price:"₹ 4,000"
      },
      {
        title:"Canva Shoes",
        desc:"The Best White Shoes for Men You can Ever Get",
        image:"https://static.zumiez.com/skin/frontend/delorum/default/images/nike-sb-nyjah-skate-shoes-june20-444x500.jpg",
        price:"₹ 400"
      },
      {
        title:"Asus Zenbook Pro Duo Laptop",
        desc: "ASUS ZenBook Pro Duo UX581 Intel Core i7 9th Gen 15.6 4K UHD OLED Touchscreen Laptop (32 GB RAM/1TB NVMe SSD/Windows GeForce RTX)",
        image:"https://m.media-amazon.com/images/I/91VR2ZXL9LL._AC_SS350_.jpg",
        price:"₹ 1,99,000"
      },
      {
        title:"OnePlus Nord | Pretty much everything you could ask for. - OnePlus",
        desc:"Dimensions. 157.7×74.8×8.2 mm.Weight. 182g. Corning® Gorilla® Glass. CPU. Qualcomm® Snapdragon™ 855 (Octa-core, 7nm, up to 2.84 GHz)",
        image:"https://image01.oneplus.net/ebp/202007/06/1-m00-15-d2-rb8bwl8cw2iaiexaaaolc0pu50g816_840_840.png",
        price:"₹ 32,000"
      }


    ]);



	return(
		<React.Fragment>  

    <br />
      <h1 className="phead"> ___ Products ___ </h1>

      <hr />

<div className="container">
      <div className="row">
  

      {
        products.map((product, idx)=>(

    
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
          <a  className="btn btn-primary btn-md float-right" onClick={()=>addToCart(product)}>Add to Cart</a>
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

export default Product;