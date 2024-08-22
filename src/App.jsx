import './App.css';
import InvoiceTable from './components/InvoiceTable.jsx';
import axios from 'axios';
import { useState, useEffect } from 'react';


function App() {
  //get TEST_DATA from server
  const [invoiceData, setInvoiceData] = useState([])


  useEffect(() => {
    axios.get('/api/invoices')
      .then((res) => {
        setInvoiceData(res.data.invoices)
      })
  }, [])


  return (<InvoiceTable initialData={invoiceData} />)
}

export default App;
