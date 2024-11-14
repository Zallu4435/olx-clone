import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ({ products, search, menu }) => {
  const navigate = useNavigate();

  const handleNavigate = (data) => {
    // Navigate to the details page with the data as state
    navigate('/details', { state: { data } });
  };

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5'>
      {products
        .filter(data => 
          data.title.toLowerCase().includes(search.toLowerCase() || menu.toLowerCase())
        )
        .map((data, index) => {
          return (
            <div
              key={index}
              className='cursor-pointer'
              onClick={() => handleNavigate(data)}
            >
              <div className='border border-gray-300 p-4 rounded-lg shadow-md hover:shadow-lg'>
                <img
                  src={data.image}
                  alt={data.title}
                  className='w-full h-48 object-cover rounded-md mb-4'
                />
                <h1 className='text-xl font-semibold'>{`$${data.price}`}</h1>
                <h1 className='text-lg font-medium'>{data.title}</h1>
                <h1 className='text-sm text-gray-500'>{data.category}</h1>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Home;
