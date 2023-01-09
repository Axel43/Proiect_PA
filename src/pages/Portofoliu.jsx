import React from 'react';
import Post from '../pdf-portofoliu/Post';
const Portofoliu = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>
        Bun venit la Portofoliul Elevului!{' '}
      </h1>
      <h4 style={{ textAlign: 'center' }}>
       Adauga activitatile pe care le-ai considerat interesante in Liceu :)
      </h4>
      <Post />{' '}
    </div>
  );
};
export default Portofoliu;
