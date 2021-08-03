import * as React from "react";
import './App.css';
import NavBar from './Components/NavBar';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import MainHearder from './Components/MainHearder';
import Update from './Components/Update';
import About from './Components/About';
import CoronaSymptom from './Components/CoronaSymptom';
import { fetchdata, fetchCounrty, fetchcountrydata } from "./API/index"
import Prevention from './Components/Prevention';
import Countrywise from "./Components/Countrywise";
import Chart from "chart.js/auto";
class App extends React.Component {
  state={
    data:{}
  }
  async componentDidMount(){
    const getdata = await fetchdata();
    this.setState({data:getdata}) 
    console.log(getdata)


    const getbycountry = await fetchcountrydata();
    this.setState({country:getbycountry}) 
  }
  render(){
      const {data} =this.state
    return (
      <div className="App">
        <header className="">
          <div>
          <NavBar/>
          <MainHearder/>
          <Update data={data}/>
          <Countrywise/>
          <About/>
          <CoronaSymptom/>
          <Prevention/>
          </div>
        </header>
        <footer className=' bg-dark py-3'>
          <div className="footer_style text-white text-center container-fluid">
          CopyRights &copy; by Irfanshah Software Devleopment 
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
