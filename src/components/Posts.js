import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => this.setState({ loading: false, posts: data }));
  }

  render() {
    const { loading, posts } = this.state;
    return (
      <section className="Posts">
        <div className="container">
          <div className="row">
            {loading ? (
              <p>Carregando...</p>
            ) : (
              posts.map(post => (
                <div className="col-md-4 Posts__col" key={post.id}>
                  <div
                    className="card Posts__col__card"
                    key={post.id}
                  >
                    <div className="card-body">
                      <h2 className="card-title">
                        <Link to={`/post/${post.id}`}>
                          {post.title}
                        </Link>
                      </h2>
                      <p className="card-text">{post.body}</p>
                      <Link
                        className="btn btn-primary"
                        to={`/post/${post.id}`}
                      >
                        Saiba mais
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    );
  }
}
