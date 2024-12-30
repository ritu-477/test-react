import React from 'react';
import Heading from '../../common/Heading';
import Description from '../../common/Description';
import Icon from '../../utils/icons';
import { COMPETITION_DATA } from '../../utils/helper'

const Competition = () => {
  return (
    <div className="bg-dark-blue">
      <div className="container competition py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12 mb-4">
            <div className="competition-text-card">
              <Heading
                classStyle={'product-heading'}
                text={'Competition'}
              />
              <Description
                classStyle={'competition-para pb-2'}
                text={
                  'Given our best in class offering, we need to cut through by opting for penetration pricing.'
                }
              />
              <Description
                classStyle={'competition-para pb-2'}
                text={
                  'This will allow us to disrupt an established market by introducing our product and service at a lower price to entice new customers to purchase or subscribe. This strategy will help us capture the attention of this very large audience in need of a good solution.'
                }
              />
              <Description
                classStyle={'competition-para pb-2'}
                text={
                  'The current return and refund process centres around either traditional advice or software. By combining both together for an aggressively affordable fee, we think we can capture much of the demand for those people that feel competent in managing their own refunds / returns.'
                }
              />
              <Description
                classStyle={'competition-para pb-2'}
                text={
                  'As well as being the cheapest in market, our product offers everything a sole trader needs in one place, whilst pricing innovation of zero commission rather than a commission, will drive customers that are particularly price sensitive.'
                }
              />
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="table-responsive competition-card skyblue-color">
              <table className="table table-bordered text-center">
                <thead>
                  <tr className="border-primary">
                    <th></th>
                    <th className="bg-white">Rift</th>
                    <th className="bg-white">Taxscouts</th>
                    <th className="bg-white">Coconut</th>
                    <th className="cyan-color">Pie</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPETITION_DATA.map((row, index) => (
                    <tr key={index}>
                      <th className="text-white">{row.feature}</th>
                      {row.data.map((item, index) => (
                        <td key={index} className={typeof item === 'string' && item.startsWith('£') ? 'bg-white' : ''}>
                          {typeof item === 'string' && item.startsWith('£') ? (
                            item
                          ) : (
                            <Icon iconName={item} />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competition;


// import React from 'react'

// const Compition = () => {
//   return (
//     <div className="bg-color min-vh-100 d-flex align-items-center justify-content-center">
//       <div className="container">
//         <div className="row gap-3 align-items-center justify-content-center">
//           <div className="col-lg-5 px-4">
//             <h1 className="heading text-white pt-3">compition</h1>
//             <p className="first-pera text-white mb-2">
//               Given our best in class offering, we need to cut through by opting for penetration pricing.
//             </p>
//             <p className="first-pera text-white mb-2">
//               This will allow us to disrupt an established market by introducing our product and service at a lower price to entice new customers to purchase or subscribe. This strategy will help us capture the attention of this very large audience in need of a good solution.
//             </p>
//             <p className="first-pera text-white mb-2">
//               The current return and refund process centres around either traditional advice or software. By combining both together for an aggressively affordable fee, we think we can capture much of the demand for those people that feel competent in managing their own refunds / returns.
//             </p>
//             <p className="first-pera text-white mb-2 pb-5">
//               As well as being the cheapest in market, our product offers everything a sole trader needs in one place, whilst pricing innovation of zero commission rather than a commission, will drive customers that are particularly price sensitive.
//             </p>
//           </div>
//           <div className="col-lg-6 skyblue-color py-5 rounded-4 ">
//             <div className="overflow-x">
//               <table >
//                 <tr className='border-bottom border-primary border-black '>
//                   <th className='table-padding '></th>
//                   <th className='table-padding text-center table-x-padding bg-white br-top-table mx-2'>Rift</th>
//                   <th className='table-padding text-center px-4  bg-white br-top-table'>Taxscouts</th>
//                   <th className='table-padding text-center table-x-padding bg-white br-top-table'>Coconut</th>
//                   <th className='table-padding text-center table-x-padding cyan-color br-top-table'>Pie</th>
//                 </tr>
//                 <tr className='border-bottom border-primary border-black table-padding'>
//                   <th className='table-padding text-white'>  Mobile App</th>
//                   <th className='table-padding text-center table-x-padding bg-white'><Icon iconName={'crossIcon'} /></th>
//                   <th className='table-padding text-center table-x-padding bg-white'><img src="./assets/images/svg/cross.svg" alt="cross" /></th>
//                   <th className='table-padding text-center table-x-padding bg-white'><img src="./assets/images/svg/tick.svg" alt="tick" /></th>
//                   <th className='table-padding text-center table-x-padding cyan-color'><img src="./assets/images/svg/tick.svg" alt="tick" /></th>
//                 </tr>
//                 <tr className='border-bottom border-primary border-black table-padding'>
//                   <th className='table-padding text-white '>  Invoicing</th>
//                   <th className='table-padding text-center table-x-padding bg-white '><img src="./assets/images/svg/cross.svg" alt="cross" /></th>
//                   <th className='table-padding text-center table-x-padding bg-white'><img src="./assets/images/svg/cross.svg" alt="cross" /></th>
//                   <th className='table-padding text-center table-x-padding bg-white'><img src="./assets/images/svg/tick.svg" alt="tick" /></th>
//                   <th className='table-padding text-center table-x-padding cyan-color'><img src="./assets/images/svg/tick.svg" alt="tick" /></th>
//                 </tr>
//                 <tr className='border-bottom border-primary border-black table-padding'>
//                   <th className='table-padding text-white'>  Bookkeeping</th>
//                   <th className='table-padding text-center table-x-padding bg-white'><img src="./assets/images/svg/cross.svg" alt="cross" /></th>
//                   <th className='table-padding text-center table-x-padding bg-white'><img src="./assets/images/svg/cross.svg" alt="cross" /></th>
//                   <th className='table-padding text-center table-x-padding bg-white'><img src="./assets/images/svg/tick.svg" alt="tick" /></th>
//                   <th className='table-padding text-center table-x-padding cyan-color'><img src="./assets/images/svg/tick.svg" alt="tick" /></th>
//                 </tr>
//                 <tr className='border-bottom border-primary border-black table-padding'>
//                   <th className='table-padding text-white'>Accountancy support</th>
//                   <th className='table-padding text-center table-x-padding bg-white'><img src="./assets/images/svg/tick.svg" alt="tick" /></th>
//                   <th className='table-padding text-center table-x-padding bg-white'><img src="./assets/images/svg/tick.svg" alt="tick" /></th>
//                   <th className='table-padding text-center table-x-padding bg-white'><img src="./assets/images/svg/cross.svg" alt="cross" /></th>
//                   <th className='table-padding text-center table-x-padding cyan-color'><img src="./assets/images/svg/tick.svg" alt="tick" /></th>
//                 </tr>
//                 <tr className='border-bottom border-primary border-black table-padding'>
//                   <th className='table-padding text-white'>Tax Filing</th>
//                   <th className='table-padding text-center table-x-padding bg-white'><img src="./assets/images/svg/tick.svg" alt="tick" /></th>
//                   <th className='table-padding text-center table-x-padding bg-white'><img src="./assets/images/svg/tick.svg" alt="tick" /></th>
//                   <th className='table-padding text-center table-x-padding bg-white'><img src="./assets/images/svg/tick.svg" alt="tick" /></th>
//                   <th className='table-padding text-center table-x-padding cyan-color'><img src="./assets/images/svg/tick.svg" alt="tick" /></th>
//                 </tr>
//                 <tr className='  table-padding'>
//                   <th className='table-padding text-white'>Fee</th>
//                   <th className='table-padding column-data max-w-50 px-4 bg-white br-bottom-table'>Est: £300
//                     per year</th>
//                   <th className='table-padding column-data max-w-50 px-4 bg-white br-bottom-table'>£300
//                     per year</th>
//                   <th className='table-padding column-data max-w-50 px-4 bg-white br-bottom-table'>£9.00 p/m
//                     £108 per year</th>
//                   <th className='table-padding column-data max-w-90 cyan-color br-bottom-table'>£6.99 or £9.99p/m
//                     £59.99 review fee
//                     £143.87 per year</th>
//                 </tr>
//               </table>
//             </div>
//           </div>
//         </div>


//       </div>
//     </div>
//   )
// }

// export default Compition