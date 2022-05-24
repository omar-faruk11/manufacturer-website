import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faScrewdriverWrench, faDollarSign, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

const BusinessSummary = () => {
    return (
        <div className='container mx-auto my-16'>
            <h2 className='text-center text-3xl uppercase text-rose-500 my-8'>Business Summary</h2>
            <div className="stats stats-vertical w-full lg:stats-horizontal shadow">

                <div className="stat text-center ">
                    <div className="">
                        <FontAwesomeIcon className='h-10 w-10 text-primary' icon={faUserSecret} />
                    </div>
                    <div className="stat-title">we served </div>
                    <div className="stat-value">200+</div>
                    <div className="stat-desc">customers</div>

                </div>

                <div className="stat text-center">
                    <div>
                        <FontAwesomeIcon className='h-10 w-10 text-primary' icon={faDollarSign} />
                    </div>
                    <div className="stat-title"></div>
                    <div className="stat-value">120M+ </div>
                    <div className="stat-desc">Annual revenue</div>
                </div>

                <div className="stat text-center">
                    <div>
                        <FontAwesomeIcon className='h-10 w-10 text-primary' icon={faStar} />
                    </div>
                    <div className="stat-title"></div>
                    <div className="stat-value"> 23K+ </div>
                    <div className="stat-desc">Reviews</div>

                </div>

                <div className="stat text-center">
                    <div>
                        <FontAwesomeIcon className='h-10 w-10 text-primary' icon={faScrewdriverWrench} />
                    </div>
                    <div className="stat-title"></div>
                    <div className="stat-value">70+ </div>
                    <div className="stat-desc">tools</div>

                </div>

            </div>
        </div>
    );
};

export default BusinessSummary;