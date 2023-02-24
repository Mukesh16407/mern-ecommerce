import ReactDOM from 'react-dom'
import loaderImg from "../../assets/loader.gif";
import './loader.css';

export const Loader = () => {
  return ReactDOM.createPortal(
    <div className="wrapper">
      <div className="loader">
        <img src={loaderImg} alt="Loading..." />
      </div>
    </div>,
  document.getElementById("loader")
  )
}
