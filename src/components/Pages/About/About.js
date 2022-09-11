import CardAbout from "../../CardAbout/CardAbout";
import data from "../../CardAbout/dataCard";
import NavBar from "../../NavBar"
import './About.css';

function About() {
  
  return (

    <div className="container">
      <div>
        <NavBar />
      </div>
      <div>
        <h1 className="judul">GROUP MEMBER</h1>
      </div>
      <div className="content">
      {data.map(d =>(
      <CardAbout 
      image={d.image}
      nama={d.nama}
      pendidikan={d.pendidikan}
      pengalaman ={d.pengalaman}
      />
     ))} 
      </div>
    </div>

    
  );
}

export default About;
