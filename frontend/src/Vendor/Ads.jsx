import React from "react";
import Card from "./components/Card";
import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";
import PerformRequest from "../api/axios";
const Ads = () => {
  const [loading, setLoading] = useState(true);
  const [ads, setAds] = useState([]);
  useEffect(() => {
    PerformRequest("/api/ad/get/all", "GET").then((data) => {
      console.log(data);
      setLoading(false);
      setAds(data);
    });
  }, []);

  return (
    <div>
      <div>
        {!loading ? (
          <div>
            <h1 className="m-6 text-2xl font-extralight">Find customers</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
              {ads.map((Element, key) => {
                return (
                  <div
                    className="flex justify-center "
                    key={String(Element._id)}
                  >
                    <Card
                      key={Element._id}
                      desc={Element.desc}
                      images={Element.images}
                      category={Element.services.category}
                      expectedPrice={
                        Element.services.expectedPrice.$numberDecimal
                      }
                    />
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <HashLoader
            className="absolute mt-[50%] md:mt-[150px] mx-auto align-middle "
            color="#36d7b7"
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        )}
      </div>
    </div>
  );
};

export default Ads;
