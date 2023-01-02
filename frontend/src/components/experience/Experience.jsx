import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import { useEffect, useState } from "react";
import './experience.css';
import axios from 'axios'


const Experience = () => {


  const [data, setdata] = useState([]);

  useEffect(() => {
    const api = axios.create({
      baseURL: 'http://localhost:3001/api',
      withCredentials: true
  }).get('/skills')
        .then((response) => {
              console.log(response.data)
            setdata(response.data)
        })
        .catch((error) => {
             console.log(error)
        })
}, [])

  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front-end Development</h3>
          <div className="experience__content">
            {
          data.map((data)=>(
          <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>{data.frontend}</h4>
            </article>
            ))
                }
           
          </div>
        </div>
        <div className="experience__backend">
          <h3>Back-end Development</h3>
          <div className="experience__content">
          {
          data.map((data)=>(
          <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>{data.backend}</h4>
            </article>
            ))
                }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience