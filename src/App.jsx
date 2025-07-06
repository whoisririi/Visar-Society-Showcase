import Header from "./Header";
import Opener from "./Opener";
import ProductHeaders from "./ProductHeaders";
import ProductImgs from "./ProductImgs";
import Reviews from "./Reviews";

//imgs for sets
import notebookAlpas from "./imgs/notebook.jpg";
import toteAlpas from "./imgs/tote-bag.jpg";
import stickerAlpas from "./imgs/sticker.jpg";
import threeGreen from "./imgs/tshirt1.jpg";
import threeRed from "./imgs/tshirt2.jpg";
import threeBlue from "./imgs/tshirt3.jpg";
import pebol1 from "./imgs/pebol1.jpg";
import pebol2 from "./imgs/pebol2.jpg";
import pebol3 from "./imgs/pebol3.jpg";
import royal1 from "./imgs/royalfam1.jpg";
import royal2 from "./imgs/royalfam2.jpg";
import royal3 from "./imgs/royalfam3.jpg";

//reviews photos
import fb from "./imgs/fbicon.png";
import ig from "./imgs/igicon.png";
import twt from "./imgs/twticon.png";
const App = () => {
  return (
    <div className="overflow-x-hidden">
      {/* wrapper */}

      <div>
        <Header />
        <Opener />

        {/* Product Set 1 */}
        <div className="w-full bg-white items-center justify-center">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-12 px-6">
            <div>
              <ProductHeaders
                setName="Alpas Set"
                desc="Art is always rooting for you"
                textCol="text-grass-green"
                btnBg="bg-grass-green"
                btnText="text-white"
                hoverCol="hover:bg-hover-grass"
              />
            </div>
            <div>
              <ProductImgs
                img1={notebookAlpas}
                img2={toteAlpas}
                img3={stickerAlpas}
                label1="Notebook"
                label2="Tote Bag"
                label3="Sticker"
                borderCol="border-grass-green"
                textCol="text-grass-green"
              />
            </div>
          </div>
        </div>

        {/* Product Set 2 */}
        <div className="w-full bg-grass-green">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-12 px-6">
            <div>
              <ProductHeaders
                setName="3for3"
                desc="You're a huge part of why we're here today."
                textCol="text-white"
                btnBg="bg-white"
                btnText="text-grass-green"
                hoverCol="hover:bg-hover-gray"
              />
            </div>
            <div>
              <ProductImgs
                img1={threeGreen}
                img2={threeRed}
                img3={threeBlue}
                label1="Notebook"
                label2="Tote Bag"
                label3="Sticker"
                borderCol="border-white"
                textCol="text-white"
              />
            </div>
          </div>
        </div>
        {/* Product Set 3 */}
        <div className="w-full bg-white items-center justify-center">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-12 px-6">
            <div>
              <ProductHeaders
                setName="Pebol and Friends"
                desc="It’s an ART you can bring anywhere!"
                textCol="text-grass-green"
                btnBg="bg-grass-green"
                btnText="text-white"
                hoverCol="hover:bg-hover-grass"
              />
            </div>
            <div>
              <ProductImgs
                img1={pebol1}
                img2={pebol2}
                img3={pebol3}
                label1="Bucket Hat"
                label2="Circle Sling Bag"
                label3="Enamel Pin"
                borderCol="border-grass-green"
                textCol="text-grass-green"
              />
            </div>
          </div>
        </div>
        {/* Product Set 4 */}
        <div className="w-full bg-grass-green">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-12 px-6">
            <div>
              <ProductHeaders
                setName="Royal Family"
                desc="A Visar Society x Quiversmiths collaboration."
                textCol="text-white"
                btnBg="bg-white"
                btnText="text-grass-green"
                hoverCol="hover:bg-hover-gray"
              />
            </div>
            <div>
              <ProductImgs
                img1={royal1}
                img2={royal2}
                img3={royal3}
                label1="Stickers"
                label2="Tote Bag"
                label3="Thank You Card"
                borderCol="border-white"
                textCol="text-white"
              />
            </div>
          </div>
        </div>

        <Reviews fbicon={fb} igicon={twt} twticon={ig} />
      </div>
    </div>
  );
};

export default App;
