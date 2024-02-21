import React from "react";
import Testimonial01 from "../images/testimonials/01.jpg";
import Testimonial02 from "../images/testimonials/02.jpg";
import Testimonial03 from "../images/testimonials/03.jpg";
import Testimonial04 from "../images/testimonials/04.jpg";
import Testimonial05 from "../images/testimonials/05.jpg";
import Testimonial06 from "../images/testimonials/06.jpg";
import Star from "../images/svg/star.svg";
import Quote from "../images/svg/quote.svg";



function Testimonials() {
  return (
    <div id="testimonials" className="px-3">
      <h4 className="text-center">Real testimonials</h4>
      <h1 className="text-center">What our customers are talking about <span> </span><span className="underline">ZZ Hands</span></h1>
      <div id="carouselExampleInterval" className="carousel slide mt-5 mb-4 container" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="0" className="active bg-brown-dark" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="1" className="bg-brown-dark" aria-label="Slide 2"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <div className="carousel-item-inner row justify-content-around">
              <div id="testimonial-container" className="col-3 mb-4 p-5 bg-white">
                <div id="testimonial-data" className="d-flex flex-row m-0">
                  <img src={Testimonial01} className="" alt="testimonial" />
                  <div className="text-start pt-3 ps-3">
                    <h3 className="m-0">Joanna</h3>
                    <iframe src={Star} title="star"></iframe>
                    <iframe src={Star} title="star"></iframe>
                    <iframe src={Star} title="star"></iframe>
                    <iframe src={Star} title="star"></iframe>
                    <iframe src={Star} title="star"></iframe>
                  </div>
                </div>
                <hr />
                <p>Zita is a great decorator with lots of other skills. She prepared our spare room after removing an old fitted wardrobe. She cut this up so it would fit in our car. Zita arrived everyday on time & after decorating laid a laminate floor & constructed 2 wardrobes. A great job!!!</p>
                <img className="quote" src={Quote} alt="quote" />
              </div>
              <div id="testimonial-container" className="col-3 mb-4 p-5 bg-white">
                <div id="testimonial-data" className="d-flex flex-row m-0">
                  <img src={Testimonial02} alt="testimonial" />
                  <div className="text-start pt-3 ps-3">
                    <h3 className="m-0">Dominic</h3>
                    <iframe src={Star} title="star"></iframe>
                    <iframe src={Star} title="star"></iframe>
                    <iframe src={Star} title="star"></iframe>
                    <iframe src={Star} title="star"></iframe>
                    <iframe src={Star} title="star"></iframe>
                  </div>
                </div>
                <hr />
                <p>Zita is very skilled hard working and is focussed on all the details as well as the overall project. She’s really great to work with and translates your ideas to results. Zita has done 3 projects now for us and we couldn’t be happier.</p>
                <img className="quote" src={Quote} alt="quote" />
              </div>
              <div id="testimonial-container" className="col-3 mb-4 p-5 bg-white">
                <div id="testimonial-data" className="d-flex flex-row m-0">
                  <img src={Testimonial03} alt="testimonial" />
                  <div className="text-start pt-3 ps-3">
                    <h3 className="m-0">Laura</h3>
                    <iframe src={Star} title="star"></iframe>
                    <iframe src={Star} title="star"></iframe>
                    <iframe src={Star} title="star"></iframe>
                    <iframe src={Star} title="star"></iframe>
                    <iframe src={Star} title="star"></iframe>
                  </div>
                </div>
                <hr />
                <p>I’ve been having trouble lately finding affordable, reliable, and professional people in London. I’m so pleased that I found this company.</p>
                <img className="quote" src={Quote} alt="quote" />
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="10000">
            <div className="carousel-item-inner row justify-content-around">
              <div id="testimonial-container" className="col-3 mb-4 p-5 bg-white">
                <div id="testimonial-data" className="d-flex flex-row m-0">
                  <img src={Testimonial04} alt="testimonial" />
                  <div className="text-start pt-3 ps-3">
                    <h3 className="m-0">Kevin</h3>
                    <iframe src={Star} title="star"></iframe>
                    <iframe src={Star} title="star"></iframe>
                    <iframe src={Star} title="star"></iframe>
                    <iframe src={Star} title="star"></iframe>
                    <iframe src={Star} title="star"></iframe>
                  </div>
                </div>
                <hr />
                <p>Zita communicated quite clearly before arrival and showed up on time. The work done was good and clean, I now have more use of my utility room and wardrobes. Would definitely recommend and inquire again for future work</p>
                <img className="quote" src={Quote} alt="quote" />
              </div>
              <div id="testimonial-container" className="col-3 mb-4 p-5 bg-white">
                <div id="testimonial-data" className="d-flex flex-row m-0">
                  <img src={Testimonial05} alt="testimonial" />
                  <div className="text-start pt-3 ps-3">
                    <h3 className="m-0">Steve</h3>
                    <iframe src={Star} title="star"></iframe>
                    <iframe src={Star} title="star"></iframe>
                    <iframe src={Star} title="star"></iframe>
                    <iframe src={Star} title="star"></iframe>
                    <iframe src={Star} title="star"></iframe>
                  </div>
                </div>
                <hr />
                <p>Zita did some painting, plastering and other maintenance for my apartment between tenancies. The work was done to a high standard and very quickly. She was able to quote transparently and took before and after photos and provided a prompt invoice for the work.</p>
                <img className="quote" src={Quote} alt="quote" />
              </div>
              <div id="testimonial-container" className="col-3 mb-4 p-5 bg-white">
                <div id="testimonial-data" className="d-flex flex-row m-0">
                  <img src={Testimonial06} alt="testimonial" />
                  <div className="text-start pt-3 ps-3">
                    <h3 className="m-0">Cynthia</h3>
                    <iframe src={Star} title="star"></iframe>
                    <iframe src={Star} title="star"></iframe>
                    <iframe src={Star} title="star"></iframe>
                    <iframe src={Star} title="star"></iframe>
                    <iframe src={Star} title="star"></iframe>
                  </div>
                </div>
                <hr />
                <p>Zita made it easy from beginning to end. No hussle to book, sent the quote right away and arrived on time on the agreed day. She did a great job with the bed I wanted her to assemble, was super quick and left everything clean. She is very kind to</p>
                <img className="quote" src={Quote} alt="quote" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials