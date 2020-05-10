import Header from "../components/Header"
import ProductList from "../components/ProductList"
import { IProduct } from "../components/Product"
import Footer from "../components/Footer"
import Head from "next/head"
import LoginComponent from "../components/auth/LoginComponent"
import "../style.scss"

const Login = () => {

      
  return (
      
    <div className="app">
    
      <Header/>

      <main className="main">
        <LoginComponent  />
      </main>
      <Footer />
    </div>
  )
}

export default Login