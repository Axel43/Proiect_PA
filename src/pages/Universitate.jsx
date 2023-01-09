import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import SurveyComponent from './SurveyComponent';
// import {StylesManager, Model} from "./survey-core";
const Universitate = () => {
  // const submitSurvey = () => {
  //   return <Link to='https://www.unitbv.ro/facultati.html' />;
  // };
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>
        Bun venit la sectiunea Universitate
      </h1>
      <h4 style={{ textAlign: 'center' }}>
        Raspunde la cateva intrebari si descopera ofertele educationale ale
        Universitatii Transilvania din Brasov
      </h4>
      <SurveyComponent />
    </>
  );
};
export default Universitate;
