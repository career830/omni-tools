import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EnglishClassHeader: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header
        className="site-header header-main-layout-1 ast-primary-menu-enabled ast-logo-title-inline ast-hide-custom-menu-mobile ast-builder-menu-toggle-icon ast-mobile-header-inline"
        id="masthead"
        itemType="https://schema.org/WPHeader"
        itemScope
        itemID="#masthead"
      >
        {/* Desktop Header */}
        <div id="ast-desktop-header" data-toggle-type="dropdown">
          <div className="ast-main-header-wrap main-header-bar-wrap">
            <div className="ast-primary-header-bar ast-primary-header main-header-bar site-header-focus-item">
              <div className="site-primary-header-wrap ast-builder-grid-row-container site-header-focus-item ast-container">
                <div className="ast-builder-grid-row ast-builder-grid-row-has-sides ast-builder-grid-row-no-center">
                  {/* Logo Section */}
                  <div className="site-header-primary-section-left site-header-section ast-flex site-header-section-left">
                    <div className="ast-builder-layout-element ast-flex site-header-focus-item">
                      <div
                        className="site-branding ast-site-identity"
                        itemType="https://schema.org/Organization"
                        itemScope
                      >
                        <span className="site-logo-img">
                          <Link
                            to="/"
                            className="custom-logo-link transparent-custom-logo"
                            rel="home"
                            itemProp="url"
                            aria-label="长沙职英坊教育咨询有限公司"
                          >
                            <img
                              width="150"
                              height="151"
                              src="https://www.englishclass.cn/wp-content/uploads/2025/08/口语_logo256-circle-150x151.png"
                              className="custom-logo"
                              alt="长沙职英坊教育咨询有限公司"
                              decoding="async"
                              srcSet="https://www.englishclass.cn/wp-content/uploads/2025/08/口语_logo256-circle.png 1x, https://www.englishclass.cn/wp-content/uploads/2025/08/口语_logo256-circle.png 2x"
                              sizes="(max-width: 150px) 100vw, 150px"
                            />
                          </Link>
                          <Link
                            to="/"
                            className="custom-logo-link ast-transparent-mobile-logo"
                            rel="home"
                            itemProp="url"
                          >
                            <img
                              width="180"
                              height="60"
                              src="https://www.englishclass.cn/wp-content/uploads/2025/08/logo-18060-trans.png"
                              className="custom-logo"
                              alt="长沙职英坊教育咨询有限公司"
                              decoding="async"
                              srcSet="https://www.englishclass.cn/wp-content/uploads/2025/08/logo-18060-trans.png 1x, https://www.englishclass.cn/wp-content/uploads/2025/08/logo-18060-trans.png 2x"
                            />
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Section */}
                  <div className="site-header-primary-section-right site-header-section ast-flex ast-grid-right-section">
                    <div className="ast-builder-menu-1 ast-builder-menu ast-flex ast-builder-menu-1-focus-item ast-builder-layout-element site-header-focus-item">
                      <div className="ast-main-header-bar-alignment">
                        <div className="main-header-bar-navigation">
                          <nav
                            className="site-navigation ast-flex-grow-1 navigation-accessibility site-header-focus-item"
                            id="primary-site-navigation-desktop"
                            aria-label="Primary Site Navigation"
                            itemType="https://schema.org/SiteNavigationElement"
                            itemScope
                          >
                            <div className="main-navigation ast-inline-flex">
                              <ul
                                id="ast-hf-menu-1"
                                className="main-header-menu ast-menu-shadow ast-nav-menu ast-flex submenu-with-border stack-on-mobile"
                              >
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home">
                                  <Link to="/" className="menu-link">
                                    主页
                                  </Link>
                                </li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                                  <a
                                    href="https://e.englishclass.cn"
                                    className="menu-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    课程商店
                                  </a>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                  <a
                                    href="https://www.englishclass.cn/courses/"
                                    className="menu-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    职场英语
                                  </a>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                  <a
                                    href="https://www.englishclass.cn/courses-interview/"
                                    className="menu-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    面试手册
                                  </a>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                  <a
                                    href="https://www.englishclass.cn/about/"
                                    className="menu-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    关于我们
                                  </a>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                  <a
                                    href="https://www.englishclass.cn/contact/"
                                    className="menu-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    联系我们
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </nav>
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="ast-builder-layout-element ast-flex site-header-focus-item ast-header-button-1">
                      <div className="ast-builder-button-wrap ast-builder-button-size-">
                        <a
                          className="ast-custom-button-link"
                          href="https://e.englishclass.cn"
                          target="_blank"
                          rel="noopener noreferrer"
                          role="button"
                          aria-label="找课程"
                        >
                          <div className="ast-custom-button">找课程</div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Header */}
        <div id="ast-mobile-header" className="ast-mobile-header-wrap" data-type="dropdown">
          <div className="ast-main-header-wrap main-header-bar-wrap">
            <div className="ast-primary-header-bar ast-primary-header main-header-bar site-primary-header-wrap site-header-focus-item">
              <div className="ast-builder-grid-row ast-builder-grid-row-has-sides ast-builder-grid-row-no-center">
                {/* Mobile Logo */}
                <div className="site-header-primary-section-left site-header-section ast-flex site-header-section-left">
                  <div className="ast-builder-layout-element ast-flex site-header-focus-item">
                    <div
                      className="site-branding ast-site-identity"
                      itemType="https://schema.org/Organization"
                      itemScope
                    >
                      <span className="site-logo-img">
                        <Link
                          to="/"
                          className="custom-logo-link transparent-custom-logo"
                          rel="home"
                          itemProp="url"
                          aria-label="长沙职英坊教育咨询有限公司"
                        >
                          <img
                            width="150"
                            height="151"
                            src="https://www.englishclass.cn/wp-content/uploads/2025/08/口语_logo256-circle-150x151.png"
                            className="custom-logo"
                            alt="长沙职英坊教育咨询有限公司"
                            decoding="async"
                            srcSet="https://www.englishclass.cn/wp-content/uploads/2025/08/口语_logo256-circle.png 1x, https://www.englishclass.cn/wp-content/uploads/2025/08/口语_logo256-circle.png 2x"
                            sizes="(max-width: 150px) 100vw, 150px"
                          />
                        </Link>
                        <Link
                          to="/"
                          className="custom-logo-link ast-transparent-mobile-logo"
                          rel="home"
                          itemProp="url"
                        >
                          <img
                            width="180"
                            height="60"
                            src="https://www.englishclass.cn/wp-content/uploads/2025/08/logo-18060-trans.png"
                            className="custom-logo"
                            alt="长沙职英坊教育咨询有限公司"
                            decoding="async"
                            srcSet="https://www.englishclass.cn/wp-content/uploads/2025/08/logo-18060-trans.png 1x, https://www.englishclass.cn/wp-content/uploads/2025/08/logo-18060-trans.png 2x"
                          />
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="site-header-primary-section-right site-header-section ast-flex ast-grid-right-section">
                  <div className="ast-builder-layout-element ast-flex site-header-focus-item">
                    <div className="ast-button-wrap">
                      <button
                        type="button"
                        className="menu-toggle main-header-menu-toggle ast-mobile-menu-trigger-minimal"
                        aria-expanded={isMobileMenuOpen}
                        aria-label="Main menu toggle"
                        onClick={toggleMobileMenu}
                      >
                        <span className="screen-reader-text">Main Menu</span>
                        <span className="mobile-menu-toggle-icon">
                          <span
                            aria-hidden="true"
                            className="ahfb-svg-iconset ast-inline-flex svg-baseline"
                          >
                            <svg
                              className="ast-mobile-svg ast-menu-svg"
                              fill="currentColor"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <path d="M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path>
                            </svg>
                          </span>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Content */}
          {isMobileMenuOpen && (
            <div className="ast-mobile-header-content content-align-flex-start">
              <div className="ast-builder-menu-1 ast-builder-menu ast-flex ast-builder-menu-1-focus-item ast-builder-layout-element site-header-focus-item">
                <div className="ast-main-header-bar-alignment">
                  <div className="main-header-bar-navigation">
                    <nav
                      className="site-navigation ast-flex-grow-1 navigation-accessibility site-header-focus-item"
                      id="primary-site-navigation-mobile"
                      aria-label="Primary Site Navigation"
                      itemType="https://schema.org/SiteNavigationElement"
                      itemScope
                    >
                      <div className="main-navigation ast-inline-flex">
                        <ul
                          id="ast-hf-menu-1-mobile"
                          className="main-header-menu ast-menu-shadow ast-nav-menu ast-flex submenu-with-border stack-on-mobile"
                        >
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home">
                            <Link to="/" className="menu-link">
                              主页
                            </Link>
                          </li>
                          <li className="menu-item menu-item-type-custom menu-item-object-custom">
                            <a
                              href="https://e.englishclass.cn"
                              className="menu-link"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              课程商店
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page">
                            <a
                              href="https://www.englishclass.cn/courses/"
                              className="menu-link"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              职场英语
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page">
                            <a
                              href="https://www.englishclass.cn/courses-interview/"
                              className="menu-link"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              面试手册
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page">
                            <a
                              href="https://www.englishclass.cn/about/"
                              className="menu-link"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              关于我们
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page">
                            <a
                              href="https://www.englishclass.cn/contact/"
                              className="menu-link"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              联系我们
                            </a>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default EnglishClassHeader;
