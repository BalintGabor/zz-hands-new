import React from 'react';

function Footer() {
  return (
    <div id='footer' className='pt-5 px-3 bg-brown-dark'>
      <div id='footer-text' className='row justify-content-center'>
        <div className='col-xl-6 col-md-7 col-sm-8 pe-5'>
          <h2>We'll fully renovate your home or office in London</h2>
          <div className='row pt-4'>
            <div className='col-8 vstack gap-1'>
              <a className='animation-underline text-decoration-none text-reset fw-bold' href="tel:+4407564113037">(+44) 07 564 11 30 37</a>
              <a className='animation-underline text-decoration-none text-reset fw-bold' href="mailto:info@zzhands.co.uk">info@zzhands.co.uk</a>
            </div>
            <div className='col-4 hstack gap-2'>
              <a href="https://www.facebook.com/zzhands.uk" className='px-1'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-facebook" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/zzhands.uk/" className='px-1'>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-instagram" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </a>
              <a href="https://uk.trustpilot.com/review/zzhands.co.uk" className='px-1'>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div id='explore' className='col-xl-2 col-md-3 col-sm-4 text-sm-auto text-center'>
          <h4>Explore</h4>
          <div className='d-flex flex-column'>
            <a href="#about" className='col-12 animation-underline text-decoration-none text-reset'>About</a>
            <a href="#privacy-policy" className='col-12 animation-underline text-decoration-none text-reset'>Privacy policy</a>
            <a href="#terms-conditions" className='col-12 animation-underline text-decoration-none text-reset'>Terms & Conditions</a>
          </div>
        </div>
      </div>
      <div id='copyright' className='text-center py-sm-5 py-2'>
        <p>© All Copyright 2023 by ZZ Hands</p>
      </div>
    </div>
  )
}

export default Footer