import Link from "next/link";
import Head from 'next/head';
import "../pages/static/header.scss";
var FA = require('react-fontawesome')
import "../style.scss"
import AuthService from "../components/services/auth.service"
import { Component } from "react";


export default  class  Header extends Component {

  connecte : boolean
  currentUser = AuthService.getUser()
  constructor(props)
  {
    super(props)
 
    if(AuthService.getUser() != undefined)
    {
      this.connecte = true
    }else{
      this.connecte = false
    }
  }

  logout()
  {
  
    AuthService.logout();
    document.location.href="/login"
  }
  render() {
 
  return (
    
<header>
<Head>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"/>
  


    <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.12/default/snipcart.css" />


    <div id="snipcart" data-api-key="ZDU2Y2RlZDItODMwYS00MzUzLWI1N2UtYzk4YzU2OWE5OGVhNjM3MjQyNzkyOTkxNzk2MDMw" data-config-add-product-behavior="none">
    </div>

    <script
  type="text/javascript"
  id="snipcart"
  src="https://cdn.snipcart.com/themes/v3.0.12/default/snipcart.js"
  data-api-key="ZDU2Y2RlZDItODMwYS00MzUzLWI1N2UtYzk4YzU2OWE5OGVhNjM3MjQyNzkyOTkxNzk2MDMw">
    
  </script>
<script src="javascript/function.js"></script>

        </Head>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">

    <Link href="/">
      <img style={{width: '7%'}} src="logo.png" alt="logo" />
    </Link>


  <div className="collapse navbar-collapse ml-4">
  {this.connecte == false &&
    <ul className="navbar-nav mr-auto">
 
      <li  className="nav-item">
        <h3 className="nav-link">
        <Link href="/login" >
      <a
      style={{textDecoration: 'none'}}
          className="connexion">
     
          Connexion
        </a>
        </Link>
        </h3>
      </li >
      <li  className="nav-item">
        <h3 className="nav-link">
          <Link href={"/register"}>
      <a
           style={{textDecoration: 'none'}}
     className="inscription">
          Inscription
        </a>
        </Link>
        </h3>
      </li>
      </ul>
         }
           {this.connecte == true &&
    <ul className="navbar-nav mr-auto">
 
    <li  className="nav-item">
      <h3 className="nav-link">

    <a onClick={this.logout}
        className="deconnexion">
        Deconnexion
      </a>

      </h3>
    </li >

    </ul>
  }
    </div>

    <form className="form-inline my-2 my-lg-0">
        <div>
     
            <input  className="form-control mr-sm-2  " type="search" placeholder="Recherche" aria-label="Search" />
            <button style={{color: '#E87621', borderColor: '#E87621'}}className="btn my-2 mr-4 my-sm-0" type="submit"> <FA name="search" /></button>
           
        </div>

         <div>

        <a className= "header__summary snipcart-checkout snipcart-summary">
           <FA style={{color: '#E87621'}}name="shopping-basket" size="2x"/>
           <span style={{color: 'white'}} className="header__price snipcart-total-price"></span>
           </a>
  
           </div>
       
    </form>
    </nav>
</header>
  )
}
   
}