/* eslint-disable import/newline-after-import */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/oceanicNext'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Prism from 'prism-react-renderer/prism'
import { navigate } from 'gatsby'
import DocsIconDashboard from '../../assets/img/docs-icon-dashboard.svg'
;(typeof global !== 'undefined' ? global : window).Prism = Prism

require('prismjs/components/prism-python.js')

const ProductTabs = ({ data, location }) => {
  const [tabIndex, setTabIndex] = useState(0)

  useEffect(() => {
    if (location.hash === '#database') {
      console.log('#database')
      setTabIndex(0)
    } else if (location.hash === '#custom-source') {
      console.log('#custom-source')
      setTabIndex(1)
    } else if (location.hash === '#saas') {
      console.log('#saas')
      setTabIndex(2)
    }
  }, [location])

  return (
    <div className="extract-data glow-bg">
      <div className="container">
        <div className="tabs-section-wrap ml-margins">
          <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
            <div className="benefit-tabs">
              <div className="tabs-container">
                <section className="tab-container">
                  <div className="extract-data-box">
                    <h2>{data.productTabsTitle}</h2>
                    <TabList>
                      <div className="tab-title">
                        {data.productTab.map(tab => (
                          <Tab key={tab.productTabNumber}>
                            <button
                              className={`tab-button ${
                                tabIndex === tab.productTabNumber - 1
                                  ? 'tab_button-active'
                                  : ''
                              }`}
                              key={tab.productTabTitle}
                              type="button"
                              id={
                                tab.productTabNumber === 1
                                  ? 'database'
                                  : tab.productTabNumber === 2
                                  ? 'custom-source'
                                  : 'saas'
                              }
                              onClick={() => {
                                navigate(
                                  tab.productTabNumber === 1
                                    ? '#database'
                                    : tab.productTabNumber === 2
                                    ? '#custom-source'
                                    : '#saas'
                                )
                              }}
                            >
                              {tab.productTabTitle}
                            </button>
                          </Tab>
                        ))}
                      </div>
                    </TabList>
                  </div>
                  {data.productTab
                    .filter(t => data.productTab.indexOf(t) === tabIndex)
                    .map(tab => (
                      <div
                        className="tab-inside tab-inside-active"
                        key={tab.productTabNumber}
                      >
                        <div className="tab-inside-column">
                          <h3
                            dangerouslySetInnerHTML={{
                              __html:
                                tab.productTabBenefits.productTabBenefitsTitle,
                            }}
                          />
                        </div>
                        <div className="tab-inside-column">
                          <ul className="benefits-list">
                            {tab.productTabBenefits.productTabBenefitsItems.map(
                              item => (
                                <li key={item.productTabBenefitsItemText}>
                                  <img
                                    src={
                                      item.productTabBenefitsItemImage.localFile
                                        .publicURL
                                    }
                                    alt={item.productTabBenefitsItemText}
                                  />
                                  <h6>{item.productTabBenefitsItemText}</h6>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                    ))}
                </section>
              </div>
            </div>

            <div className="tabs-section">
              <div className="heading">
                <h3>
                  <span className="brackets">Experience</span> Meltano
                </h3>
              </div>

              {data.productTab.map(tab => (
                <TabPanel key={tab.productTabNumber}>
                  {tab.productTabExperienceContent.map(exp => (
                    <div
                      className={`tabs-container tabs-container-color-${exp.productTabExperienceContentColor}`}
                      key={exp.productTabExperienceContentNumber}
                    >
                      <div className="tabs-subheading">
                        <div className="tabs-subtitle">
                          <h4 className="brackets">
                            {exp.productTabExperienceContentTitle}
                          </h4>
                          <p className="p1">
                            {exp.productTabExperienceContentDescription}
                          </p>
                        </div>
                        <a
                          href={exp.productTabExperienceContentLink.url}
                          className="docs-link"
                          target={exp.productTabExperienceContentLink.target}
                        >
                          <img src={DocsIconDashboard} alt="" />
                          View docs
                        </a>
                      </div>

                      <Tabs>
                        <section className="tab-container">
                          <TabList className="tab-title tab-list">
                            {exp.productTabExperienceContentTabs.map(button => (
                              <Tab
                                key={
                                  button.productTabExperienceContentTabNumber
                                }
                                className="tab-button"
                                selectedClassName="tab_button-active"
                              >
                                {button.productTabExperienceContentTabTitle}
                              </Tab>
                            ))}
                          </TabList>
                          {exp.productTabExperienceContentTabs.map(content => (
                            <TabPanel
                              key={exp.productTabExperienceContentNumber}
                            >
                              <div className="tab-inside tab-inside-active">
                                {content.productTabExperienceContentTabWindows.map(
                                  win => (
                                    <div
                                      className="tab-inside-column"
                                      key={
                                        win.productTabExperienceContentTabWindowContent
                                      }
                                    >
                                      <div className="tab-terminal">
                                        <div className="terminal-header">
                                          <div className="terminal-header-circles">
                                            <span className="red-bg" />
                                            <span className="yellow-bg" />
                                            <span className="green-bg" />
                                          </div>
                                          <span className="tab-terminal-title">
                                            {
                                              win.productTabExperienceContentTabWindowTitle
                                            }
                                          </span>
                                          <span className="terminal-circle-clear" />
                                        </div>
                                        <div className="terminal-content">
                                          <Highlight
                                            {...defaultProps}
                                            theme={theme}
                                            code={win.productTabExperienceContentTabWindowContent
                                              .slice(5)
                                              .slice(0, -7)}
                                            language={
                                              win.productTabExperienceContentTabWindowLanguage
                                            }
                                          >
                                            {({
                                              className,
                                              style,
                                              tokens,
                                              getLineProps,
                                              getTokenProps,
                                            }) => (
                                              <pre
                                                className={className}
                                                style={style}
                                              >
                                                {tokens.map((line, i) => (
                                                  <div
                                                    {...getLineProps({
                                                      line,
                                                      key: i,
                                                    })}
                                                    style={
                                                      win.productTabExperienceContentTabWindowHighlight
                                                        ?.split(',')
                                                        .includes(
                                                          (i + 1).toString()
                                                        )
                                                        ? {
                                                            background:
                                                              'rgb(255 255 255 / 15%)',
                                                          }
                                                        : null
                                                    }
                                                  >
                                                    {line.map((token, key) => (
                                                      <span
                                                        {...getTokenProps({
                                                          token,
                                                          key,
                                                        })}
                                                      />
                                                    ))}
                                                  </div>
                                                ))}
                                              </pre>
                                            )}
                                          </Highlight>
                                        </div>
                                      </div>
                                    </div>
                                  )
                                )}
                              </div>
                            </TabPanel>
                          ))}
                        </section>
                      </Tabs>
                    </div>
                  ))}
                </TabPanel>
              ))}

              <div className="tabs-subheading">
                <div className="tabs-subtitle enjoy-tab">
                  <h4 className="brackets">Enjoy</h4>
                  <p className="p1">
                    Meltano is now moving your data in production!
                  </p>
                </div>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default ProductTabs
