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
                text={'Competition'} />
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
                  {COMPETITION_DATA.map((obj, index) => (
                    <tr key={index}>
                      <th className="text-white">{obj.title}</th>
                      {obj.data.map((item, index) => (
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
