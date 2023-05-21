import ReactDOM from "react-dom";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Overlay from "./Components/UI/OverLay";
import Modal from "./Components/UI/Modal/Modal";
import { useState } from "react";
function App() {
  const [overlay, setOverlay] = useState(false);
  const [itemList, setItemList] = useState([]);
  const overlayTrueState = (e) => {
    setOverlay(e);
  };
  const overlayFalseState = (e) => {
    setOverlay(e);
  };
  const allItemHander = (e) => {
    setItemList((prevItems) => [e, ...prevItems]);
  };

  return (
    <>
      {overlay
        ? ReactDOM.createPortal(
            <Overlay onFalseOverlay={overlayFalseState} />,
            document.getElementById("overlay")
          )
        : ""}
      {overlay
        ? ReactDOM.createPortal(
            <Modal onGetAllItems={allItemHander} />,
            document.getElementById("overlay")
          )
        : ""}

      <Header onTrueOverlay={overlayTrueState} />
      <Main itemList={itemList} />
    </>
  );
}

export default App;
