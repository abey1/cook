import React, { useState, useRef, useEffect } from "react";
import "./Nav.css";
import {
  navVector1,
  navVector2,
  navVector3,
  navDownArrow,
  navPartition,
  navInfo,
  navLoginIcon,
  navMenuIcon,
} from "./img";

const Nav = () => {
  const currencies = ["USD", "EUR", "UAH", "GBP", "BIRR", "CHF"];
  const [isMiniMenuOpen, setIsMiniMenuOpen] = useState(false);
  const [currentCurrency, setCurrentCurrency] = useState(0);
  /**
   * Hook that alerts clicks outside of the passed ref
   */
  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsMiniMenuOpen(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  const miniMenuWrapper = useRef(null);
  useOutsideAlerter(miniMenuWrapper);

  return (
    <div className="desktop-nav">
      <div className="frame">
        <div className="logo">
          <div className="text-wrapper">COOK</div>
        </div>
        <img className="vector" src={navPartition} />
        <div className="div">
          <div className="nav-link">
            <img className="image" src={navVector1} />
            <div className="learn">Cooking classes</div>
          </div>
          <div className="nav-link">
            <img className="img" src={navVector2} />
            <div className="learn">Become A Chef</div>
          </div>
          <div className="nav-link">
            <img className="image" src={navVector3} />
            <div className="learn">Group Cooking</div>
          </div>
        </div>
      </div>
      <div className="frame-2">
        <div className="currency-and">
          <div className="group">
            <div className="text-wrapper-2">Eng</div>
            <img className="polygon" src={navDownArrow} />
          </div>
          <div className="group-2">
            <div
              className="text-wrapper-3"
              onClick={() => setIsMiniMenuOpen(true)}
            >
              {currencies[currentCurrency]}
            </div>
            <img className="polygon-2" src={navDownArrow} />
            {isMiniMenuOpen && (
              <div ref={miniMenuWrapper} className="mini-menu">
                <div className="div-wrapper">
                  <div className="text-wrapper">Select a currency</div>
                </div>
                <div
                  className={`USD-wrapper ${
                    currentCurrency === 0 && "mini-menu-active"
                  } `}
                  onClick={() => {
                    setCurrentCurrency(0);
                    setIsMiniMenuOpen(false);
                  }}
                >
                  <p className="USD">
                    <span className="span">USD</span>{" "}
                    <span className="text-wrapper-2">&nbsp;</span>
                  </p>
                </div>

                <div
                  className={`div ${
                    currentCurrency === 1 && "mini-menu-active"
                  }`}
                  onClick={() => {
                    setCurrentCurrency(1);
                    setIsMiniMenuOpen(false);
                  }}
                >
                  <div className="text-wrapper-5">EUR</div>
                </div>
                <div
                  className={`div ${
                    currentCurrency === 2 && "mini-menu-active"
                  }`}
                  onClick={() => {
                    setCurrentCurrency(2);
                    setIsMiniMenuOpen(false);
                  }}
                >
                  <div className="text-wrapper-5">UAH</div>
                </div>
                <div
                  className={`div ${
                    currentCurrency === 3 && "mini-menu-active"
                  }`}
                  onClick={() => {
                    setCurrentCurrency(3);
                    setIsMiniMenuOpen(false);
                  }}
                >
                  <div className="text-wrapper-5">GBP</div>
                </div>
                <div
                  className={`div ${
                    currentCurrency === 4 && "mini-menu-active"
                  }`}
                  onClick={() => {
                    setCurrentCurrency(4);
                    setIsMiniMenuOpen(false);
                  }}
                >
                  <div className="text-wrapper-5">BIRR</div>
                </div>
                <div
                  className={`div-wrapper-2 ${
                    currentCurrency === 5 && "mini-menu-active"
                  }`}
                  onClick={() => {
                    setCurrentCurrency(5);
                    setIsMiniMenuOpen(false);
                  }}
                >
                  <div className="text-wrapper-5">CHF</div>
                </div>
              </div>
            )}
          </div>
        </div>
        <img className="vector" src={navPartition} />
        <img className="img" src={navInfo} />
        <img className="vector" src={navPartition} />
        <div className="log-in-button">
          <div className="text-wrapper-4">Log In</div>
          <img className="log-in" src={navLoginIcon} />
        </div>
      </div>
      <div className="nav-menu-icon-holder">
        <img src={navMenuIcon} alt="" className="nav-menu-icon" />
      </div>
    </div>
  );
};

export default Nav;
