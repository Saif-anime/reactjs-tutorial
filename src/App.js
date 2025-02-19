import React, { Component } from 'react'
import Card from './comp/Card'
import Navbar from './comp/Navbar'
import Footer from './comp/Footer'
import Sidebar from './comp/Sidebar'



export class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      hide:true
    }


    // binding 
// this.handleSidebar = this.handleSidebar.bind(this)



  }


  handleSidebar =() =>{


    if(this.state.hide){
      this.setState({hide:false});
    }else{
      this.setState({hide:true})
    }
  }




  render() {
    return (
      <>


{/* function props  */}
        <Navbar handleSidebar={this.handleSidebar}/>

        <Sidebar Hide={this.state.hide} handleSidebar={this.handleSidebar}/>


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