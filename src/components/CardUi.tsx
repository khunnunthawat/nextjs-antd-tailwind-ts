import React from 'react';

export const CardUi = () => {
  return (
    <div className='flex flex-col pb-2 overflow-auto my-4'>
      <div
        className='relative flex flex-col items-start p-4 mt-3 bg-blue-100 rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100'
        draggable='true'
      >
        <button className='absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex'>
          <svg
            className='w-4 h-4 fill-current'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z' />
          </svg>
        </button>
        <span className='flex items-center h-6 px-3 text-xs font-semibold text-pink-500 bg-pink-100 rounded-full'>
          Khunnunthawat
        </span>
        <h4 className='mx-4 my-3 text-sm font-medium'>
          Hi, My name is Nunthawat. You can call me Eiffel. I felt very sleepy
          after developer.
        </h4>
        <div className='flex items-center w-full mt-3 text-xs font-medium text-gray-500'>
          <div className='flex items-center'>
            <svg
              className='ml-4 w-4 h-4 text-gray-500 fill-current'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                clipRule='evenodd'
              />
            </svg>
            <span className='ml-2 leading-none'>Dec 1, 1997</span>
          </div>
          <img
            className='w-12 h-12 ml-auto rounded-full'
            src='https://images.unsplash.com/profile-fb-1547572180-93a860f0a32b.jpg?auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff'
          />
        </div>
      </div>
    </div>
  );
};
