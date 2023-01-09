import React from 'react';
import Pdf from 'react-to-pdf';
import './Post.css'
const ref = React.createRef();

const PDF = (props) => {
  return (
    <>
      <div className='Post' ref={ref}>
        <h1>{props.title}</h1>
        <p>{props.data}</p>
        <p>{props.content}</p>
      </div>
      <Pdf targetRef={ref} filename='Portofoliul-tau.pdf'>
        {({ toPdf }) => (
          <button type='button' onClick={toPdf}>
            Genereaza in format PDF
          </button>
        )}
      </Pdf>
    </>
  );
};
export default PDF;