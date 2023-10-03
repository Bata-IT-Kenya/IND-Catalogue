import React from 'react'

const DesignOne = () => {
  return (
    <div>
        <div className="hidden xl:grid">
        <div className="bg-gray-100">
          <div className="grid grid-cols-12 bg-gray-100">
            <div className="mt-4 col-start-6">
              <a href="/">
                <img src={logo} alt="Bata Logo" />
              </a>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 h-screen">
          <div className="flex justify-center mt-6 mb-4">
            <img src={banner} alt="sliderImages" className="h-[95%] w-[95%]" />
          </div>
          <div className="grid grid-cols-12 mt-4 gap-7 relative justify-center items-center">
            <div className="col-span-5 bg-white mt-8 h-96 w-full rounded relative z-10 col-start-2">
              <div>
                <div className="grid grid-cols-4">
                  <div className="col-span-2 p-2">
                    <h1 className="text-red-400">ALFRED-M2</h1>
                    <h1 className="text-sm">ARTICLE NO - 872-9390</h1>
                  </div>
                  <div className="col-span-2">
                    <h1 className="font-semibold justify-end ml-40  p-2">
                      MRP - 3,299
                    </h1>
                  </div>
                </div>
                <h2 className="text-sm mt-4 p-2">Size: 6-11</h2>
                <div className="flex text-sm gap-2 p-2">
                  <h2>Color: BLUE</h2>
                  <div className="bg-black rounded-full h-3 w-3 mt-1" />
                </div>
                <p className="p-2">Features:</p>
                <ul className="gap-2 ml-8 list-disc">
                  <li>Easy to wear</li>
                  <li>Easy to wear</li>
                  <li>Easy to wear</li>
                </ul>
              </div>
              <img
                className="w-80 h-48 absolute object-cover top-40 z-10 left-64"
                src={pro1}
                alt="Test Product"
              />
            </div>
            <div className="col-span-5 bg-white mt-8 h-96 w-full rounded ml-8 relative z-10">
              <div>
                <div className="grid grid-cols-4">
                  <div className="col-span-2 p-2">
                    <h1 className="text-red-400">AARON DERBY</h1>
                    <h1 className="text-sm">ARTICLE NO - 872-9390</h1>
                  </div>
                  <div className="col-span-2">
                    <h1 className="font-semibold justify-end ml-40  p-2">
                      MRP - 3,299
                    </h1>
                  </div>
                </div>
                <h2 className="text-sm mt-4 p-2">Size: 6-11</h2>
                <div className="flex text-sm gap-2 p-2">
                  <h2>Color: BLUE	</h2>
                  <div className="bg-black rounded-full h-3 w-3 mt-1" />
                </div>
                <p className="p-2">Features:</p>
                <ul className="gap-2 ml-8 list-disc">
                  <li>Easy to wear</li>
                  <li>Easy to wear</li>
                  <li>Easy to wear</li>
                </ul>
              </div>
              <img
                className="w-80 h-48 absolute object-cover top-40 z-10 left-64"
                src={pro1}
                alt="Test Product"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DesignOne