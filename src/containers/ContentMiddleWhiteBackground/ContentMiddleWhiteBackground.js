import React from 'react'

const ContentMiddleWhiteBackground = ({ title, subTitle, description }) => {
  return (
    <section id="features6" className="features features-6 pt-130 pb-50">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
            <div className="heading heading-1 text--center mb-80">
              {subTitle && <p className="heading--subtitle">{subTitle}</p>}
              <h2 className="heading--title">{title}</h2>
              {description && <p className="heading--desc">{description}</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContentMiddleWhiteBackground
