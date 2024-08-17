import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { RingLoader } from 'react-spinners';
import CardBusiness from './CardBusiness';

const BusinessInfo = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBusinessData = async () => {       
      try {
        const resp = await fetch("https://66bc70bc24da2de7ff6a83a9.mockapi.io/products");
        const data = await resp.json();
        setData(data);
      } catch (error) {
        console.error('Error fetching business data:', error);
      } finally {
        setLoading(false);
      }
    };

    const timer = setTimeout(() => {
        getBusinessData(); // Veri çekme işlemini 2 saniye sonra başlatıyoruz
      }, 2000);

      return () => clearTimeout(timer); // Cleanup function, setTimeout'u temizler

  }, []); // [] bağımlılık dizisi, bu effect'in yalnızca bir kez çalışmasını sağlar

  if (loading) {
    return (
        <Container className='d-flex justify-content-center align-items-center vh-100'>
            <RingLoader />
        </Container>
    );
  }

  return (
    <Container className='mt-5 text-center'>
        <Row>
            {
                data.map((item)=>
                <Col key={item.id} sm={6} md={4} lg={3} xl={2}>
                    <CardBusiness {...item}/>
                </Col>)
            }
        </Row>
    </Container>
  );
};

export default BusinessInfo;
