import React from "react";
import ImageUploading from "react-images-uploading";
import bin from '../assets/bin.png'
function ImageUpload({ maxNumber }) {
  const [images, setImages] = React.useState([]);
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <div className="App">
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
        }) => (
          // write your building UI
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
            <button
              className="bg-rose-400 text-white p-2 rounded-md hover:bg-rose-700"
              onClick={onImageRemoveAll}>Remove all images</button>
            <div className="flex justify-evenly flex-wrap">
              {imageList.map((image, index) => (
                <div key={index} className="inline">
                  <img className="p-2" src={image.data_url} alt="" width="200" />
                  <div className="image-item__btn-wrapper">
                    <button className="p-1 border hover:border-black m-2" onClick={() => onImageUpdate(index)}><img src="https://www.freeiconspng.com/uploads/edit-new-icon-22.png" width="30" alt="Edit, new, icon" /></button>
                    <button className="p-1 border hover:border-black km-2 " onClick={() => onImageRemove(index)}><img width={"30px"} src={bin} /></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </ImageUploading>
    </div>
  );
}

export default ImageUpload;