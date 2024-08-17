import React from 'react';
import { Card } from 'react-bootstrap';

const PersonCard = (props) => {
    return (
        <Card style={{ width: '18rem', height: '25rem' }}>
            <Card.Img 
                variant="top" 
                src={`${props.avatar}?random=${props.id}`} 
                style={{ objectFit: 'cover' }} 
                alt={`${props.userName}'s avatar`} 
            />
            <Card.Body className='d-flex flex-column justify-content-center align-items-center text-center'>
                <Card.Subtitle className='mb-1'>{props.id}</Card.Subtitle>
                <Card.Title className='mt-2'>{props.userName}</Card.Title>
                <Card.Subtitle>{props.firstName} {props.lastName}</Card.Subtitle>
                <Card.Text>{props.job}</Card.Text>     
                <Card.Text style={{ 
                    wordWrap: 'break-word', 
                    whiteSpace: 'normal', 
                    textAlign: 'center'
                }}>
                    {props.email}
                </Card.Text>     
            </Card.Body>
        </Card>
    );
};

export default PersonCard;
