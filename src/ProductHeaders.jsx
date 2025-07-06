const ProductHeaders = ({
  setName,
  desc,
  textCol,
  btnText,
  btnBg,
  hoverCol,
}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Top row: Set name and button side by side */}

      <p className={`${textCol} font-montagu items-center text-4xl`}>
        {setName}
      </p>

      <button
        className={`${btnBg} ${btnText} text-sm font-palanquin px-5 py-1 rounded-full ${hoverCol} mt-1`}
      >
        Pre-Order
      </button>

      <p className={`${textCol} font-caveat text-lg mt-2`}>{desc}</p>
    </div>
  );
};

export default ProductHeaders;
