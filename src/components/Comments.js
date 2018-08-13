import React, { Component, Fragment } from 'react';
import serialize from 'form-serialize';

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    const { post } = this.props;

    fetch(
      `https://jsonplaceholder.typicode.com/posts/${post}/comments`
    )
      .then(res => res.json())
      .then(data =>
        this.setState({ loading: false, comments: data })
      );
  }

  submit(e) {
    e.preventDefault();
    const { post } = this.props;
    const formData = serialize(e.target, { hash: true });

    fetch(
      `https://jsonplaceholder.typicode.com/posts/${post}/comments`,
      {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }
    );
  }

  render() {
    const { comments, loading } = this.state;
    return (
      <section className="Comments">
        <h2 className="Comments__title">Comentários</h2>
        {loading ? (
          <p>Carregando...</p>
        ) : (
          <Fragment>
            {comments.map(({ body, email, id, name }) => (
              <div className="card Comments__comment" key={id}>
                <div className="card-body">
                  <h4>{name}</h4>
                  <p>{email}</p>
                  <p>{body}</p>
                </div>
              </div>
            ))}
            <hr />
            <form className="clearfix" onSubmit={this.submit}>
              <div className="form-group">
                <label>Nome:</label>
                <input
                  className="form-control"
                  name="name"
                  type="text"
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  className="form-control"
                  name="email"
                  type="text"
                />
              </div>
              <div className="form-group">
                <label>Comentário:</label>
                <textarea
                  className="form-control"
                  name="body"
                  rows="5"
                />
              </div>
              <button className="btn btn-primary float-right">
                Adicionar comentário
              </button>
            </form>
          </Fragment>
        )}
      </section>
    );
  }
}

export default Comments;
