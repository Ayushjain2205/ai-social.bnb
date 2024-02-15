import React from "react";

const CreateCard = ({ name, description, imageUrl }) => {
  return (
    <div className="relative flex flex-shrink-0 flex-col items-center h-[424px] w-[240px] bg-[#fff] rounded-[8px]">
      <img className="p-[26px]" src={imageUrl} alt={name} />
      <div className="flex flex-col p-[12px] absolute bottom-[18px]">
        <p className="text-[#FF5705] text-[20px] font-[500]">{name}</p>
        <p className="text-[#FF5705] text-[12px] leading-[18px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CreateCard;
