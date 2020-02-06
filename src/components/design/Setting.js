import React from "react";
const urlimgBase =
  "https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/";

const Settings = ({
  color,
  upperText,
  lowerText,
  uploadImage,
  textSize,
  textColor,
  saveDesign
}) => {
  return (
    <div className="card bg-light container">
      <h3 className="text-center"> Settings</h3>
      <h4>Change T-Shirt Color</h4>
      <div className="tshirt-color">
        <img
          onClick={color}
          src={`${urlimgBase}white.png`}
          alt="white-tshirt"
          id="white"
        />
        <img
          onClick={color}
          src={`${urlimgBase}black.png`}
          alt="black-tshirt"
          id="black"
        />
        <img
          onClick={color}
          src={`${urlimgBase}grey.png`}
          alt="grey-tshirt"
          id="grey"
        />
        <img
          onClick={color}
          src={`${urlimgBase}blue.png`}
          alt="blue-tshirt"
          id="blue"
        />
        <img
          onClick={color}
          src={`${urlimgBase}red.png`}
          alt="red-tshirt"
          id="red"
        />
      </div>
      <hr />
      <h4>Write Text</h4>
      <input
        type="text"
        onChange={upperText}
        className="form-control form-control-sm mb-2"
        placeholder="Upper Text"
      />
      <input
        type="text"
        onChange={lowerText}
        className="form-control form-control-sm"
        placeholder="Lower Text"
      />
      <hr />
      <h4>Upload Image</h4>
      <div className="form-group">
        <input
          type="file"
          onChange={uploadImage}
          className="form-control-file mb-2"
        />
      </div>
      <hr />
      <h4>Text Size</h4>
      <input onChange={textSize} type="range" min="18" max="38" />
      <hr />
      <h4>Text Color</h4>
      <select className="form-control form-cotrol-sm mb-2" onChange={textColor}>
        <option>White</option>
        <option>Black</option>
        <option>Red</option>
        <option>Blue</option>
      </select>
      <hr />
      <button
        className="btn btn-primary btn-sm mb-2"
        id="saveDesign"
        onClick={saveDesign}
      >
        Save
      </button>
    </div>
  );
};

export default Settings;
