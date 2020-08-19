import React from 'react'

const SinglePostSection = ({ title, descirption }) => {
  return (
    <section id="workSingle" className="work work-single ">
      <div className="container-content">
        <div className="row">
          <div className="">
            <div className="work--title">
              <h3>{title}</h3>
            </div>
          </div>
          <div className="">
            <div
              className="work--content"
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
