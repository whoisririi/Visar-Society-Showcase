import reviews1 from "./imgs/review1.png";
import reviews2 from "./imgs/review2.png";
import jah from "./imgs/jah1.jpg";

const Reviews = ({ fbicon, igicon, twticon }) => {
  return (
    <div className="relative flex flex-col lg:flex-row min-h-[80vh]">
      {/* Left content - now takes more space on desktop */}
      <div className="lg:w-3/5 px-5 lg:px-16 py-10 lg:py-16 flex flex-col justify-center">
        <p className="text-grass-green text-3xl md:text-4xl font-montagu mb-4 leading-tight">
          It's been one hell of a ride, bizarre people!
        </p>
        <p className="text-grass-green text-2xl md:text-3xl font-caveat mb-8 leading-snug">
          You've seen our artwork grow, and you've supported us every step of
          the way — you're a huge part of why we're here today.
        </p>

        {/* Reviews cards - adjusted spacing */}
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="w-full md:w-1/2 bg-white p-4 rounded-lg shadow-sm outline-dashed outline-hover-grass">
            <p className="text-grass-green font-montagu mb-2">M****no J.</p>
            <p className="text-sm text-gray-700">
              I'm over the moon hanggang ngayon. So ganda ng Kubli Set!! Sana
              makapagplace order din ako ng Alpas Set mamaya. Thank you, Team
              Visar for this collection. I'm looking forward for more
              collection. May the arts be in our favor!🌱🫀
            </p>
          </div>
          <div className="w-full md:w-1/2 bg-white p-4 rounded-lg shadow-sm outline-dashed outline-hover-grass">
            <p className="text-grass-green font-montagu mb-2">J****p S.</p>
            <p className="text-sm text-gray-700">
              Huhuuhuuhu thankyou pooo!! I love the quality and overall! 🤧
              looking forward sa next collection po! 🫶🏻
            </p>
          </div>
        </div>

        {/* Social media section - tighter layout */}
        <div className="mt-6">
          <p className="text-grass-green font-montagu text-md mb-4">
            Read more reviews in our social media platforms!
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="https://www.lazada.com.ph/shop/visar-society/?path=promotion-436140-0.htm&tab=promotion"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-grass-green text-white font-palanquin rounded-2xl text-sm tracking-wider whitespace-nowrap hover:bg-hover-grass transition-colors"
            >
              Lazada Store
            </a>

            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/visarsociety"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-grass-green hover:bg-hover-grass p-2 rounded-md transition-colors"
              >
                <img src={fbicon} alt="Facebook" className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/visar_society/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-grass-green hover:bg-hover-grass p-2 rounded-md transition-colors"
              >
                <img src={igicon} alt="Instagram" className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/visar_society"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-grass-green hover:bg-hover-grass p-2 rounded-md transition-colors"
              >
                <img src={twticon} alt="Twitter" className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right image - adjusted to take less space */}
      <div className="lg:w-2/5 lg:flex lg:items-center lg:justify-end lg:pr-8 lg:py-8">
        <img
          src={jah}
          alt="Jah"
          className="hidden lg:block w-full h-auto max-h-[80vh] object-contain object-right"
        />
      </div>
    </div>
  );
};

export default Reviews;
