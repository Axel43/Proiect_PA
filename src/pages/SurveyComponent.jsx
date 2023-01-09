import React from 'react';
import { StylesManager, Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import 'survey-core/defaultV2.min.css';
// import './index.css';
import { json } from './json';
StylesManager.applyTheme('defaultV2');
function SurveyComponent(props) {
  console.log(props);
  const survey = new Model(json);
//   survey.onComplete = function(survey) {
//   //save my data on the server
//   window.location.href = "http://stackoverflow.com";
// }
  return (
    <>
      <Survey model={survey} >
      </Survey>
    </>
  );
}
export default SurveyComponent;
