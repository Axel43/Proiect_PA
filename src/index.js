import React from 'react';
import ReactDOM from 'react-dom';
import TopHeader from './components/TopHeader';
import SlideShow from './components/SlideShow';
import Content from './components/Content';
class App extends React.Component {
  render() {
    return (
      <>
        <TopHeader />
        <SlideShow />
        <Content />
      </>
    );
  }
}
ReactDOM.render(<App />, document.querySelector('#root'));
