import React from 'react'
import Layout from '../Layout/Layout'
import SinglePostSection from '../SinglePostSection/SinglePostSection'
import ContentMiddleBackgroundSolid from '../ContentMiddleBackgroundSolid/ContentMiddleBackgroundSolid'

const About = () => {
  return (
    <div>
      <Layout>
        <ContentMiddleBackgroundSolid title="About" />
        <SinglePostSection
          title="About"
          descirption={`
            <div>
              <p>
              Publicly open to all nature-lovers, we are proudly the first bushwalking group established by Victorian residents of Iranian backgrounds. Affiliated by Bushwalking Victoria, Iranian Bushwalkers (IB) is a non-profit club whose main activities with insurance coverage include:
              </p>
              <ul>
                <li>- Hiking</li>
                <li>- Bushwalking</li>
                <li>- Social Activities</li>
              </ul>
              <p>
                We provide weekly day-walks across Victoria, mostly within 1.5 hours drive from Melbourne metropolitan area. Our activities are open not only to the members but to the guest walkers who would like to participate in a range of physical and social activities that IB has to offer to suit different levels of hiking experience.
                <br />
                Multi-day intra and interstate trips are also on the list. Whilst most of the walks are single-day activities held on Saturdays, we also run camping and sightseeing on weekends and public holidays. In addition, there are regular social gatherings such as celebrating cultural events and occasions and from time to time we organise push-biking, rock climbing, cave abseiling, motor-biking, and so forth. More on the socially active side, IB holds monthly book review gatherings where people can share ideas on a given book, as well as movie sessions run once a month when great number of critics and movie fans come together to delve into a cinema-focused evening. Moreover, IB proudly takes part and collaborates in multiple charity events all-year-long such as Helping Feet and BTAC Track Cleaning. Club’s activities have a strong social element to it which encourages healthy habit of physically active lifestyle and promotes diversity.
              </p>
            </div>
          `}
        />
      </Layout>
    </div>
  )
}

export default About
