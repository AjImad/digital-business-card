import React from "react"
import "./App.css"
import About from "./components/About"
import Info from "./components/Info"
import Interest from "./components/Interest"
import Footer from "./components/Footer"

export default function App(){
    return (
        <div className="App">
            <Info />
            <About />
            <Interest />
            <Footer />
        </div>
    )
}