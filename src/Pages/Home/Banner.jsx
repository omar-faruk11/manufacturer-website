import React from 'react';

const Banner = () => {
    return (
        <section class="hero min-h-screen" style={{ backgroundImage: "url(https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200)" }}>
            <div class="hero-overlay "></div>
            <div class="hero-content text-center text-white">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold">Best Quality Car Parts</h1>
                    <p class="mb-5">Let us help you find what you need.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </section>

    );
};

export default Banner;