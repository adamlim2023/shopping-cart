import React, { useState } from "react";
import { useSelector } from "react-redux";
import Collapse from "components/Common/Collapse";
import IconButton from "components/Common/IconButton";
import Footer from "components/Containers/Home/Footer";
import Product from "components/Common/Product";
import Transition from "components/Common/Transition";

import LogoImage from "assets/images/logo.png";
import RecordVoiceIcon from "assets/images/icons/record-voice.svg";
import TagIcon from "assets/images/icons/tag.svg";

const Home = () => {
  const products = useSelector((state) => state.product.products);
  const tabs = [
    { id: "special", label: "Special" },
    { id: "main", label: "Main" },
    { id: "desserts", label: "Desserts" },
    { id: "beverages", label: "Beverages" },
  ];
  const [selectedTab, setSelectedTab] = useState("main");
  const getUniqueCategories = (objArray) => {
    const categories = objArray.map((item) => item.category);
    return categories.filter((key, index) => categories.indexOf(key) === index);
  };

  return (
    <Transition>
      <div className="pb-16">
        <div className="bg-[#F0F3F3] rounded-b-[10px] shadow-header">
          <div className="flex items-center justify-between px-4 pt-8 pb-5">
            <div className="flex items-center">
              <img src={LogoImage} alt="logo" />
              <span className="font-semibold text-base leading-[18px] ml-1.5">
                Sacred Earth Cafe
              </span>
            </div>
            <div>
              <IconButton size="sm" className="mr-4">
                <img src={RecordVoiceIcon} alt="Record Voice Icon" />
              </IconButton>
              <IconButton size="sm">
                <img src={TagIcon} alt="Tag Icon" />
              </IconButton>
            </div>
          </div>
          <div className="w-full overflow-x-auto">
            <ul className="flex items-center px-2">
              {tabs.map((tab) => {
                const activeTab = selectedTab === tab.id;
                return (
                  <li
                    key={tab.id}
                    className="flex-shrink-0 min-w-[72px] h-12 relative inline-flex items-center justify-center px-2 mx-1 cursor-pointer"
                    onClick={() => setSelectedTab(tab.id)}
                  >
                    <span
                      className={`font-poppins font-semibold text-sm ${activeTab ? `text-success` : `text-[#4a5662] opacity-40`
                        }`}
                    >
                      {tab.label}
                    </span>
                    {activeTab && (
                      <span className="absolute bottom-0 left-0 right-0 w-full rounded-full border border-success"></span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="py-4">
          {getUniqueCategories(products).map((category, index) => {
            return (
              <Collapse title={category} key={index}>
                <div className="px-4 pt-6">
                  {products.map(
                    (product) =>
                      product.category === category && (
                        <div key={product.id} className="mb-4 last:mb-0">
                          <Product {...product} />
                        </div>
                      )
                  )}
                </div>
              </Collapse>
            );
          })}
        </div>
        <Footer />
      </div>
    </Transition>
  );
};

export default Home;
