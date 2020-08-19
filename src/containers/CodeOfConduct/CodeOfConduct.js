import React from 'react'
import Layout from '../Layout/Layout'
import SinglePostSection from '../SinglePostSection/SinglePostSection'
import ContentMiddleBackgroundSolid from '../ContentMiddleBackgroundSolid/ContentMiddleBackgroundSolid'

const CodeOfConduct = () => {
  return (
    <div>
      <Layout>
        <ContentMiddleBackgroundSolid title="Code Of Conduct" />
        <SinglePostSection
          title="Code Of Conduct"
          descirption={`
            <div class="td-page-content">
              <p><strong>Purpose</strong></p>
              <p>The purpose of the code is to promote an environment where members engaged in the various activities of the Bushwalking Victoria community demonstrate respect and consideration for each other at all times. This code of conduct is intended to set minimum standards of behaviour for all persons involved in the activities of Bushwalking Victoria and its affiliated member clubs including <em>Iranian Bushwalkers</em>.</p>
              <p><strong>Code of Conduct</strong></p>
              <p>Every person participating in the activities of Bushwalking Victoria and its affiliated clubs should strive to ensure:</p>
              <ul>
              <li>The inclusion of every person regardless of their age, gender or sexual orientation.</li>
              <li>The inclusion of every person regardless of their race, culture or religion.</li>
              <li>There are opportunities for people of all abilities to participate in their activities.</li>
              <li>They demonstrate respect towards each other, their respective organisations and the broader community.</li>
              <li>There is a safe and inclusive environment for all there is no violent or abusive behaviour.</li>
              <li>There is protection from sexual harassment or intimidation.</li>
              </ul>
              <p><strong>Breaches of the Code</strong></p>
              <p>The following behaviours are considered to be breaches of the Code:</p>
              <ul>
              <li>Violent or abusive behaviour towards another person.</li>
              <li>Vilification of any kind towards another person.</li>
              <li>Discrimination against another person based on their age, gender or sexual orientation.</li>
              <li>Discrimination against another person based on their race, culture, religion or any other irrelevant personal characteristic.</li>
              <li>Victimisation of another person for exercising their rights through this Code of Conduct.</li>
              <li>Failure to maintain a safe environment free from violence, abuse, discrimination, and harassment.</li>
              </ul>
            </div>
          `}
        />
      </Layout>
    </div>
  )
}

export default CodeOfConduct
