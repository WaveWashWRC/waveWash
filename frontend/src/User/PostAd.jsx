import React, { useState } from "react";
import ServicesDropdown from "../components/ServicesDropdown";

const PostAd = () => {
  const [selectedService, setSelectedService] = useState("");
  const [adDescription, setAdDescription] = useState("");
  const [expiry, setExpiry] = useState("30min");
  const [file, setFile] = useState(null);
  const [pincode, setPincode] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");

  const duration = ["0.5", "1", "2", "4", "6", "12"];

  const handleServiceChange = (selectedValue) => {
    setSelectedService(selectedValue);
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (file.length >= 3) {
      console.log("Exceeded maximum file limit (3 files allowed).");
      return;
    }

    setFile((prevFiles) => [...prevFiles, selectedFile]);
  };

  const handlePostAd = async () => {
    const adData = {
      desc: adDescription,
      services: {
        category: selectedService,
        expectedPrice: "500.0",
      },
      location: {
        pincode,
        state,
        city,
        address,
        landmark: "Hotel Dwarka Grand",
      },
    };

    try {
      const response = await fetch("http://localhost:8000/api/ad/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionToken}`,
        },
        body: JSON.stringify(adData),
      });

      if (!response.ok) {
        console.error(
          "Failed to post ad:",
          response.status,
          response.statusText
        );
      } else {
        console.log("Ad posted successfully", response);
      }
    } catch (error) {
      console.error("Error posting ad", error);
    }
  };

  return (
    <div className="bg-base-100 text-base-400 px-4 py-6 sm:px-7 sm:py-10 md:px-24 md:py-12">
      <h1 className="text-xl md:text-2xl font-bold">Post an Ad!</h1>
      <p className="text-sm md:text-base tracking-wider py-2 md:pt-2">
        Are you in need of top-notch washing services? Look no further! Share
        the details of your washing needs, from residential laundry to
        specialized cleaning projects.Take the first step to a cleaner space –
        post your job today and let the experts bid for your washing project!
      </p>
      <div className="form-control">
        <div className="my-2 md:my-4 items-center">
          <ServicesDropdown onSelectChange={handleServiceChange} />
        </div>
        <div className="w-full my-2">
          <textarea
            rows={20}
            placeholder="Ad description"
            value={adDescription}
            onChange={(e) => setAdDescription(e.target.value)}
            className="input text-xs md:text-base border-base-400 input-accent w-full max-w-md p-4 h-20 md:h-52 bg-base-100 resize-none overflow-y-hidden"
          />
        </div>
        <div>
          <input
            type="file"
            className="file-input file-input-sm md:file-input-md file-input-primary text-sm md:text-base w-full max-w-xs bg-base-100"
            onChange={handleFileChange}
          />
          <p className="text-xs md:text-base p-1">
            Upload a max of 3 related photos.
          </p>
        </div>
        <div className="w-full my-3">
          <div className="flex flex-col text-sm md:text-lg">
            <label
              htmlFor="address"
              className="text-sm md:text-base text-base-400 mb-1 md:mb-2"
            >
              Address
            </label>
            <textarea
              id="address"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              className="input border-base-400 input-accent w-full max-w-md p-4 h-20 md:h-32 bg-base-100 resize-none overflow-y-hidden"
            />
          </div>
          <div className="grid grid-cols-3 gap-3 mb-2 max-w-md ">
            <div className="flex flex-col items-left justify-between pt-2 text-lg">
              <label
                htmlFor="pincode"
                className="text-sm md:text-base text-base-400 mb-1 md:mb-2"
              >
                Pincode
              </label>
              <input
                type="number"
                id="pincode"
                onChange={(e) => setPincode(e.target.value)}
                value={pincode}
                className="input border-base-400 input-accent h-7 md:w-full bg-base-100 rounded-md md:text-base text-sm p-2 md:py-2 md:px-3"
              />
            </div>
            <div className="flex flex-col items-left justify-between pt-2 text-lg">
              <label
                htmlFor="state"
                className="text-sm md:text-base text-base-400 mb-1 md:mb-2"
              >
                State
              </label>
              <input
                type="text"
                id="state"
                onChange={(e) => setState(e.target.value)}
                value={state}
                className="input border-base-400 input-accent h-7 md:w-full bg-base-100 rounded-md md:text-base text-sm p-2 md:py-2 md:px-3"
              />
            </div>
            <div className="flex flex-col items-left justify-between pt-2 text-lg">
              <label
                htmlFor="city"
                className="text-sm md:text-base text-base-400 mb-1 md:mb-2"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                onChange={(e) => setCity(e.target.value)}
                value={city}
                className="input border-base-400 input-accent h-7 md:w-full bg-base-100 rounded-md md:text-base text-sm p-2 md:py-2 md:px-3"
              />
            </div>
          </div>
          <label className="flex  items-center gap-x-2 cursor-pointer">
            <span className="label-text text-base-400 text-xs md:text-sm">
              Confirm the address of the service needed
            </span>
            <input
              type="checkbox"
              required
              className="checkbox checkbox-primary w-5 h-5"
            />
          </label>
        </div>
        <div className="flex gap-x-3 items-center text-sm md:text-base my-2">
          <p>Your ad will expire in (hours)</p>
          <div className="form-control">
            <div className="input-group flex space-x-4">
              <select
                className="select select-bordered border-base-400 bg-base-100 md:w-20"
                onChange={(e) => setExpiry(e.target.value)}
                value={expiry}
              >
                {duration.map((d) => (
                  <option
                    key={d}
                    className="text-sm md:text-base md:py-2 md:px-4 border-base-200 border-b-2 rounded-md w-full"
                    value={d}
                  >
                    {d}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <button
          className="btn btn-sm md:btn-md btn-primary mt-4"
          onSubmit={handlePostAd}
        >
          Click To Post
        </button>
      </div>
    </div>
  );
};

export default PostAd;
