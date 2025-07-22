import React from "react";
import ReactDOM from "react-dom/client";

/*
App(
 Header->Logo and the nav items
 Body->Search Bar and card container
 Footer->Address
         License
         Contact
         Email
)
*/
const Header = () => {
  return (
    <div className="Header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://i.pinimg.com/736x/83/c6/a9/83c6a9427e6c36857ef6cbc10c9e9565.jpg"
        ></img>
      </div>
      <div className="Navitems">
        <ul className="items">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const ResCard = () => {
  return (
    <div className="card">
      
        <div className="food-image">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/f2ac1fad-bff8-4a78-bc9b-f65567f93906_249749.JPG"></img>
        </div>
        <div className="star-rating-time">
          <div className="star">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc3yCfMItzK5tavoiWhSwT-EBBIXW8GTwd7A&s"></img>
          </div>
          <div className="rating-time">
            <span>4.3 </span>
            40-45 mins
          </div>
        </div>
        <div className="cuisine">American,Chinese</div>
        <div className="address">Vivek Vihar</div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="Search">Search</div>
      <div className="card-container">
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
      </div>
    </div>
  );
};

const Applayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading1);
root.render(<Applayout />);
