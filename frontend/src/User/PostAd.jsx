import React, { useState } from "react";
import ServicesDropdown from "./components/ServicesDropdown";
import uploadMultimedia from '../api/axios/multimedia'
import authContext from "../context/AuthContext";
import { useContext } from "react";
import def from '../assets/defaultimg.png'
import bin from '../assets/bin.png'
import ImageUploading from "react-images-uploading";
import PerformRequest from "../api/axios";
import AdDetails from "../Vendor/AdDetails";
function addHours(date, hours) {
  date.setTime(date.getTime() + hours * 60 * 60 * 1000);

  return date;
}

const PostAd = () => {
  const maxNumber = 3;
  const currentUser = useContext(authContext);
  console.log(currentUser);
  const [images, setImages] = useState([])
  const [selectedService, setSelectedService] = useState("");
  const [adDescription, setAdDescription] = useState("");
  const [expiry, setExpiry] = useState("30min");
  const [file, setFile] = useState(null);
  const [pincode, setPincode] = useState(currentUser.location.pincode);
  const [state, setState] = useState(currentUser.location.state);
  const [price, setPrice] = useState();
  const [city, setCity] = useState(currentUser.location.city);
  const [address, setAddress] = useState(currentUser.location.address);

  const duration = ["0.5", "1", "2", "4", "6", "12"];

  const handleServiceChange = (selectedValue) => {
    setSelectedService(selectedValue);
  };
  const onChange = (imageList, addUpdateIndex) => {

    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (file.length >= 3) {
      console.log("Exceeded maximum file limit (3 files allowed).");
      return;
    }

    setFile((prevFiles) => [...prevFiles, selectedFile]);
  };

  const handlePostAd = () => {
    const expiresAt = addHours(new Date(), expiry)
    const adData = {
      desc: adDescription,
      services: {
        category: selectedService,
        expectedPrice: price,
      },
      expiresAt,
      location: {
        pincode,
        state,
        city,
        address
      },
    };
    PerformRequest('/api/ad/create', 'POST', adData)
      .then((data) => {
        if (data.success) {
          let formdata = new FormData();
          console.log(images);
          images.map(image => {
            if (image.file)
              formdata.append("images", image.file);
          });
          uploadMultimedia(`/api/upload/ad/${data.AdId}`, 'PATCH', formdata)
            .then(data => {
              if (data.success) {
                console.log('upload', data);
              }
            })
            .catch((err) => console.log(err))
        }
      })
      .catch(err => console.log(err))

  };
  if (currentUser?.isAuthenticated === true)
    return (
      <div className="">

        <div className="bg-base-100 text-base-400 px-4 py-6 sm:px-7 sm:py-10 md:px-24 md:py-12">
          <h1 className="text-xl md:text-2xl font-bold">Post an Ad!</h1>
          <p className="text-sm md:text-base tracking-wider py-2 md:pt-2">
            Are you in need of top-notch washing services? Look no further! Share
            the details of your washing needs, from residential laundry to
            specialized cleaning projects.Take the first step to a cleaner space –
            post your job today and let the experts bid for your washing project!
          </p>
          <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey="data_url"
            acceptType={["jpg"]}
          >
            {({
              imageList,
              onImageUpload,
              onImageRemoveAll,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps
            }) => {
              imageList = [...images]
              return (
                <div className=" border  mx-8 p-2">
                  <button
                    className="bg-sky-400 text-white p-2 rounded-md hover:bg-sky-700"
                    style={isDragging ? { color: "red" } : null}
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    Drop here
                  </button>
                  &nbsp;
                  <div className="flex justify-evenly flex-wrap max-h-[300px]">
                    {
                      (imageList.length === 0) &&
                      <img className="max-h-[180px] " src={def} alt="" />
                    }
                    {imageList.map((image, index) => (
                      <div key={index} className="inline]">
                        <img className="max-h-[200px] " src={image.data_url} alt="" />
                        <div className="flex justify-center">
                          <button className="p-1 hover:border-black m-2" onClick={() => onImageUpdate(index)}><img src="https://www.freeiconspng.com/uploads/edit-new-icon-22.png" width="30" alt="Edit, new, icon" /></button>
                          <button className="p-1 hover:border-black m-2 " onClick={() => onImageRemove(index)}><img width={"30px"} src={bin} /></button>

                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            }}
          </ImageUploading>
          <div className="flex justify-center">
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
              <div className="flex flex-col items-left justify-between pt-2 text-lg">
                <label
                  htmlFor="pincode"
                  className="text-sm md:text-base text-base-400 mb-1 md:mb-2"
                >
                  Expected Price ₹
                </label>
                <input
                  type="number"
                  id="price"
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                  className="input mb-4 border-base-400 input-accent h-7 md:w-full bg-base-100 rounded-md md:text-base text-sm p-2 md:py-2 md:px-3"
                />
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
                onClick={handlePostAd}
              >
                Click To Post
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default PostAd;
