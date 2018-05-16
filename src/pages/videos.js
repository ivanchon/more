import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'



export default class VideosPage extends React.Component {
  render() {

    return (
      <section id="contenido" className="header-push-down">

        <section id="videos">
          <div className="container py-5">
              <div className="row">
                <div className="col">
                  <h2 className="headers-h2">
                    Videos
                  </h2>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe width="100%" height="auto" src="//youtube.com/embed/ZKuUcErjS-A" allowFullScreen></iframe>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="embed-responsive embed-responsive-16by9">
                  <iframe width="640" height="360" src="//www.youtube.com/embed/uSkZKHtkEdc" frameBorder="0" allowFullScreen></iframe>
                  </div>
                </div>
              </div>
              <div className="row pt-4">
                <div className="col-12 col-md-6">
                  <div className="embed-responsive embed-responsive-16by9">
                  <iframe width="640" height="360" src="//www.youtube.com/embed/YxCNd7nknyQ" frameBorder="0" allowFullScreen></iframe>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="embed-responsive embed-responsive-16by9">
                  <iframe width="640" height="360" src="//www.youtube.com/embed/B9GiF26kAvo" frameBorder="0" allowFullScreen></iframe>
                  </div>
                </div>
              </div>
              <div className="row pt-5">
                <div className="col text-center">
                  <Link className="btn btn-ghost-primary" to="/bio">
                    Ver mas en Youtube →
                  </Link>
                </div>
              </div>
          </div>
        </section>
      </section>
    )
  }
}
