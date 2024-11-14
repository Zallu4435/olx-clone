import { useLocation, useNavigate } from 'react-router-dom';

const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const productData = location.state?.data;

  if (!productData) {
    return <div>Loading...</div>;
  }

  return (
    <div className='flex flex-col p-4 space-y-6'>
      {/* Large Back Arrow Button */}
      <button 
        onClick={() => navigate('/')}
        className='text-4xl text-gray-500 hover:text-gray-700 transition duration-200 mb-4 rounded-full w-[60px] h-[60px] bg-gray-100 hover:bg-gray-200 flex items-center justify-center'
      >
        &larr;
      </button>

      {/* Product Details */}
      <div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6'>
        {/* Image */}
        <img 
          src={productData.image} 
          alt={productData.title} 
          className="w-full max-w-[350px] h-auto object-cover rounded-md" 
        />

        {/* Text Details */}
        <div className="flex flex-col justify-start space-y-4 text-lg">
          <h1 className='font-bold text-2xl'>{`$${productData.price}`}</h1> {/* Added dollar sign */}
          <h1 className='mt-5'>
            <span className='font-semibold'>Category</span> : {productData.category}
          </h1>
          <h1 className='mt-5'>
            <span className='font-semibold'>Title</span> : {productData.title}
          </h1>
          <h1 className='mt-5'>
            <span className='font-semibold'>Description</span> : {productData.description}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Details;
