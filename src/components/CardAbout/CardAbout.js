import Card from "react-bootstrap/Card";
import ReactRoundedImage from "react-rounded-image";
import React from "react";
import "../CardAbout/CardAbout.css";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import About from "./About";

function CardAbout() {
  const tentang = [
    {
      image: require("../../assets/images/Nada.jpg"),
      nama: "Nada Filsa Chaitra",
      pendidikan: "S1 Teknik Informatika",
      pengalaman: "Frontend Developer Internship BALITTAS, Malang",
      linkedin: "https://www.linkedin.com/in/radema-panjaitan-a69263181/",
      instagram: "https://www.instagram.com/rademapanjaitan02_/?hl=id",
      WhatsApp: "https://wa.me/6287765425278",
    },
    {
      image: require("../../assets/images/tachul.jpg"),
      nama: "Miftachul Huda",
      pendidikan: "D3 Teknologi Hasil Pertanian",
      pengalaman: "Frontend Developer Freelancer",
      linkedin: "https://www.linkedin.com/in/radema-panjaitan-a69263181/",
      instagram: "https://www.instagram.com/rademapanjaitan02_/?hl=id",
      WhatsApp: "https://wa.me/6285258166766",
    },
    {
      image: require("../../assets/images/Radema.jpeg"),
      nama: "Radema Panjaitan",
      pendidikan: "D3 Teknologi Komputer",
      pengalaman: "Mengikuti Bootcamp Front End di Kawah Edukasi",
      linkedin: "https://www.linkedin.com/in/radema-panjaitan-a69263181/",
      instagram: "https://www.instagram.com/rademapanjaitan02_/?hl=id",
      WhatsApp: "https://wa.me/6282267041718",
    },
    {
      image: require("../../assets/images/syifa.jpg"),
      nama: "Syifa Nur Nabila ",
      pendidikan: "SMK Teknik Komputer & Jaringan",
      pengalaman: "  Mengikuti Bootcamp Front End di Kawah Edukasi",
      linkedin: "https://www.linkedin.com/in/radema-panjaitan-a69263181/",
      instagram: "https://www.instagram.com/rademapanjaitan02_/?hl=id",
      WhatsApp: "https://wa.me/6289668222474",
    },
    {
      image: require("../../assets/images/Wawan.jpg"),
      nama: "Wawan",
      pendidikan: "S1 Informatika",
      pengalaman: "Teknisi Komputer & Jaringan Di PT. Egyd Komputer",
      linkedin: "https://www.linkedin.com/in/radema-panjaitan-a69263181/",
      instagram: "https://www.instagram.com/rademapanjaitan02_/?hl=id",
      WhatsApp: "https://wa.me/6285712799954",
    },
  ];

  return (
    <React.Fragment>
      {tentang.map((value, index) => (
        <div
          className="content-card"
          data-aos="flip-left"
          data-aos-duration="500"
        >
          <Card>
            <div className="mx-auto">
              <ReactRoundedImage
                image={value.image}
                variant="top"
                imageWidth="150"
                imageHeight="150"
                roundedSize="13"
                borderRadius="70"
                overflow="hidden"
              />
            </div>

            <Card.Body className="card_body">
              <Card.Title className="nama">{value.nama}</Card.Title>
              <Card.Subtitle className="pendidikan">
                {value.pendidikan}
              </Card.Subtitle>
              <Card.Text>{value.pengalaman}</Card.Text>
            </Card.Body>
            <div className="social-media">
              <MDBBtn
                className="m-1"
                style={{ backgroundColor: "#ac2bac" }}
                href={value.instagram}
              >
                <MDBIcon fab icon="instagram" />
              </MDBBtn>

              <MDBBtn
                className="m-1"
                style={{ backgroundColor: "#0082ca" }}
                href={value.linkedin}
              >
                <MDBIcon fab icon="linkedin-in" />
              </MDBBtn>

              <MDBBtn
                className="m-1"
                style={{ backgroundColor: "#25d366" }}
                href={value.WhatsApp}
              >
                <MDBIcon fab icon="whatsapp" />
              </MDBBtn>
            </div>
          </Card>
        </div>
      ))}
    </React.Fragment>
  );
}

export default CardAbout;
