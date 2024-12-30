import React from 'react'
import Heading from '../../common/Heading'
import Description from '../../common/Description'

const Competition = () => {
  return (
    <div className='bg-dark-blue'>
      <div className='container competition'>
        <div className='flex-lg-row flex-column d-flex align-items-center gap-78'>
          <div className='competition-text-card'>
            <Heading classStyle={'product-heading'} text={'Competition'} />
            <Description classStyle={'competition-para pb-2'} text={'Given our best in class offering, we need to cut through by opting for penetration pricing.'} />
            <Description classStyle={'competition-para pb-2'} text={'This will allow us to disrupt an established market by introducing our product and service at a lower price to entice new customers to purchase or subscribe. This strategy will help us capture the attention of this very large audience in need of a good solution.'} />
            <Description classStyle={'competition-para pb-2'} text={'The current return and refund process centres around either traditional advice or software. By combining both together for an aggressively affordable fee, we think we can capture much of the demand for those people that feel competent in managing their own refunds / returns.'} />
            <Description classStyle={'competition-para pb-2'} text={'As well as being the cheapest in market, our product offers everything a sole trader needs in one place, whilst pricing innovation of zero commission rather than a commission, will drive customers that are particularly price sensitive.'} />
          </div>
          <div className='competition-card'>
              
          </div>
        </div>
          </div>
    </div>
  )
}

export default Competition