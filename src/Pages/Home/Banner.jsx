import React from 'react';

const Banner = () => {
    return (
        <section className="hero min-h-screen" style={{ backgroundImage: "url(https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200)" }}>
            <div className="hero-overlay "></div>
            <div className="hero-content text-center text-white">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Best Quality Car Parts</h1>
                    <p className="mb-5">Let us help you find what you need.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </section>

    );
};

export default Banner;