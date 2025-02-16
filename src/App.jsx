import './App.css'
import { useEffect } from 'react'
import { useState } from 'react'
import { getAllCompanies } from './services/companies'
import {CompanyCardContainer} from './components/CompanyCardContainer'
import {Loading} from 'react-loading-wrapper'

function App() {
    const [companies, setCompanies] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
      const fetchCompanies = async () => {
        try {
          const data = await getAllCompanies
          setCompanies(data)
        }catch(error) {
          setError(error.message)
        } finally {
          setLoading(false)
        }
      }
      fetchCompanies();
    }, [])

    return (

      <> 
        <Loading
          loading={loading}
          // Optional props
          color='orange'
          backgroundColor='blue'
          fullPage
          size={100}
          speed='fast'
          // Use your own component, or the 'threeDots' component for the loading screen (default is spinner).
          loadingComponent='threeDots'
        >
        <CompanyCardContainer companies={companies}/>   
        </Loading> 
      </>
    )
    //initial GET 
    //page loads 
    // request data 
    // add loading wrapper while data is being retireved 
    // render UI once data is retireved or display error page
    // display UI and data on page 

    //POST 

    // page is already loaded 
    // user enters a new company 
    // user clicks submit 
    // form is submitted 
    // POST  
    // json server is updated 
    // UI updates to create a new company card for the user
    

    //DELETE

    // company is selected 
    // button is clicked to execute event 
    // delete is called 
    // item is delted from json server 
    // message is displayed in the DOM to indicate that the card was deleted
}

export default App