import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faStar ,faScrewdriverWrench,faDollarSign,faUserSecret} from '@fortawesome/free-solid-svg-icons'
import React from 'react';

const BusinessSummary = () => {
    return (
        <div className='container mx-auto my-16'>
            <h2 className='text-center text-3xl uppercase text-rose-500 my-8'>Business Summary</h2>
            <div class="stats stats-vertical w-full lg:stats-horizontal shadow">

                <div class="stat text-center ">
                    
                    <div class="stat-title">we served </div>
                    <div class="stat-value">200+</div>
                    <div class="stat-desc">customers</div>
                    <div class="stat-figure text-secondary">
                        <FontAwesomeIcon className='h-10 w-10 text-pink-500' icon={faUserSecret}/>
                    </div>
                </div>

                <div class="stat text-center">
                    <div class="stat-title"></div>
                    <div class="stat-value">120M+ </div>
                    <div class="stat-desc">Annual revenue</div>
                    <div class="stat-figure text-secondary">
                        <FontAwesomeIcon className='h-10 w-10 text-pink-500' icon={faDollarSign}/>
                    </div>
                </div>

                <div class="stat text-center">
                    <div class="stat-title"></div>
                    <div class="stat-value"> 23K+ </div>
                    <div class="stat-desc">Reviews</div>
                    <div class="stat-figure text-secondary">
                        <FontAwesomeIcon className='h-10 w-10 text-pink-500' icon={faStar}/>
                    </div>
                </div>

                <div class="stat text-center">
                    <div class="stat-title"></div>
                    <div class="stat-value">70+ </div>
                    <div class="stat-desc">tools</div>
                    <div class="stat-figure text-secondary">
                        <FontAwesomeIcon className='h-10 w-10 text-pink-500' icon={faScrewdriverWrench}/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BusinessSummary;