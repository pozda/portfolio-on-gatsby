import React from 'react'
import { HeaderComponent } from '../ui/components/'
import images from '../utils/images'
import '../ui/styles/Main.scss'

const NotFoundPage = () => (
  <>
    <HeaderComponent image={images.lostImg} nonav={true}>
      <div className="section__404">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 125 40">
          <path fill="white" d="M59 1c-7 0-13 5-13 13v13c0 7 6 13 13 13zm8 0v39c7 0 13-6 13-13V14c0-8-6-13-13-13zm43.08398.023438l.0297 25.999215c.008 6.999996 5.97031 13.000785 12.97031 13.000785v-39zm-21 0L89 14c-.04531 6.999854 5.08398 13.023438 13.08398 13.023438v-26zM21.99999 1l.0297 25.99921C22.037686 33.99921 28 40 35 40V1zm-21 0L.91601 13.9766C.8707 20.97645 5.99999 27.00004 13.99999 27.00004v-26z"/>
        </svg>
      </div>
    </HeaderComponent>
    <div className={'container'}>
      <blockquote>
        We don't make mistakes just happy little accidents!<br />
        <small>- Bob Ross</small>
      </blockquote>
      <h1>
        Maybe you were searching for one of theese:
      </h1>

      {/* list of blog posts  */}
    </div>
  </>
  
)

export default NotFoundPage
