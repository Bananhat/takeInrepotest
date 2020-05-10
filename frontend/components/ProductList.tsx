import React, { Component, useState } from 'react'
import axios from "axios";
import config from '../config';
import Product from './Product';
import "../pages/static/productList.scss";
import AuthService from "../components/services/auth.service"
import { Router } from 'next/router';
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"

interface Prod {
products : Array<any>,
listTotal : Array<any>,
listeModal : Array<any>,
show : boolean
}
export default class ProductList extends Component<{}, Prod> {
    currentUser = AuthService.getUser()
    _isMounted = false;
   
    constructor(props ) {
        super(props);

        this.state = {
            products : [],
            listTotal : [],
            listeModal : [],
            show : false
        }
        this.handle = this.handle.bind(this)
        
    }
    showModal = () => {
        this.setState({ show: true });
      };
      hideModal = () => {
        this.setState({ show: false });
        this.setState({listeModal : []})
      };
    
     componentDidMount() 
     {
        this._isMounted = true;

        let productList;
        let productListGeneral = new Array();
        axios.get(
            'https://api.stripe.com/v1/skus', {   
                headers: {'Access-Control-Allow-Origin': true,  
                Authorization: "Bearer sk_test_XkBzjOKVgGX1xopzKdsPMO1h00W9ghZ3Gc"}
        }
        )
            .then(async response => {

                productList = response.data.data;
                
                 for(let i=0; i<productList.length; i++)
                {
                   let  element = productList[i];
                       response =  await axios.get(
                            'https://api.stripe.com/v1/products/'+element.product, {   
                                headers: {'Access-Control-Allow-Origin': true,  
                                Authorization: "Bearer sk_test_XkBzjOKVgGX1xopzKdsPMO1h00W9ghZ3Gc"}
                        }
                        );
                        if(response.data.metadata.type == "general")
                        {
                            productListGeneral.push(element)
                            
                          
                        }
                 
                }
                
                
                this.setState({
                    products: productListGeneral,
                    listTotal : productList
                });
            });
    }

    componentWillUnmount() {
        this._isMounted = false;
      }
    async handle(id, listTotal)
    {

        if(listTotal.length > 0)
        {
            
                let  response =  await axios.get(
                        'https://api.stripe.com/v1/products/'+id, {   
                            headers: {'Access-Control-Allow-Origin': true,  
                            Authorization: "Bearer sk_test_XkBzjOKVgGX1xopzKdsPMO1h00W9ghZ3Gc"}
                    }
                    );
                let type = response.data.metadata.categorieType
                    if(type != undefined)
                    {

                            let listeModal = []
                            listTotal.forEach(async element => {
                                    let rep =  await axios.get(
                                        'https://api.stripe.com/v1/products/'+element.product, {   
                                            headers: {'Access-Control-Allow-Origin': true,  
                                            Authorization: "Bearer sk_test_XkBzjOKVgGX1xopzKdsPMO1h00W9ghZ3Gc"}
                                    }
                                    );
                                if(rep.data.metadata.type == type)
                                {
                                    listeModal.push(element)
                                    this.setState ({
                                        listeModal : listeModal
                                    });
                                }
                            });
                            this.showModal()
                }
              
                    
               
          
            }
    }

    render() {
      
        return (
  
            <div className="container">
            
                {this.currentUser != undefined && 
              <p>Bonjour à toi {this.currentUser.prenom}</p> 
            }
                <div style={{marginTop: '2%', display : 'flex', flexWrap: 'wrap'}}>
              

                {this.state.products && this.state.products.map((product, index) =>
       
              <Product key={index} choisirMarque = {false} product = {product} handle = {this.handle} listTotal = {this.state.listTotal} />
                )}
                </div>
                
                <Modal show={this.state.show} onHide={this.hideModal}>
                    <Modal.Header closeButton>
                    <Modal.Title>Choisi ta marque</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <div style={{display : 'flex'}}>
                    {this.state.listeModal && this.state.listeModal.map((product, index) =>
       
                <Product key={index} choisirMarque = {true} product = {product} handle = {() => {}} listTotal = {[]} />
                      )}
                      </div>

                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.hideModal}>
                        Fermer
                    </Button>
               
                    </Modal.Footer>
                </Modal>
              
           
            </div>
        )
    }
}