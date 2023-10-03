//import pro1 from "./assets/pro1.webp";
import banner from "./assets/web.jpg";
import logo from "./assets/bataLogo.svg";
import pro1 from './assets/159-5110.jpg';
import pro2 from './assets/159-6110.jpg';
import pro3 from './assets/159-9110.jpg';
import pro4 from './assets/559-6903.jpg';
import pro5 from './assets/559-6928.jpg';
import pro6 from './assets/559-9428.jpg';
import pro7 from './assets/851-4390.jpg';
import pro8 from './assets/851-4511.jpg';
import pro9 from './assets/851-4698.jpg';
import pro10 from './assets/851-6511.jpg';
import pro11 from './assets/851-6590.jpg';
import pro12 from './assets/851-6698.jpg';
import pro13 from './assets/871-3108.jpg';
import pro14 from './assets/871-9108.jpg';
import pro15 from './assets/872-2390.jpg';
import pro16 from './assets/872-6390.jpg';
import pro17 from './assets/872-9390.jpg';


function App() {
  const products = [
    {
      id:1,
      img:pro1
    },
    {
      id:2,
      img:pro2
    },
    {
      id:3,
      img:pro3
    },
    {
      id:4,
      img:pro4
    },
    {
      id:5,
      img:pro5
    },
    {
      id:6,
      img:pro6
    },
    {
      id:7,
      img:pro7
    },
    {
      id:8,
      img:pro8
    },
    {
      id:9,
      img:pro9
    },
    {
      id:10,
      img:pro10
    },
    {
      id:11,
      img:pro11
    },
    {
      id:12,
      img:pro12
    },
    {
      id:13,
      img:pro13
    },
    {
      id:14,
      img:pro14
    },
    {
      id:15,
      img:pro15
    },
    {
      id:16,
      img:pro16
    },
    {
      id:17,
      img:pro17
    },
  ]
  return (
    <>
      <div className="hidden xl:grid">
        <div>
          <div className="grid grid-cols-12">
            <div className="mt-4 col-start-6">
              <a href="/">
                <img src={logo} alt="Bata Logo" />
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center mt-6 mb-4">
            <img src={banner} alt="sliderImages" className="h-[95%] w-[95%]" />
          </div>
          <div className="flex flex-row ml-12 border-b border-gray-300 w-[94%]">
                <h3 className="font-bold text-xl">INDIA COLLECTION</h3>
                <h3 className="ml-1 text-xl mb-3">(17)</h3>
              </div>
          <div className="grid grid-cols-12 gap-7 relative justify-center items-center">
            {products.map((product)=>(<div className="col-span-5 ml-32 flex justify-center items-center bg-white mt-4 h-96 w-full rounded">
              <img src={product.img} alt="Sandal"/>
            </div>
            ))}
            </div>
          </div>
      </div>
    </>
  );
}

export default App;
