import Header from "../components/Header"
import ProductList from "../components/ProductList"
import { IProduct } from "../components/Product"
import Footer from "../components/Footer"
import Head from "next/head"
import Registration from "../components/auth/Registration"
import "../style.scss"

const Register = () => {
  return (
      
    <div className="app">
    
      <Header />

      <main className="main">
        <Registration />
      </main>
      <Footer />
    </div>
  )
}

export default Register