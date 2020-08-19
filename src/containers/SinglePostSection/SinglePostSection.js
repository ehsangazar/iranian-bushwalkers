import React from 'react'

const SinglePostSection = ({ title, descirption }) => {
  return (
    <section id="workSingle" class="work work-single ">
      <div class="container-content">
        <div class="row">
          <div class="">
            <div class="work--title">
              <h3>{title}</h3>
            </div>
          </div>
          <div class="">
            <div
              class="work--content"
              dangerouslySetInnerHTML={{
                __html: descirption,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SinglePostSection
