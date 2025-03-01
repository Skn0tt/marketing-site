/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Modal from 'react-modal'
import Path1 from '../../assets/img/path-1.svg'
import Path2 from '../../assets/img/path-2.svg'
import Path3 from '../../assets/img/path-3.svg'
import Path4 from '../../assets/img/path-4.svg'
import Path5 from '../../assets/img/path-5.svg'
import Path6 from '../../assets/img/path-6.svg'
import Path7 from '../../assets/img/path-7.svg'
import Path8 from '../../assets/img/path-8.svg'
import MeltyProgramming from '../../assets/img/melty-programming.webp'
import MeltanoTerminal from '../../assets/img/meltano-terminal.svg'
import PlayButton from '../../assets/img/play-btn.svg'
import CloseButton from '../../assets/img/close-btn.svg'

const Engineers = ({ data }) => {
  const paths = [
    { svg: Path1, class: '' },
    { svg: Path2, class: '' },
    { svg: Path3, class: 'curved-path-3' },
    { svg: Path4, class: 'curved-path-4' },
    { svg: Path5, class: '' },
    { svg: Path6, class: '' },
    { svg: Path7, class: 'curved-path-7' },
    { svg: Path8, class: 'curved-path-8' },
  ]

  const tableItems = data.engineersTable.map((path, index) => ({
    ...path,
    line: paths[index],
  }))

  const firstTable = tableItems.slice(0, 4)
  const secondTable = tableItems.slice(4)

  // const [modalIsOpen, setIsOpen] = useState(false)

  // function openModal(e) {
  //   e.preventDefault()
  //   setIsOpen(true)
  // }

  // function closeModal() {
  //   setIsOpen(false)
  //   document.body.classList.remove('modal-open')
  // }

  return (
    <>
      <div className="meltano-gives-engineers section">
        <div className="container">
          <div className="heading">
            <h2 dangerouslySetInnerHTML={{ __html: data.engineersTitle }} />
            <p
              className="heading-description p2"
              dangerouslySetInnerHTML={{ __html: data.engineersText }}
            />
          </div>

          <div className="meltano-gives-table-head">
            <h5 className="brackets">{data.engineersHead.engineersHeadLeft}</h5>
            <h5 className="brackets-blue">
              {data.engineersHead.engineersHeadRight}
            </h5>
          </div>
          <div className="meltano-gives-table">
            <div className="meltano-gives-table-list table-list-left">
              {firstTable.map(item => (
                <div className="meltano-gives-table-item">
                  <div className="meltano-gives-table-item-bubble">
                    <img
                      className="meltano-gives-table-item-image"
                      src={item.engineersTableImage.localFile.publicURL}
                      alt={item.engineersTableText}
                    />
                    <span className="meltano-gives-table-item-label">
                      {item.engineersTableText}
                    </span>
                  </div>
                  <img
                    className={`meltano-gives-table-item-path ${item.line.class}`}
                    src={item.line.svg}
                    alt=""
                  />
                </div>
              ))}
            </div>
            <div className="meltano-gives-terminal">
              <img
                className="meltano-gives-terminal-image"
                src={MeltanoTerminal}
                alt=""
              />
              <img
                className="meltano-gives-melty-image"
                src={MeltyProgramming}
                alt=""
              />
            </div>
            <div className="meltano-gives-table-list table-list-right">
              {secondTable.map(item => (
                <div className="meltano-gives-table-item">
                  <img
                    className={`meltano-gives-table-item-path ${item.line.class}`}
                    src={item.line.svg}
                    alt=""
                  />
                  <div className="meltano-gives-table-item-bubble">
                    <img
                      className="meltano-gives-table-item-image"
                      src={item.engineersTableImage.localFile.publicURL}
                      alt={item.engineersTableText}
                    />
                    <span className="meltano-gives-table-item-label">
                      {item.engineersTableText}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <Modal
        isOpen={modalIsOpen}
        // eslint-disable-next-line react/jsx-no-bind
        onRequestClose={closeModal}
        contentLabel="Subscribe Modal"
        ariaHideApp={false}
        className="video-modal"
        overlayClassName="video-overlay"
        shouldCloseOnOverlayClick
      >
        <div className="button-wrapper">
          <button type="button" onClick={closeModal}>
            <img src={CloseButton} alt="" className="" />
          </button>
        </div>
        <div className="modal-content">
          <div className="video-poster">
            <iframe
              width="791"
              height="508"
              src="https://www.youtube.com/embed/rGlf43bAG6I?enablejsapi=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            />
          </div>
        </div>
      </Modal> */}
    </>
  )
}

export default Engineers
