import React from 'react'

import BannerOne from '../banners/BannerOne'
import BannerTwo from '../banners/BannerTwo'


function Banner(props) {
  switch (props && props.bannerType) {
    case 'BannerOne':
      return <BannerOne {...props} />;
    case 'BannerTwo':
      return <BannerTwo {...props} />;
    default:
      return <BannerTwo {...props} />;
  }
}

export default Banner
