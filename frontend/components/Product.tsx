import {withRouter} from 'next/router'
import RouterProps from '../node_modules/next/router'
import axios from "axios";
import { Component } from 'react';
import React from "react"

/**
 *     <div className="product">
    <h2 className="product__title">{props.product.attributes.name}</h2>
    <p className="product__description">{props.product.description}</p>
    
    <img src={props.product.image} alt="" className="product__image"/>
    <div className="product__price-button-container">
     <div></div>
      <button 
        className="snipcart-add-item product__button"
        data-item-id={props.product.id}
        data-item-name={props.product.attributes.name}
        data-item-price={props.product.price}
        data-item-url={props.router.pathname}
        data-item-image={props.product.image}>
        Add to cart
      </button>
    </div>
  </div>

 */

export interface IProduct {
  id: string
  attributes : {
    name: string
  }

  price: number
  url: string  
  description: string,
  product : string,
  image: string
}

interface IProductProps {
  product: IProduct
  handle : any,
  listTotal : Array<any>,
  choisirMarque : boolean
}
export default class Product extends React.Component<IProductProps,IProduct> {
  
constructor(props)
{
  super(props);
}

render()
{

  return (
  <div onClick={() => this.props.handle(this.props.product.product, this.props.listTotal)} className="card" style={{width: '18rem', 
                              marginLeft: '2%'}}>
  <img className="card-img-top" src={this.props.product.image} style={{width: '75%', height: '55%'}} alt="Card image cap"></img>
    <div className="card-body">
      <h5 className="card-title">{this.props.product.attributes.name}</h5>
      <p className="card-text">{this.props.product.description}</p>
      {this.props.choisirMarque == true &&
          <button 
          className="snipcart-add-item product__button"
          data-item-id={this.props.product.id}
          data-item-name={this.props.product.attributes.name}
          data-item-price={this.props.product.price/100}
          data-item-image={this.props.product.image}>
          Ajouter au panier
        </button>
      }
  
    </div>

    <div id="modal"></div>
  </div>

 

  )
}
  
}
