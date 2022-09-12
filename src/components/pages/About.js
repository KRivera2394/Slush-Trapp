import React from "react";

export default function About() {
  return (
    <div>
      <div id="menu">
        <h1 className="menuList homeHeading mb-5">MENU</h1>
      </div>
      <div className="menuCont d-flex">
        <div className="card menuBack meB">
          <div className="card-header scFlavors ">
            SNOW CONE FLAVORS
            <div className="menPrice">$5.00</div>
          </div>
          <ul className="menuUL">
            <li>BLUE BUBBLEGUM</li>
            <li>STRAWBERRY</li>
            <li>CHERRY</li>

            <li>PINA COLADA</li>
            <li>PINEAPPLE</li>
            <li>COTTON CANDY</li>
          </ul>
        </div>
        <div className="card menuBack ">
          <div className="card-header scFlavors ">
            SLUSHY FLAVORS
            <div className="menPrice">$6.00</div>
          </div>
          <ul className="menuUL">
            <li>BLUE RASPBERRY</li>
            <li>STRAWBERRY</li>
            <li>WATERMELON</li>
            <li>GREEN APPLE</li>
            <li>COTTON CANDY</li>
            <li>JOLLY RANCHER GRAPE</li>
          </ul>
        </div>
        <div className="card menuBack ">
         
          <ul className="menuUL genMen">
            <li>  - ADULT SLUSHY'S: <span className="menPrice">$12.00</span> </li>
            
            <li>- WATER : <span className="menPrice">$1.00</span></li>
            
          </ul>
        </div>
        <div className="card menuBack ">
          <div className="card-header scFlavors ">
            PAYMENT
           
          </div>
         
          <ul className="menuUL genMen">
            <li>-  <span  className="menPrice">$ CASH $</span> </li>
            
            <li>-<span className="menPrice" > Cash APP :</span> <span className="cashPay">$slushtrap</span></li>
            <li>- <span className="menPrice" >Zelle / Apple Pay :</span> </li>
            <li className="menPrice">813-970-TRAP(8727)</li>
            
          </ul>
        </div>
      </div>
    </div>
  );
}
