import Header from "../components/Header"
import ProductList from "../components/ProductList"
import { IProduct } from "../components/Product"
import Footer from "../components/Footer"
import Head from "next/head"
import "../style.scss"
import { Component } from "react"
import React from "react";
import User from "../models/User.model"
import AuthService from "../components/services/auth.service"
import { Routes } from "./Routes"

interface IIndexProps {
  hasToken: boolean,
}
export default class Index extends Component<{}, IIndexProps>{
  


  render() {
  
    return (
      
      <div className="app">
        <Header  />
  
        <main className="main">
          <Routes/>
        </main>

        <Footer />
      </div>
    )
  }
  
}
