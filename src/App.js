import React, { Component } from 'react'
import Card from './comp/Card'
import Navbar from './comp/Navbar'
import Footer from './comp/Footer'

export class App extends Component {
  render() {
    return (
      <>

        <Navbar />
        <div className='container mx-auto '>
          <div className='gap-10 grid grid-cols-4 my-10 mx-10'>

            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            

          </div>
        </div>
        <Footer />

      </>
    )
  }
}

export default App