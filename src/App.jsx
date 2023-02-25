import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import AboutUs from "./components/AboutUs"
import TheArtist from "./components/TheArtist"

function App() {
	//import.meta.[varName]
	return (
		<div className="App">
			<Navbar />
			<Header />
			<AboutUs />
			<TheArtist />
		</div>
	)
}

export default App
