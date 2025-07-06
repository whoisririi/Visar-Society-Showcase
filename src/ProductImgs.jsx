const ProductImgs = ({
  img1,
  img2,
  img3,
  label1,
  label2,
  label3,
  borderCol,
  textCol,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
      {/* Product 1 */}
      <div className="flex flex-col items-center">
        <img
          src={img1}
          alt={label1}
          className={`w-44 h-44 md:w-40 md:h-40 ${borderCol} rounded-lg object-cover border-2`}
        />
        <p
          className={`${textCol} font-caveat text-base sm:text-lg md:text-xl mt-2`}
        >
          {label1}
        </p>
      </div>

      {/* Product 2 */}
      <div className="flex flex-col items-center">
        <img
          src={img2}
          alt={label2}
          className={`w-44 h-44 md:w-40 md:h-40 ${borderCol} rounded-lg object-cover border-2`}
        />
        <p
          className={`${textCol} font-caveat text-base sm:text-lg md:text-xl mt-2`}
        >
          {label2}
        </p>
      </div>

      {/* Product 3 */}
      <div className="flex flex-col items-center">
        <img
          src={img3}
          alt={label3}
          className={`w-44 h-44 md:w-40 md:h-40 ${borderCol} rounded-lg object-cover border-2`}
        />
        <p
          className={`${textCol} font-caveat text-base sm:text-lg md:text-xl mt-2`}
        >
          {label3}
        </p>
      </div>
    </div>
  );
};

export default ProductImgs;
