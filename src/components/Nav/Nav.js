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
  englishFlag,
  germanFlag,
  chineseFlag,
  italianFlag,
  hebrewFlag,
} from "./img";

const Nav = () => {
  const currencies = ["USD", "EUR", "UAH", "GBP", "BIRR", "CHF"];
  const languages = ["Eng", "Ger", "Chi", "Itl", "Heb"];
  const languagesLong = ["English", "German", "Chinese", "Italian", "Hebrew"];
  const [isMiniMenuOpen, setIsMiniMenuOpen] = useState(false);
  const [isMiniMenuLanguageOpen, setIsMiniMenuLanguageOpen] = useState(false);
  const [currentCurrency, setCurrentCurrency] = useState(0);
  const [currentLanguage, setCurrentLanguage] = useState(0);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [sideSubMenuLanguage, setSideSubMenuLanguage] = useState(false);
  const [sideSubMenuCurrency, setSideSubMenuCurrency] = useState(false);

  // handles side menu close on window resize
  const handleResize = () => {
    window.innerWidth >= 1052 && setIsSideMenuOpen(false);
  };
  window.onresize = handleResize;
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
          setIsSideMenuOpen(false);
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
  const sideMenuRef = useRef(null);
  useOutsideAlerter(sideMenuRef);

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
            onMouseLeave={() => setIsMiniMenuLanguageOpen(false)}
          >
            <div className="text-wrapper-2">{languages[currentLanguage]}</div>
            <img className="polygon" src={navDownArrow} />
            {isMiniMenuLanguageOpen && (
              <div
                className="mini-menu-language"
                onMouseLeave={() => setIsMiniMenuLanguageOpen(false)}
              >
                <div className="div-wrapper">
                  <div class="text-wrapper">Select a language</div>
                </div>
                <div
                  className={`div ${currentLanguage === 0 && "active"}`}
                  onClick={() => {
                    setCurrentLanguage(0);
                    setIsMiniMenuLanguageOpen(false);
                  }}
                >
                  <img className="img" src={englishFlag} />
                  <p className="english">
                    <span className="span">{languagesLong[0]}</span>{" "}
                    <span className="text-wrapper-2">&nbsp;</span>
                  </p>
                </div>
                <div
                  className={`div-2 ${currentLanguage === 1 && "active"}`}
                  onClick={() => {
                    setCurrentLanguage(1);
                    setIsMiniMenuLanguageOpen(false);
                  }}
                >
                  <img className="img" src={germanFlag} />{" "}
                  <p className="english">
                    <span className="span">{languagesLong[1]}</span>{" "}
                    <span className="text-wrapper-2">&nbsp;</span>
                  </p>
                </div>
                <div
                  className={`div-2 ${currentLanguage === 2 && "active"}`}
                  onClick={() => {
                    setCurrentLanguage(2);
                    setIsMiniMenuLanguageOpen(false);
                  }}
                >
                  <img className="img" src={chineseFlag} />{" "}
                  <p className="english">
                    <span className="span">{languagesLong[2]}</span>{" "}
                    <span className="text-wrapper-2">&nbsp;</span>
                  </p>
                </div>
                <div
                  className={`div-2 ${currentLanguage === 3 && "active"}`}
                  onClick={() => {
                    setCurrentLanguage(3);
                    setIsMiniMenuLanguageOpen(false);
                  }}
                >
                  <img className="img" src={italianFlag} />{" "}
                  <p className="english">
                    <span className="span">{languagesLong[3]}</span>{" "}
                    <span className="text-wrapper-2">&nbsp;</span>
                  </p>
                </div>
                <div
                  className={`div-3 ${currentLanguage === 4 && "active"}`}
                  onClick={() => {
                    setCurrentLanguage(4);
                    setIsMiniMenuLanguageOpen(false);
                  }}
                >
                  <img className="img" src={hebrewFlag} />{" "}
                  <p className="english">
                    <span className="span">{languagesLong[4]}</span>{" "}
                    <span className="text-wrapper-2">&nbsp;</span>
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className="group-2">
            <div
              className="text-wrapper-3"
              onMouseEnter={() => setIsMiniMenuOpen(true)}
              onMouseLeave={() => setIsMiniMenuOpen(false)}
            >
              {currencies[currentCurrency]}
            </div>
            <img className="polygon-2" src={navDownArrow} />
            {isMiniMenuOpen && (
              <div
                className="mini-menu"
                onMouseEnter={() => setIsMiniMenuOpen(true)}
                onMouseLeave={() => setIsMiniMenuOpen(false)}
              >
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
      <div
        className="nav-menu-icon-holder"
        onClick={() => {
          setIsSideMenuOpen(true);
          console.log(window.innerWidth);
        }}
      >
        <img src={navMenuIcon} alt="" className="nav-menu-icon" />
      </div>

      <div
        className={`side-menu ${isSideMenuOpen && "side-menu-open"} `}
        ref={sideMenuRef}
      >
        <div className="div-2">
          <img
            className="img side-menu-close"
            src={sideMenuClose}
            onClick={() => setIsSideMenuOpen(false)}
          />{" "}
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
            <div
              className="language-and"
              onClick={() => setSideSubMenuLanguage(!sideSubMenuLanguage)}
            >
              <div className="text-wrapper">English</div>
              <img
                className={`${
                  sideSubMenuLanguage
                    ? "language-arrow-rotate"
                    : "language-arrow-return"
                }`}
                src={sideMenuDownArrow}
              />
            </div>
            <div
              className={`side-menu-language-sub-menu ${
                sideSubMenuLanguage && "side-menu-language-sub-menu-open"
              }`}
            >
              {languagesLong.map((lan, index) => {
                return (
                  <div
                    className="side-menu-single-language"
                    onClick={() => {
                      setCurrentLanguage(index);
                      setSideSubMenuLanguage(!sideSubMenuLanguage);
                      setIsSideMenuOpen(false);
                    }}
                  >
                    {lan}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="currency-and-wrapper">
            <div
              className="language-and"
              onClick={() => setSideSubMenuCurrency(!sideSubMenuCurrency)}
            >
              <div className="text-wrapper">Currency</div>
              <img
                className={`${
                  sideSubMenuCurrency
                    ? "currency-arrow-rotate"
                    : "currency-arrow-return"
                }`}
                src={sideMenuDownArrow}
              />
            </div>
            <div
              className={`side-menu-currency-sub-menu ${
                sideSubMenuCurrency && "side-menu-currency-sub-menu-open"
              }`}
            >
              {currencies.map((cur, index) => {
                return (
                  <div
                    className="side-menu-single-currency"
                    onClick={() => {
                      setCurrentCurrency(index);
                      setSideSubMenuCurrency(!sideSubMenuCurrency);
                      setIsSideMenuOpen(false);
                    }}
                  >
                    {cur}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
