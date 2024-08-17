import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { RingLoader } from 'react-spinners'
import PersonCard from './PersonCard'

const PersonInfo = () => {
    const [person, setPerson] = useState([])
    const [loading, setLoading] = useState(true)

    const getPersonData = async() => {
        try {
            const response = await axios.get("https://66bc70bc24da2de7ff6a83a9.mockapi.io/products")
            const data = response.data;
            setPerson(data)
        } catch (error) {
            console.log(error)
        }finally{
          setLoading(false)
        }
    }

    useEffect(() => {
      const timer = setTimeout(() => {
        getPersonData();
      }, 2000);
    
      return () => {
        clearTimeout(timer);
      }
    }, [])
    
    
    if(loading){
      return (
        <Container className='d-flex justify-content-center align-items-center vh-100'>
         <RingLoader /> 
      </Container>
      )
    }

  return (
    <Container className='mt-4 mb-4 text-center'>
        <Row className='g-5'>
          {
            person.map((item) => 
              <Col key={item.id}>
                <PersonCard {...item}/>
              </Col>
            )
          }
        </Row>

    </Container>
  )
}

export default PersonInfo