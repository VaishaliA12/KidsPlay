import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";

function CategoriesPage() {
return (
    <Container>
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="flex column main">
      <div className="flex column region">
      <ul className="j-between side1">
        <li>
          <a href="">
              <div className="jgjpFD">
                <div className="bYWyhj">
                <img src="https://rukminim2.flixcart.com/image/850/1000/l44hyfk0/poster/b/z/y/large-chhota-bheem-big-size-flex-poster-for-room-md-3139-24x36-original-imagf3gzmjwxrgmc.jpeg?q=90"></img>
              <div className="jlvuRZ">
              <span className="jBFlkv">India</span>
              </div>
              </div>
              </div>
          </a>
        </li>
        <li>
          <a href="">
              <div className="jgjpFD">
                <div className="bYWyhj">
                <img src="https://rukminim2.flixcart.com/image/850/1000/l44hyfk0/poster/b/z/y/large-chhota-bheem-big-size-flex-poster-for-room-md-3139-24x36-original-imagf3gzmjwxrgmc.jpeg?q=90"></img>
              <div className="jlvuRZ">
              <span className="jBFlkv">India</span>
              </div>
              </div>
              </div>
          </a>
        </li>
        <li>
          <a href="">
              <div className="jgjpFD">
                <div className="bYWyhj">
                <img src="https://rukminim2.flixcart.com/image/850/1000/l44hyfk0/poster/b/z/y/large-chhota-bheem-big-size-flex-poster-for-room-md-3139-24x36-original-imagf3gzmjwxrgmc.jpeg?q=90"></img>
              <div className="jlvuRZ">
              <span className="jBFlkv">India</span>
              </div>
              </div>
              </div>
          </a>
        </li>
        <li>
          <a href="">
              <div className="jgjpFD">
                <div className="bYWyhj">
                <img src="https://rukminim2.flixcart.com/image/850/1000/l44hyfk0/poster/b/z/y/large-chhota-bheem-big-size-flex-poster-for-room-md-3139-24x36-original-imagf3gzmjwxrgmc.jpeg?q=90"></img>
              <div className="jlvuRZ">
              <span className="jBFlkv">India</span>
              </div>
              </div>
              </div>
          </a>
        </li>

      </ul>
      </div>
      <div className="v1"></div>
      <div className="flex column genre">
      <h3>Genres</h3>
      </div>
      </div>
      
    </Container>
  );
}
const Container = styled.div`
  background-color: black;
  .main{
    position: absolute;
    border-radius: 1em;
    top: 80px;
    justify-content: space-around;
    padding: 1.75em 1.6em;
    display: flex;
    z-index: 2;
    left: 5%;
    background-color: rgb(10, 10, 10);
}
  .region{
    display: flex;
    flex-direction: column;
    padding-right: 2em;
    padding-top :2em;
    padding-left: 5em;
}
   .side1{
     list-style-type:none;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5em;
    margin-bottom: 2.25em;
   }
  .jgjpFD {
    position: relative;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 8px;
    padding: 0.25em;
    border: 1px solid transparent;
    text-align: center;
    background-color: rgb(26, 26, 26);
    background-clip: padding-box;
}
.bYWyhj {
    border-radius: 8px;
    position: relative;
    text-align: center;
    overflow: hidden;
    min-height: 6em;
    min-width: 6em;
}
.bSkwym {
    display: block;
}
.jlvuRZ {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    text-align: center;
    height: 100%;
    align-items: flex-end;
    -webkit-box-pack: center;
    justify-content: center;
    display: flex;
    z-index: 1;
    padding-bottom: 7%;
}
.jBFlkv {
    font-weight: bold;
    font-size: 1.2rem;
    line-height: 1.8rem;
    color: rgb(255, 255, 255);
    text-align: center;
    display: inline-block;
    width: 100%;
    z-index: 1;
    font-size: calc(1.2rem + (2 * (100vw - 600px)) / 680);
    line-height: calc(1.8rem + (2 * (100vw - 600px)) / 680);
}
img{
  border-radius: 0.2rem;
    width: 100%;
    height: 10rem;
    z-index: 10;
}
.vl {
  border-left: 6px solid green;
  height: 500px;
  position: absolute;
  left: 50%;
  margin-left: -3px;
  top: 0;
  background-color : white;
}
`;
export default CategoriesPage;