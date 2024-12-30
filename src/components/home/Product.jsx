import React from 'react'
import Heading from '../../common/Heading'
import Description from '../../common/Description'

const Product = () => {
  return (
    <div className='product bg-dark-blue'>
          <div className='container'>
        <div className='flex-lg-row d-flex flex-column gap-4'>
            <div className='bg-purple product-card'>
              <Heading classStyle={'product-heading'} text={'Product'} />
              <Description classStyle={'product-para pb-2'} text={'Due to the confusing nature of tax, the lack of awareness of the tax deduction system and the complicated tax refund process, we have experienced exceptional demand from the public for our service. From release in 2015, our original tax product has achieved 60x growth, bringing in over £5m revenue in 2022.'} />
              <Description classStyle={'product-para pb-2'} text={'With over 8 years of industry experience, we have listened to our clients to evolve our app into a whole-of-market product that will also meet the needs of the tax return market as well as the tax refund market. The App is packed with all the features users need to meet the requirements of the upcoming switch to Making Tax Digital.'} />
              <Description classStyle={'product-para pb-2'} text={'Once we establish the ourself in the UK, we plan to expand into other territories to take advantage of the £500 billion global market'} />
              <Description classStyle={'product-para pb-2'} text={'We have highlighted some of our key features that will be the cornerstone of our product launch in April 23.'} />
             </div>
            <div className='bg-purple product-grid-card d-flex justify-content-center align-items-center w-100'> 
            <div className='grid-box w-100'>
              <div className='grid-item-1 h-100 w-100'><img src="/assets/images/webp/grid-one.webp" alt="one" className='max-w-100 w-100 h-100'/></div>
              <div className='grid-item-2 h-100 w-100'><img src="/assets/images/webp/grid-two.webp" alt="two" className='max-w-203 w-100 h-100' /></div>
              <div className='grid-item-3 h-100 w-100'><img src="/assets/images/webp/grid-three.webp" alt="three" className='max-w-100 h-100 w-100' />
              </div>
              <div className='grid-item-4 h-100 w-100'><img src="/assets/images/webp/grid-four.webp" alt="four" className='max-w-203 w-100 h-100' /></div>
              <div className='grid-item-5 h-100 w-100'><img src="/assets/images/webp/grid-five.webp" alt="five" className='max-w-203 h-100 w-100' /></div>
              <div className='grid-item-6 h-100 w-100'><img src="/assets/images/webp/grid-six.webp" alt="six" className='max-w-100 w-100 h-100' /></div>
              <div className='grid-item-7 h-100 w-100'><img src="/assets/images/webp/grid-seven.webp" alt="seven" className='max-w-203 h-100' /></div>
              <div className='grid-item-8 h-100 w-100'><img src="/assets/images/webp/grid-eight.webp" alt="eight" className='max-w-100 w-100 h-100' /></div>
              <div className='grid-item-9 h-100 w-100'><img src="/assets/images/webp/grid-nine.webp" alt="nine" className='max-w-100 h-100 w-100' /></div>
              <div className='grid-item-10 h-100 w-100'><img src="/assets/images/webp/grid-ten.webp" alt="ten" className='max-w-203 w-100 h-100' /></div>
              <div className='grid-item-11 h-100 w-100'><img src="/assets/images/webp/grid-eleven.webp" alt="eleven" className='max-w-100 h-100 w-100' /></div>
              <div className='grid-item-12 h-100 w-100'><img src="/assets/images/webp/grid-twelve.webp" alt="twelve" className='max-w-203 w-100 h-100' /></div>
            </div>
          </div>
        </div>
              </div>
          </div>
   
  )
}

export default Product