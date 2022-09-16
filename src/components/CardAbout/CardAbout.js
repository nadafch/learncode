import Card from 'react-bootstrap/Card';
import ReactRoundedImage from "react-rounded-image";
import React from 'react';
import '../CardAbout/CardAbout.css';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

function CardAbout({image,nama,pendidikan,pengalaman,linkedin,instagram,WhatsApp}) {
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
       <div className='social-media'>
      
      <MDBBtn className='m-1' style={{ backgroundColor: '#ac2bac' }} href={instagram}>
        <MDBIcon fab icon='instagram' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#0082ca' }} href={linkedin}> 
        <MDBIcon fab icon='linkedin-in'  />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#25d366' }} href={WhatsApp}>
        <MDBIcon fab icon='whatsapp' />
      </MDBBtn>
    
       </div>
     </Card>         
      </div>	
      </div>
    );
} 

export default CardAbout;