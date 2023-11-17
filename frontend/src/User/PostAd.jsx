import React, { useState } from "react";
import ServicesDropdown from "../components/ServicesDropdown";

const PostAd = () => {
  const [selectedService, setSelectedService] = useState("");
  const [adDescription, setAdDescription] = useState("");
  const [address, setAddress] = useState("");
  const [expiry, setExpiry] = useState("30min");
  const [file, setFile] = useState(null);

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
        pincode: "560078",
        state: "Karnataka",
        city: "Bengaluru",
        address: address,
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
    <div className="bg-base-100 w-full text-base-400 px-24 py-12">
      <h1 className="text-2xl font-bold">Post an Ad!</h1>
      <p className="pt-2">
        Are you in need of top-notch washing services? Look no further! Share
        the details of your washing needs, from residential laundry to
        specialized cleaning projects.Take the first step to a cleaner space –
        post your job today and let the experts bid for your washing project!
      </p>
      <div className="form-control">
        <div className="my-4 items-center">
          <ServicesDropdown onSelectChange={handleServiceChange} />
        </div>
        <div className="w-full">
          <textarea
            rows={20}
            placeholder="Ad description"
            value={adDescription}
            onChange={(e) => setAdDescription(e.target.value)}
            className="input border-base-400 input-accent w-full max-w-md p-4 h-52 mb-2 bg-base-100 resize-none overflow-y-hidden"
          />
        </div>
        <div>
          <input
            type="file"
            className="file-input file-input-primary text-base w-full max-w-xs bg-base-100"
            onChange={handleFileChange}
          />
          <p className="p-1">Upload a max of 3 related photos.</p>
        </div>
        <div className="w-full my-3">
          <textarea
            rows={20}
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="input border-base-400 input-accent w-full max-w-md p-4 mb-2 bg-base-100 resize-none overflow-y-hidden"
          />
          <label className="flex  items-center gap-x-2 cursor-pointer">
            <span className="label-text text-base-400 text-sm">
              Confirm the address of the service needed
            </span>
            <input
              type="checkbox"
              required
              className="checkbox checkbox-primary"
            />
          </label>
        </div>
        <div className="flex gap-x-3 items-center">
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
                    className="text-base py-2 px-4 border-base-200 border-b-2 rounded-md w-full"
                    value={d}
                  >
                    {d}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <button className="btn btn-primary mt-4" onSubmit={handlePostAd}>
          Click To Post
        </button>
      </div>
    </div>
  );
};

export default PostAd;
