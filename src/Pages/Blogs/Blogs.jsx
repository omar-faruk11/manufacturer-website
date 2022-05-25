import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-center text-3xl  font-semibold text-primary my-7'>Blogs</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5 md:mx-28">
                <div className=' shadow-xl rounded-lg p-5'>
                    <h3 className='text-xl font-semibold'><span>#</span> How will you improve the performance of a React Application?</h3>
                    <p className='text-gray-600'>We can use binding functions in constructors to improve the performance of react application.we have to avoid inline style attributes. And We have to Avoid extra tags by using React fragmentsto improve the performance of react application.And also We have to Avoid inline function in the render method to improve the performance of react application.</p>
                </div>
                <div className=' shadow-xl rounded-lg p-5'>
                    <h3 className='text-xl font-semibold'><span>#</span> What are the different ways to manage a state in a React application?</h3>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quia exercitationem consequatur quaerat porro at modi libero possimus impedit officiis.</p>
                </div>
                <div className=' shadow-xl rounded-lg p-5'>
                    <h3 className='text-xl font-semibold'><span>#</span> How does prototypical inheritance work?</h3>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quia exercitationem consequatur quaerat porro at modi libero possimus impedit officiis.</p>
                </div>
                <div className=' shadow-xl rounded-lg p-5'>
                    <h3 className='text-xl font-semibold'><span>#</span> Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h3>
                    <p className='text-gray-600'>I don't set the state directly of react because of the followind reasons, If i set State directly it does not change this.state immediately. I will lose control of the state across all components. And if i set directly value i won't be able to change value of state. </p>
                </div>
                <div className=' shadow-xl rounded-lg p-5'>
                    <h3 className='text-xl font-semibold'><span>#</span> You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h3>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quia exercitationem consequatur quaerat porro at modi libero possimus impedit officiis.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;