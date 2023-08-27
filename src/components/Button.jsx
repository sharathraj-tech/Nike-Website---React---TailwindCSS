const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
  paddingY,
  paddingX
}) => {
  return (
    <button
      className={`group  hover:bg-white hover:text-gray-900 hover:border-coral-red border-[1px] flex justify-center items-center gap-2 ${paddingX ? `${paddingX}`:'px-7' } ${paddingY ? `${paddingY}`:'py-4'} font-montserrat text-lg leading-none ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor} border-2`
          : ` text-white bg-coral-red border-coral-red `
      } rounded-full ${fullWidth && 'w-full'}
    `}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrowRighticon"
          className="group-hover:animate-bounce ml-2 rounded-full w-5 h-5 "
        />
      )}
    </button>
  );
};

export default Button;
