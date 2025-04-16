import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Root }from "./components/root/Root"
import { About } from "./components/about/About"
import { Services }from "./components/services/Services"
import { Service }from "./components/services/Service"
import { Contact }from "./components/contact/Contact"
import { Portfolio }from "./components/portfolio/Portfolio"
import {Project } from './components/portfolio/Project'
import { Person } from './components/about/team/Person'
import './App.css';


const router = 

createBrowserRouter( createRoutesFromElements(
  <Route 
    path="/" 
    element={<Root/>}>
        <Route 
          path="about" 
          element={<About/>}/>
        <Route 
          path="about/:person" 
          element={<Person/>}/>
        <Route 
          path="services" 
          element={ <Services/>}/>
        <Route 
          path="services/:service" 
          element={<Service/> }/>
        <Route 
          path="portfolio" 
          element={<Portfolio/>}/>
        <Route 
          path="portfolio/:project" 
          element={<Project/>}/>
        <Route 
          path="contact" 
          element={<Contact/>}/>
  </Route>
))

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
