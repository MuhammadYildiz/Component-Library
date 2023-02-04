import React from 'react'
import { Route, Routes } from "react-router-dom"
import Navigation from "./Navigation"
import Card from "./components/Card"
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Footer from './Footer'
import App from "./App"

export default function Root() {
    return (
        <div>
            <Navigation />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/> } />
                <Route path="/card" element={<Card />} />
                <Route path="/projects" element={<Projects/> } />
            </Routes>
            <Footer>
                <Footer.Brand
                    target="_blank"
                    href="https://flowbite.com"
                    src="https://flowbite.com/docs/images/logo.svg"
                    alt="Flowbite Logo"
                    name="Flowbite"
                />
                <Footer.LinkGroup>
                    <Footer.Link href="#">
                        About
                    </Footer.Link>
                    <Footer.Link href="#">
                        Privacy Policy
                    </Footer.Link>
                    <Footer.Link href="#">
                        Licensing
                    </Footer.Link>
                    <Footer.Link href="#">
                        Contact
                    </Footer.Link>
                </Footer.LinkGroup>
            </Footer>
        </div>
    )
}
