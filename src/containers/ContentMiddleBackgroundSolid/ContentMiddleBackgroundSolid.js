import React from 'react'
import { Link } from 'react-router-dom'

const ContentMiddleBackgroundSolid = ({
  title,
  subTitle,
  buttonLink,
  buttonTitle,
}) => {
  return (
    <section
      id="cta1"
      className="cta cta-1 text-center bg-overlay bg-overlay-theme bg-section"
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-8 offset-lg-2">
            <div className="heading heading-2 mb-40">
              {subTitle && (
                <p className="heading--subtitle color-white">{subTitle}</p>
              )}
              <h2 className="heading--title color-white">{title}</h2>
            </div>
            {buttonLink && (
              <Link to={buttonLink} className="btn btn--white btn--inverse">
                {buttonTitle}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContentMiddleBackgroundSolid
