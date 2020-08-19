import React from 'react'

const ContentMiddleWhiteBackground = ({ title, subTitle, description }) => {
  return (
    <section id="features6" class="features features-6 pt-130 pb-50">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
            <div class="heading heading-1 text--center mb-80">
              {subTitle && <p class="heading--subtitle">{subTitle}</p>}
              <h2 class="heading--title">{title}</h2>
              {description && <p class="heading--desc">{description}</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContentMiddleWhiteBackground
