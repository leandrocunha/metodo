import React, { Component } from 'react';
import serialize from 'form-serialize';
import Breadcrumb from './Breadcrumb';

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit(e) {
    e.preventDefault();
    const { history } = this.props;
    const formData = serialize(e.target, { hash: true });

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(() => history.push('/'));
  }
  render() {
    return (
      <section>
        <Breadcrumb
          items={[
            { item: 'Home', url: '/' },
            { item: 'Novo Post', url: '/novo-post' },
          ]}
        />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form onSubmit={this.submit}>
                <div className="form-group">
                  <label>Título:</label>
                  <input className="form-control" name="name" />
                </div>
                <div className="form-group">
                  <label>Autor:</label>
                  <select className="form-control" name="authorId">
                    <option value="1">Fulano</option>
                    <option value="2">Ciclano</option>
                    <option value="3">Beltrano</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Post:</label>
                  <textarea
                    className="form-control"
                    name="body"
                    rows="5"
                  />
                </div>
                <button className="btn btn-primary float-right">
                  Adicionar
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default NewPost;
