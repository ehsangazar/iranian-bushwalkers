import React from 'react'
import { Link } from 'react-router-dom'

const ImageContent = ({
  title,
  description,
  linkTitle,
  linkTo,
  image,
  external,
  flip,
}) => {
  return (
    <section id="features4" className="features features-4 pt-130 bg-gray">
      <div className="container">
        <div
          className="row"
          style={{
            flexFlow: flip ? 'row-reverse' : 'row',
            flexWrap: 'wrap',
          }}
        >
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="mockup--img">
              <img src={image} alt="mockup" className="img-fluid" />
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="row">
              <div className="col-col-sm-12 col-md-12 col-lg-12">
                <div className="heading mb-60 mt-15">
                  <h2 className="heading--title">{title}</h2>
                  <p className="heading--desc">{description}</p>
                  <br />
                  {!external &&
                    <Link to={linkTo}>{linkTitle}</Link>
                  }
                  {external && 
                    <a href={linkTo} target="_blank" rel="noopener noreferrer">{linkTitle}</a>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImageContent
