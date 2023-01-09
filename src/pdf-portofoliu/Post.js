import React, { Component } from 'react';
import Pdf from './Pdf';

class Post extends Component {
  state = {
    title: '',
    data: '',
    content: '',
    postSubmitted: false,
  };

  onChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value,
    });
  };

  sunmitPost = (e) => {
    if (!this.state.title || !this.state.data) {
      alert('All fields are required!');
      e.preventDefault();
    } else {
      this.setState({
        postSubmitted: true,
      });
    }
  };

  render() {
    return (
      <>
        {!this.state.postSubmitted ? (
          <div className='container'>
            <div className='jumbotron mt-3'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='well well-sm'>
                    <form className='form-horizontal' method='post'>
                      <fieldset>
                        <legend className='text-center header'>
                          Adauga Portofoliu
                        </legend>
                        <div className='form-group'>
                          <span className='col-md-1 col-md-offset-2 text-center'>
                            <i className='fa fa-user bigicon'></i>
                          </span>
                          <input
                            onChange={this.onChange('title')}
                            name='title'
                            type='text'
                            placeholder='Nume si Prenume'
                            className='form-control'
                          />
                        </div>
                        <div className='form-group'>
                          <span className='col-md-1 col-md-offset-2 text-center'>
                            <i className='fa fa-user bigicon'></i>
                          </span>
                          <input
                            onChange={this.onChange('content')}
                            name='content'
                            type='text'
                            placeholder='Data(De la -XY/XY/XYXY- la -XY/XY/XYXY-'
                            className='form-control'
                          />
                        </div>
                        <div className='form-group'>
                          <span className='col-md-1 col-md-offset-2 text-center'>
                            <i className='fa fa-pencil-square-o bigicon'></i>
                          </span>
                          <textarea
                            onChange={this.onChange('data')}
                            className='form-control'
                            name='data'
                            placeholder='Adauga Activitati'
                            rows='7'
                          ></textarea>
                        </div>
                        <div className='form-group'>
                          <button
                            type='button'
                            onClick={this.sunmitPost}
                            className='btn btn-primary btn-lg'
                          >
                            Submit
                          </button>
                        </div>
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Pdf
            title={this.state.title}
            data={this.state.data}
            content={this.state.content}
          />
        )}
      </>
    );
  }
}

export default Post;
