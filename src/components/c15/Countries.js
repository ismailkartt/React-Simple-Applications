import React, { useEffect, useState } from 'react'
import data from "../../assets/data/data.json"
import Country from './Country'
import { Container, Spinner, Table } from 'react-bootstrap'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
                setCountries(data);
                setLoading(false);
        }, 2000);
        
        return () => {
            clearTimeout(timer);

        }

    }, [])
    
    const removeByCcn3 = (ccn3) => { 
        const isDelete = window.confirm("Bu datayi silmek istediginize eminmisiniz ?");

        if(isDelete){
          let newArr = countries.filter((item) => item.ccn3 !== ccn3)
          setCountries(newArr);
        }

     }

     if (loading) {
      return (
        <Container fluid className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" variant="warning" />
    </Container>
      );
  }
  


  return (
    <Container>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>No</th>
          <th>Bayrak</th>
          <th>Ulke</th>
          <th>Nufus</th>
          <th>Baskent</th>
          <th>Islem</th>
        </tr>
      </thead>
      <tbody>
       {
        countries.map((item,index)=>
            <Country key={index} index={index} {...item} removeByCcn3 = {removeByCcn3}/>
        )
       } 
      </tbody>
    </Table>
    </Container>
  )
}

export default Countries