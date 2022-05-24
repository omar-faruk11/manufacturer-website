import React from 'react';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Review = ({ sreview }) => {
    const { name, picture, review, star } = sreview;
    return (
        <div>
            <div className="card  h-full rounded-md shadow-sm hover:shadow-xl  duration-500">
                <div className="card-body ">
                    <div className="avatar">
                        <div className=" w-14 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={picture} alt='' />
                        </div>
                    </div>
                    <h2 className="card-title mx-auto">{name}</h2>
                    <div className="flex justify-center">
                        <Rating
                            initialRating={star}
                            emptySymbol={<FontAwesomeIcon icon={faStar} />}
                            fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />}
                            readonly
                        ></Rating>
                    </div>
                    <p className='text-center'>{review}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;