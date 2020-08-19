import React from 'react'

const ContactSection = () => {
  return (
    <section id="contact4" class="contact contact-1 contact-4 text-center">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-8 offset-lg-2">
            <div class="contact--panel">
              <div class="heading heading-1">
                <p class="heading--subtitle">Let’s Work Together</p>
                <h2 class="heading--title">Get In Touch</h2>
              </div>
              <div class="contact--body">
                <form
                  method="post"
                  action="assets/php/contact.php"
                  class="contactForm mb-0"
                  novalidate="novalidate"
                >
                  <div class="row">
                    <div class="col-sm-6 col-md-6 col-lg-6">
                      <input
                        type="text"
                        name="contact-name"
                        class="form-control"
                        placeholder="Name:"
                        required=""
                        aria-required="true"
                      />
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-6">
                      <input
                        type="text"
                        name="contact-email"
                        class="form-control"
                        placeholder="Email:"
                        required=""
                        aria-required="true"
                      />
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-12">
                      <textarea
                        name="contact-message"
                        class="form-control"
                        cols="30"
                        rows="10"
                        placeholder="Request Details:"
                        required=""
                        aria-required="true"
                      ></textarea>
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-12">
                      <input
                        type="submit"
                        value="Submit Request"
                        class="btn btn--primary"
                      />
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-12">
                      <div class="contact-result"></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
