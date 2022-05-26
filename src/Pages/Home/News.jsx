import React from 'react';

const News = () => {
    return (
        <div className=' md:mx-16 my-10'>
             <h1 className=' text-3xl my-5 text-center text-primary'>Latest News</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            <div className="card  bg-base-100 shadow-xl">
                <figure><img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    Cars came into global use during the 20th century
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>Cars came into global use during the 20th century, and developed economies depend on them. The year 1886 is regarded as the birth year of the car when German inventor Carl Benz patented his Benz Patent-Motorwagen.Cars became widely available in the early 20th century</p>
                    
                </div>
            </div>
            <div className="card  bg-base-100 shadow-xl">
                <figure><img src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    Cars came into global use during the 20th century
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>In justo diam, convallis sed lectus quis, facilisis sodales lorem. Quisque eget dolor lacus. Etiam malesuada porttitor purus nec aliquam. Quisque pellentesque, libero ut finibus consequat, libero metus tristique urna, et faucibus dolor </p>
                    
                </div>
            </div>
            <div className="card  bg-base-100 shadow-xl">
                <figure><img src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    2022 Genesis GV80 Pros and Cons Review: A Seriously Impressiv
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>Duis a turpis sed leo consectetur pellentesque. Donec mollis cursus est, eu porttitor arcu hendrerit ac. Suspendisse feugiat a lectus et maximus. Sed porttitor posuere dolor, ac cursus arcu laoreet vitae. Nullam in justo turpis. Mauris non magna convallis, tempor est nec, consectetur mi.</p>
                    
                </div>
            </div>
        </div>
        </div>
    );
};

export default News;