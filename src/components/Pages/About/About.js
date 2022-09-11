import React from "react";
import CardAbout from "../../CardAbout/CardAbout";
import data from "../../CardAbout/dataCard";
import './About.css';

function About() {
  
  return (
    <React.Fragment>
      <div className="content">
          <h1 className="judul">GROUP MEMBER</h1>
        <div className="Card">
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
    </React.Fragment>
  );
}

export default About;
