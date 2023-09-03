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
  sideMenuLogin,
  sideMenuClose,
  sideMenuDownArrow,
} from "./img";

const Nav = () => {
  const currencies = ["USD", "EUR", "UAH", "GBP", "BIRR", "CHF"];
  const languages = ["Eng", "Amh", "Gur", "Ibo", "Ido", "Kru"];
  const [isMiniMenuOpen, setIsMiniMenuOpen] = useState(false);
  const [isMiniMenuLanguageOpen, setIsMiniMenuLanguageOpen] = useState(false);
  const [currentCurrency, setCurrentCurrency] = useState(0);
  const [currentLanguage, setCurrentLanguage] = useState(0);
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
          setIsMiniMenuLanguageOpen(false);
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
  const miniMenuLanguageWrapper = useRef(null);
  useOutsideAlerter(miniMenuWrapper);
  useOutsideAlerter(miniMenuLanguageWrapper);

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
          <div
            className="group"
            onMouseEnter={() => setIsMiniMenuLanguageOpen(true)}
          >
            <div className="text-wrapper-2">{languages[currentLanguage]}</div>
            <img className="polygon" src={navDownArrow} />
            {isMiniMenuLanguageOpen && (
              <div className="mini-menu-language">
                <div className="div-wrapper">
                  <div class="text-wrapper">Select a language</div>
                </div>
                <div className="div">
                  <img className="img" src="img/image-2.svg" />
                  <p className="english">
                    <span className="span">English</span>{" "}
                    <span className="text-wrapper-2">&nbsp;</span>
                  </p>
                </div>
                <div className="div-2">
                  <img className="img" src="img/image-5.svg" />{" "}
                  <div className="text-wrapper-3">German</div>
                </div>
                <div className="div-2">
                  <img className="img" src="img/image-4.svg" />
                  <div className="text-wrapper-3">Chinese</div>
                </div>
                <div className="div-2">
                  <img className="img" src="img/image-3.svg" />{" "}
                  <div className="text-wrapper-3">Italian</div>
                </div>
                <div className="div-3">
                  <img className="img" src="img/image.svg" />{" "}
                  <div className="text-wrapper-3">Hebrew</div>
                </div>
              </div>
            )}
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
                    <span className="span">{currencies[0]}</span>{" "}
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
                  <div className="text-wrapper-5">{currencies[1]}</div>
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
                  <div className="text-wrapper-5">{currencies[2]}</div>
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
                  <div className="text-wrapper-5">{currencies[3]}</div>
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
                  <div className="text-wrapper-5">{currencies[4]}</div>
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
                  <div className="text-wrapper-5">{currencies[5]}</div>
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
      <div className="side-menu">
        <div className="div-2">
          <img className="img" src={sideMenuClose} />{" "}
          <img className="log-in" src={sideMenuLogin} />
        </div>
        <div className="side-menu-div">
          <div className="div-wrapper">
            <div className="text-wrapper">Cooking Classes</div>
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper">Become a Chef</div>
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper">Group Cooking</div>
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper">Support</div>
          </div>
          <div className="language-and-wrapper">
            <div className="language-and">
              <div className="text-wrapper">English</div>
              <img className="" src={sideMenuDownArrow} />
            </div>
          </div>
          <div className="currency-and-wrapper">
            <div className="currency-and">
              <div className="text-wrapper">Currency</div>
              <img className="polygon" src={sideMenuDownArrow} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
