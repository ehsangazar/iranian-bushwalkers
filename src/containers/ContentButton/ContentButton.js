import React from 'react'
import { Link } from 'react-router-dom'

const ContentButton = ({ title, description, buttonLink, buttonTitle }) => {
  return (
    <section id="cta2" className="cta cta-2 text-center-xs text-center-sm">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="heading mb-30-xs mb-30-sm">
              <h2 className="heading--title">{title}</h2>
              {description && <p className="heading--desc">{description}</p>}
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 text-right text-center-xs text-center-sm">
            <Link to={buttonLink} className="btn btn--primary mt-10">
              {buttonTitle}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContentButton
