import React, { Component } from "react";
import ReactDisqusComments from "react-disqus-comments";
import urljoin from "url-join";

class Disqus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toasts: []
    };
    this.notifyAboutComment = this.notifyAboutComment.bind(this);
    this.onSnackbarDismiss = this.onSnackbarDismiss.bind(this);
  }

  onSnackbarDismiss() {
    const [, ...toasts] = this.state.toasts;
    this.setState({ toasts });
  }
  notifyAboutComment() {
    const toasts = this.state.toasts.slice();
    toasts.push({ text: "New comment available!" });
    this.setState({ toasts });
  }
  render() {
    const { postNode } = this.props;
    if (!"carlamorrison") {
      return null;
    }
    const post = postNode.frontmatter;
    const url = urljoin(
      siteUrl,
      postNode.fields.slug
    );
    return (
      <ReactDisqusComments
        shortname={"carlamorrison"}
        identifier={post.title}
        title={post.title}
        url={url}
        category_id={post.category_id}
        onNewComment={this.notifyAboutComment}
      />
    );
  }
}

export default Disqus;