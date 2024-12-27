import React from 'react';

const Personal = () => {
  const personalData = [
    { label: 'Name', value: 'John Doe' },
    { label: 'Email', value: 'john.doe@example.com' },
    { label: 'Phone', value: '+1 123 456 7890' },
    // Add more data as needed
  ];

  const renderData = () => {
    return personalData.map((item, index) => (
      <div key={index} className="flex flex-row justify-between py-2 items-center w-full border-b border-dashed border-[#E6E6E6]">
        <h1 className="text-xl font-light">{item.label}:</h1>
        <p className="text-xl text-[#888888]">{item.value}</p>
      </div>
    ));
  };

  return (
    <div className="w-full flex flex-col justify-normal items-start gap-10 px-10 py-6 bg-white rounded-2xl">
      <h1 className="text-3xl font-light">Personal Information</h1>
      <div className="flex flex-row w-full justify-around items-start gap-10 text-lg">
        <div className="flex flex-col w-[40%] max-md:w-full justify-center items-center gap-10">
          {renderData()}
        </div>
        <div className="flex flex-col w-[40%] max-md:w-full justify-center items-center gap-10">
          {renderData()}
        </div>
      </div>
      <div className="flex flex-row w-full justify-between items-center text-lg">
        <button className="px-10 py-1 bg-red-600 text-white rounded-xl">
          Upload Cv
        </button>
        <button className="px-8 py-2 bg-green-600 text-white rounded-xl">
          Edit
        </button>
      </div>
    </div>
  );
};

export default Personal;