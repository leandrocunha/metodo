import React, { Component, Fragment } from 'react';
import Breadcrumb from './Breadcrumb';
import Comments from './Comments';

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    const { match } = this.props;

    fetch(
      `https://jsonplaceholder.typicode.com/posts/${match.params.id}`
    )
      .then(res => res.json())
      .then(data => this.setState({ loading: false, post: data }));
  }

  render() {
    const { match } = this.props;
    const { loading, post } = this.state;

    return (
      <section className="Post">
        {loading ? (
          <p>Carregando</p>
        ) : (
          <Fragment>
            <Breadcrumb
              items={[
                { item: 'Home', url: '/' },
                { item: `Post ${post.id}`, url: `/post/${post.id}` },
              ]}
            />
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <h2 className="Post__title">{post.title}</h2>
                  <p>{post.body}</p>
                  <Comments post={match.params.id} />
                </div>
              </div>
            </div>
          </Fragment>
        )}
      </section>
    );
  }
}
