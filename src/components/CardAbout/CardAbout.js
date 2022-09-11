import Card from 'react-bootstrap/Card';
import ReactRoundedImage from "react-rounded-image";
import React from 'react';
import '../CardAbout/CardAbout.css';

function CardAbout({image,nama,pendidikan,pengalaman}) {
  return (
    <div>
      <div className='content'>
    <Card>
    <div className='mx-auto'>
     <ReactRoundedImage
          image={image}
          variant="top"
          imageWidth="150"
          imageHeight="150"
          roundedSize="13"
          borderRadius="70"
          overflow="hidden"
        />
       </div>
       <Card.Body className="card_body" >
         <Card.Title className='nama'>{nama}</Card.Title>
           <Card.Subtitle className='pendidikan'>
           {pendidikan}
           </Card.Subtitle>
         <Card.Text>
           {pengalaman}
         </Card.Text>
       </Card.Body>
     </Card>         
      </div>	
      </div>
    );
} 

export default CardAbout;