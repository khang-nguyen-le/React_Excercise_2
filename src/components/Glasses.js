import React, { Component } from "react";

export default class Glasses extends Component {
  glasses = [
    {
        id: 1,
        price: 30,
        name: "GUCCI G8850U",
        url: "./glassesImage/v1.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        id: 2,
        price: 50,
        name: "GUCCI G8759H",
        url: "./glassesImage/v2.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        id: 3,
        price: 30,
        name: "DIOR D6700HQ",
        url: "./glassesImage/v3.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        id: 4,
        price: 70,
        name: "DIOR D6005U",
        url: "./glassesImage/v4.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        id: 5,
        price: 40,
        name: "PRADA P8750",
        url: "./glassesImage/v5.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        id: 6,
        price: 60,
        name: "PRADA P9700",
        url: "./glassesImage/v6.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        id: 7,
        price: 80,
        name: "FENDI F8750",
        url: "./glassesImage/v7.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        id: 8,
        price: 100,
        name: "FENDI F8500",
        url: "./glassesImage/v8.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        id: 9,
        price: 60,
        name: "FENDI F4300",
        url: "./glassesImage/v9.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
]
  state = {
    frame: "v1",
    glassesName: "GUCCI G8850U"
  };

  changeGlassesHandler = (value, name) => {
    this.setState({
      frame: value,
      glassesName: name
    });
  };

  render() {
    let { frame, glassesName} = this.state;
    return (
      <div className="py-5">
        <div
          className="img-box mx-auto position-relative mb-5"
          style={{ width: "300px" }}
        >
          <img
            src="./glassesImage/model.jpg"
            alt="Model"
            className="img-fluid"
          />
          <img
            src={`./glassesImage/${frame}.png`}
            className="position-absolute"
            style={{ width: "150px", top: "27%", left: "25%" }}
          />
          <figcaption className="img__overlay position-absolute bottom-0 left-0 bg-black bg-opacity-50 p-3 text-white">
            <h5 className="img__glasses-name">{glassesName}</h5>
            <p className="img__glasses-desc mb-0">
              Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.
            </p>
          </figcaption>
        </div>

        <div
          className="glasses-box mx-auto bg-white p-5"
          style={{ width: "75%" }}
        >
          <div className="row">
            <div className="col-2">
              <img
                src="./glassesImage/v1.png"
                alt=""
                className="img-fluid mb-4"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  this.changeGlassesHandler("v1", this.glasses[0].name);
                }}
              />
            </div>
            <div className="col-2">
              <img
                src="./glassesImage/v2.png"
                alt=""
                className="img-fluid mb-4"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  this.changeGlassesHandler("v2", this.glasses[1].name);
                }}
              />
            </div>
            <div className="col-2">
              <img
                src="./glassesImage/v3.png"
                alt=""
                className="img-fluid mb-4"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  this.changeGlassesHandler("v3", this.glasses[2].name);
                }}
              />
            </div>
            <div className="col-2">
              <img
                src="./glassesImage/v4.png"
                alt=""
                className="img-fluid mb-4"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  this.changeGlassesHandler("v4", this.glasses[3].name);
                }}
              />
            </div>
            <div className="col-2">
              <img
                src="./glassesImage/v5.png"
                alt=""
                className="img-fluid mb-4"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  this.changeGlassesHandler("v5", this.glasses[4].name);
                }}
              />
            </div>
            <div className="col-2">
              <img
                src="./glassesImage/v6.png"
                alt=""
                className="img-fluid mb-4"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  this.changeGlassesHandler("v6", this.glasses[5].name);
                }}
              />
            </div>
            <div className="col-2">
              <img
                src="./glassesImage/v7.png"
                alt=""
                className="img-fluid"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  this.changeGlassesHandler("v7", this.glasses[6].name);
                }}
              />
            </div>
            <div className="col-2">
              <img
                src="./glassesImage/v8.png"
                alt=""
                className="img-fluid"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  this.changeGlassesHandler("v8", this.glasses[7].name);
                }}
              />
            </div>
            <div className="col-2">
              <img
                src="./glassesImage/v9.png"
                alt=""
                className="img-fluid"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  this.changeGlassesHandler("v9", this.glasses[8].name);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
