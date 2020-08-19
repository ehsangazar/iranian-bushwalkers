import React from 'react'
import Layout from '../Layout/Layout'
import ImageContent from '../ImageContent/ImageContent'
import Banner from '../Banner/Banner'
import BannerImage from './banner.jpg'
import AboutImage from './about.jpg'
import UnSeenImage from './unseen.png'
import ContentMiddleWhiteBackground from '../ContentMiddleWhiteBackground/ContentMiddleWhiteBackground'

const Home = () => {
  return (
    <div>
      <Layout>
        <Banner image={BannerImage} />
        <ImageContent
          title={'Iranian Bushwalkers'}
          description={
            'Publicly open to all nature-lovers, we are proudly the first bushwalking group established by Victorian residents of Iranian backgrounds. Affiliated by Bushwalking Victoria, Iranian Bushwalkers (IB) is a non-profit club whose main activities with insurance coverage includes Hiking, Bushwalking and Social Activities'
          }
          linkTitle={'Read More'}
          linkTo={'/about'}
          image={AboutImage}
        />
        <ContentMiddleWhiteBackground
          title={`Leave the Nature as you found it. Take nothing but memories,
          leave nothing but footprints!`}
        />
        <ImageContent
          flip
          title={'Unseen beauty'}
          description={
            'We provide weekly day-walks across Victoria, mostly within 1.5 hours drive from Melbourne metropolitan area. Our activities are open not only to the members but to the guest walkers who would like to participate in a range of physical and social activities that IB has to offer to suit different levels of hiking experience.'
          }
          linkTitle={'Our Facebook'}
          linkTo={'https://facebook.com/iranianBushwalkers'}
          image={UnSeenImage}
        />
      </Layout>
    </div>
  )
}

export default Home
