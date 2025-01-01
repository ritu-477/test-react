import React from 'react'
import { COMPETITION_LIST } from '../../utils/helper'
import Heading from '../../common/Heading';
import Description from '../../common/Description';

const Competition = () => {
  return (
    <div className='d-flex competition justify-content-center align-items-center bg-dark-blue'>
      <div className='container row row-gap-4 justify-content-between'>
        <div className='col-lg-6 col-12 d-flex justify-content-center flex-column'>
          <Heading
            classStyle={'product-heading'} text={'Competition'} />
          <Description
           classStyle={'competition-para pb-2'}
           text={
                      'Given our best in class offering, we need to cut through by opting for penetration pricing.'
               }/>
                 <Description
                     classStyle={'competition-para pb-2'}
                     text={
                          'This will allow us to disrupt an established market by introducing our product and service at a lower price to entice new customers to purchase or subscribe. This strategy will help us capture the attention of this very large audience in need of a good solution.'
                       }/>
                   <Description
                       classStyle={'competition-para pb-2'}
                         text={
                          'The current return and refund process centres around either traditional advice or software. By combining both together for an aggressively affordable fee, we think we can capture much of the demand for those people that feel competent in managing their own refunds / returns.'
                    } />
                   <Description
                   classStyle={'competition-para'}
                  text={
                  'As well as being the cheapest in market, our product offers everything a sole trader needs in one place, whilst pricing innovation of zero commission rather than a commission, will drive customers that are particularly price sensitive.'
          }
                 />
        </div>
        <div className="col-12 col-lg-6 table-bg d-flex border-radius-xl align-items-center justify-content-center sm-py-xl overflow-hidden">
          <div className="d-flex align-items-center justify-content-center w-100">
            <div className="table-responsive">
              <table className="custom-table-bg py-5">
                <thead>
                  <tr>
                    <th></th>
                    <th className="radius-top fw-semibold ff-avantt-semibold text-center bg-white table-heading text-black">Rift</th>
                    <th className="radius-top fw-semibold ff-avantt-semibold text-center bg-white table-heading text-black">Taxscout</th>
                    <th className="radius-top fw-semibold ff-avantt-semibold text-center bg-white table-heading text-black">Coconut</th>
                    <th className="radius-top fw-semibold ff-avantt-semibold text-center bg-dark-aqua table-heading text-black">Pie</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPETITION_LIST.map((item, i) => (
                    <tr key={i}>
                      <td className={`text-white fw-normal ff-avantt-normal Competition-td bg-transparent border-b-none ${i === 3 ? 'max-w-sm px-2' : 'px-2'}`}>{item.brand}</td>
                      <td className={`bg-white Competition-td ff-avantt-normal border-b-none text-center fee-heading ${i === 5 ? 'radius-bottom ' : ''} `}>{item.rift}</td>
                      <td className={`bg-white Competition-td ff-avantt-normal border-b-none text-center fee-heading ${i === 5 ? 'radius-bottom ' : ''} `}>{item.taxscout}</td>
                      <td className={`bg-white Competition-td ff-avantt-normal border-b-none text-center fee-heading ${i === 5 ? 'radius-bottom ' : ''}`}>{item.coconut}</td>
                      <td className={`bg-dark-aqua Competition-td ff-avantt-normal border-b-none text-center fee-heading ${i === 5 ? 'radius-bottom px-1' : ''}`}>{item.pie}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Competition
