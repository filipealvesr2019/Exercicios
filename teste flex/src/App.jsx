import { useState } from "react";
import Modal from "./modal"
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  useState

  return (
    <>
      <div class="container">
        <div class="item">Item 1</div>
        <div class="item">Item 2</div>
        <div class="item">Item 3</div>
        <div class="item">Item 4</div>
      </div>
      
      <div className="nav">
        <nav className="nav_list">
          <div className="logo">logo</div>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Login</a></li>
        <li><a href="#">Sing in</a></li>
        </nav>
        
      </div>

      <div className="navb">
        <nav className="nav_listb">
          <div className="logob">logo</div>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Login</a></li>
        <li><a href="#">Sing in</a></li>
        </nav>
        
      </div>

      

      <div className="clamp">
        <div className="left">
        <div className="leftItem">Item 1</div>
        <div className="leftItem">Item 2</div>
        <div className="leftItem">Item 3</div>
        <div className="leftItem">Item 4</div>
        </div>

        <div className="center">
        <div className="centerItem">Item 1</div>
        <div className="centerItem">Item 2</div>
        <div className="centerItem">Item 3</div>
        <div className="centerItem">Item 4</div>
        </div>

        <div className="right">
        <div className="rightItem">Item 1</div>
        <div className="rightItem">Item 2</div>
        <div className="rightItem">Item 3</div>
        <div className="rightItem">Item 4</div>
        </div>
       
      </div>

      <div class="flexContainer">
        <div class="itemA">Item 1</div>
        <div class="itemA">Item 2</div>
        <div class="itemA">Item 3</div>
        <div class="itemA">Item 4</div>
      </div>
      
      <div class="flexBContainer">
        <div class="itemB">Item 1</div>
        <div class="itemB">Item 2</div>
        <div class="itemB">Item 3</div>
        <div class="itemB">Item 4</div>
      </div>

      <div class="flexCContainer">
        <div class="itemC">Item 1</div>
        <div class="itemC">Item 2</div>
        <div class="itemC">Item 3</div>
        <div class="itemC">Item 4</div>
      </div>

      <div class="flexDContainer">
        <div class="itemD">Item 1</div>
        <div class="itemD">Item 2</div>
        <div class="itemD">Item 3</div>
        <div class="itemD">Item 4</div>
      </div>

      <div class="flexEContainer">
        <div class="itemE">Item 1</div>
        <div class="itemE">Item 2</div>
        <div class="itemE">Item 3</div>
        <div class="itemE">Item 4</div>
      </div>

      <Modal></Modal>
    </>
  );
}

export default App;
