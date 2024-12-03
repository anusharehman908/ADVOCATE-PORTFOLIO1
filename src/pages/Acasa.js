import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faFileCircleCheck,
  faCommentsDollar,
  faGavel,
} from "@fortawesome/free-solid-svg-icons";

const Acasa = () => {
  return (
    <>
      <div className="home-page">
        <Helmet>
          <title>
            lawyer
          </title>
          
          <meta
            name="description"
            content="Cabinetul nostru de Avocat și Insolvență, condus de Alina Marin, oferă consultanță, asistență și reprezentare pentru probleme juridice sau de insolvență și recuperare de creanțe în fața instanțelor și autorităților publice."
          />
        </Helmet>



        {/* HERO=========== */}
        <div className="container-fluid">
          <div className="row">
            <div className="hero-section">
              <div className="hero-overlay"></div>
              <div className="text-container d-flex flex-column justify-content-start align-items-start pt-6 slide">
                <div className="text-1 fs-2 pb-3 mb-20">MM & TEEWANO & </div>
                <div className="text-2 fs-4">
                LEGAL GROUP PROF.M.M 
                <br></br>
              < h2>TEEWANO <span>(SAHIL)</span> </h2>
             
                  <span className="fw-bold">
                    <br></br> {" "}
                  </span>
                </div>
                <div className="text-3 fst-italic fw-black ">
                 <p className="color-green"></p>  
                  
                </div>
              </div>
              {/* horizontal buttons */}
              <div className="horizontal-btn d-none d-md-flex justify-content-center align-items-end w-100 h-100">
                <div className=" col flex-grow-1">
                  <Link to="/contact">
                    <button
                      id="horizontal1"
                      className="btn btn-outline-dark btn-lg  type-button p-4 w-100 fw-bold"
                      aria-label="Programare"
                    >
                      <span className="p-3">
                        <FontAwesomeIcon icon={faCalendarCheck} size="1x" />
                      </span>
                      Programare
                    </button>
                  </Link>
                </div>
                <div className="col flex-grow-1">
                  <Link to="/contact">
                    <button
                      className="btn btn-lg btn-outline-dark type-button p-4 w-100 fw-bold"
                      aria-label="Cere o evaluare"
                    >
                      <span className="p-3">
                        <FontAwesomeIcon icon={faFileCircleCheck} size="1x" />
                      </span>
                    CONTACT
                    </button>
                  </Link>
                </div>
                <div className="col flex-grow-1">
                  <Link to="/informatii-utile">
                    <button
                      className="btn btn-lg btn-outline-dark type-button p-4 w-100 fw-bold"
                      aria-label="Onorarii"
                    >
                      <span className="p-3">
                        <FontAwesomeIcon icon={faCommentsDollar} size="1x" />
                      </span>
                      SKILLS
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* small screens buttons*/}
            <div className="mobile-btn d-md-none d-flex justify-content-between pt-2">
              <Link to="/contact">
                <button
                  id="small"
                  className="btn btn-outline-dark type-button p-2 mb-1 btn-md me-1"
                  aria-label="Programare"
                >
                  <span className="p-3">
                    <FontAwesomeIcon icon={faCalendarCheck} size="1x" />
                  </span>
                  Programare
                </button>
              </Link>
              <Link to="/contact">
                <button
                  className="btn btn-outline-dark type-button p-2 mb-1 btn-md me-1"
                  aria-label="Cere o evaluare"
                >
                  <span className="p-3">
                    <FontAwesomeIcon icon={faFileCircleCheck} size="1x" />
                  </span>
                  Cere o evaluare
                </button>
              </Link>
              <Link to="/informatii-utile">
                <button
                  className="btn btn-outline-dark type-button p-2 btn-md"
                  aria-label="Onorarii"
                >
                  <span className="p-3">
                    <FontAwesomeIcon icon={faCommentsDollar} size="1x" />
                  </span>
                  SKILLS
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* TE CONFRUNTI CU O PROBLEMA=========

        <section className="card py-5 px-3 border-0">
          <div className="row">
            <div className="col-lg-7">
              <div className="card-body">
                <h6 className="guide-text mb-4">INTRO</h6>
                <h5 className="lh-base text-center pb-4">
                INTRODUCTION
                </h5>

                <p className="text-separator fw-normal">
                Sindh High Court is the highest judicial institution of Sindh, Sindh High Court, located in Karachi, the capital of Sindh Province. The High Court of Sindh was established on 1st December, 1976. The Sindh Highcourt is currently composed ten judges including the Chief Justice. The chief justice is the chief judge of the Sindh High Court. Mr. Justice Muhammad Shafi Siddiqui is the current chief Justice of SHC Karachi.
                  <br />
                  <span className="ms-4"></span> (((The SHC is performing its basic functions of enforcement of fundamental rights along with fair and just adjudication of public and private litigation. Sindh High Court is located at Saddar & Sindh Secretariat, Karachi, Pakistan. High Court of Sindh have benches in Sukkur,  circuit court Larkana and circuit court Hyderabad.)))
                  <span></span>
                </p>
              </div>
            </div>

            <div className="col-lg-5 d-flex align-items-center justify-content-center">
              <div>
                <img
                  src="/assets/2.jpg"
                  className="intro-img img-fluid d-block rounded-2"
                  alt=" a gavel, scales of justice, and law books"
                  style={{ maxHeight: "300px" }}
                />
              </div>
            </div>
          </div>
        </section> */}










        {/*TE CONFRUNTI CU O PROBLEMA========= */}

<section className="card py-5 px-3 border-0">
  <div className="row">
    <div className="col-lg-7">
      <div className="card-body">
        <h6 className="guide-text mb-4">INTRO</h6>
        <h5 className="lh-base text-center pb-4">
          INTRODUCTION
        </h5>

        <p className="text-separator fw-normal">
        The High Court of Sindh (Sindhi: سنڌ ھائي ڪورٽ) (Urdu: عدالتِ عالیہ سندھ) is the highest judicial institution of the Pakistani province of Sindh. Established in 1906, the Court situated in the provincial capital at Karachi. Apart from being the highest Court of Appeal for Sindh in civil and criminal matters, the Court was the District Court and the Court of Session in Karachi.
          <br />
          <span className="ms-4"></span> (((.)))
          <span></span>
        </p>
      </div>
    </div>

    <div className="col-lg-5 d-flex align-items-center justify-content-center">
      <div id="imageCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/assets/2.jpg"
              className="intro-img img-fluid d-block rounded-2"
              alt="a gavel, scales of justice, and law books"
              style={{ maxHeight: "300px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="/assets/5.jpg" // Add your second image here
              className="intro-img img-fluid d-block rounded-2"
              alt="courtroom image"
              style={{ maxHeight: "300px" }}
            />
          </div>


          <div className="carousel-item">
            <img
              src="/assets/6.jpg" // Add your second image here
              className="intro-img img-fluid d-block rounded-2"
              alt="courtroom image"
              style={{ maxHeight: "300px" }}
            />
          </div>




          <div className="carousel-item">
            <img
              src="/assets/12.jpg" // Add your second image here
              className="intro-img img-fluid d-block rounded-2"
              alt="courtroom image"
              style={{ maxHeight: "300px" }}
            />
          </div>






          <div className="carousel-item">
            <img
              src="/assets/11.jpg" // Add your second image here
              className="intro-img img-fluid d-block rounded-2"
              alt="courtroom image"
              style={{ maxHeight: "300px" }}
            />
          </div>







          <div className="carousel-item">
            <img
              src="/assets/13.jpg" // Add your second image here
              className="intro-img img-fluid d-block rounded-2"
              alt="courtroom image"
              style={{ maxHeight: "300px" }}
            />
          </div>





          <div className="carousel-item">
            <img
              src="/assets/14.jpg" // Add your second image here
              className="intro-img img-fluid d-block rounded-2"
              alt="courtroom image"
              style={{ maxHeight: "300px" }}
            />
          </div>




          <div className="carousel-item">
            <img
              src="/assets/15.jpg" // Add your second image here
              className="intro-img img-fluid d-block rounded-2"
              alt="courtroom image"
              style={{ maxHeight: "300px" }}
            />
          </div>




          <div className="carousel-item">
            <img
              src="/assets/16.jpg" // Add your second image here
              className="intro-img img-fluid d-block rounded-2"
              alt="courtroom image"
              style={{ maxHeight: "300px" }}
            />
          </div>

          <div className="carousel-item">
            <img
              src="/assets/7.jpg" // Add your second image here
              className="intro-img img-fluid d-block rounded-2"
              alt="courtroom image"
              style={{ maxHeight: "300px" }}
            />
          </div>




          <div className="carousel-item">
            <img
              src="/assets/8.jpg" // Add your third image here
              className="intro-img img-fluid d-block rounded-2"
              alt="court documents"
              style={{ maxHeight: "300px" }}
            />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#imageCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden" color="red">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#imageCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden" color="red">Next</span>
        </button>
      </div>
    </div>
  </div>
</section>


        {/* SERVICII========= */}
        <div className="">
          <div className="row">
            <div className="col">
              <div className="services-section ">
                <div className="services-overlay "></div>

                <div className="services-content container mt-3">
                  <h6 className=" guide-text">SERVICII</h6>

                  <h5 className="lh-base text-center pb-3">
                 " THE HIGH COURT OF SINDH "

                  </h5>
                  <div className="row mt-3 gx-3 flex-column flex-md-row ">
                    <div className="col-md-6">
                      <h5 className="color text-center pb-4">
                        HISTORY
                      </h5>
                      <div className="d-flex align-items-center">
                        <img
                           src="/assets/logo1.jpg"
                          className="barou img-fluid mx-auto d-block rounded-2"
                          alt="sigla barou Bucuresti"
                          width="150"
                          height="150"
                        />
                      </div>
                      <p className="pt-4 px-2">
                      On 21 August 1926, the Sindh Courts Act (Bom. VII of 1926) was passed into law-making provision for the establishment of a Chief Court for the Province of Sindh. On the coming into operation of Part III of the Government of India Act, 1935, on 1 April 1937, Sindh became a separate Province and the Judges of the Court of Judicial Commissioner of Sindh were appointed by Royal Warrant by the British Government.

                      </p>
                      <div className="py-3 text-center">
                        <Link to="/avocatura">
                          <button
                            type="button"
                            className="btn btn-outline-dark mb-4"
                            aria-label="Afla mai multe"
                          >
                            HISTORY
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h5 className="color text-center pb-4">
                      HISTORY
                      </h5>
                      <div className="d-flex align-items-center">
                        <img
                          src="/assets/logo2.jpg"
                          className="unpir img-fluid mx-auto d-block rounded-2"
                          alt="sigla unpir"
                          width="150"
                          height="150"
                        />
                      </div>
                      <p className="pt-4 px-2">
                      At the time of establishment of the High Court of West Pakistan the number of the Judges of the Karachi Bench was almost the same but subsequently it was increased to 15 and on separation of Sindh & Balochistan High Court's 12 Judges were allocated to the Sindh High Court and 3 Judges to Balochistan High Court. The present approved strength of Judges is 28. However, the number of Judges appointed is 24.






                      </p>
                      <div className="py-3 text-center">
                        <Link to="/insolventa">
                          <button
                            type="button"
                            className="btn btn-outline-dark mb-4"
                            aria-label="Afla mai multe"
                          >
                            HISTORY
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CINE SUNTEM */}

        <section className="card py-4 px-3 border-0">
          <div className="row">
            <div className="col-lg-7">
              <div className="card-body">
                <p className="guide-text mb-4">MY PERSONAL ABOUT </p>
                <h5 className="lh-base text-center pb-4">MUHAMMAD MUNIR TIWANO (SAHIL)</h5>

                <p className="text-separator fw-normal">
                Experience: Former Visiting Professor of Law at Dadabhoy University & SMIL Institute of Law, Farmer Principal Army Public School and College System.


                  <br></br>
                  <span className="ms-4"></span>1. My Highlighted Case on behalf of Pakistan's famous blogger, YouTuber, Photographer Islamabad bases Muzamil Hussain Toor or as MHToori against Pakistan Television (PTV) channel.
                  2. Won the 5 cases on behalf of a mother against her sons fraudulently got the property valued 7 Crors.
 &

                  <br></br> <span className="ms-4"></span> 3. Won the case of 47 acres of agricultural land on behalf of the Helpless, innocent Hindu family namely Manro against Hindu influential people supported by the party Ministers. 
                  4. And approximately hundreds of other cases.
                </p>
              </div>
            </div>
            <div className="col-lg-5 d-flex align-items-center justify-content-center">
              <div>
                <img
                  src="/assets/4.jpg"
                  className="intro-img img-fluid d-block rounded-2"
                  alt="two persons at a desk"
                  style={{ maxHeight: "300px" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/*CE NE RECOMANDA========= */}
        <section className="recommendation p-3 bg-image m-3 px-0">
          <h6 className="guide-text ">MY EXPERIENCES</h6>
          <div className="container d-flex flex-column justify-content-center align-items-center">
            <h5 className="h-50 lh-base text-center pb-4">MY PERSONAL EXPERIENCES?</h5>
          </div>
          <div className="row mt-4 flex-column flex-md-row mb-3">
            <div className="col col-md-7 order-md-2">
              <ul className="my-list">
                <li>MY  FIRST EXPERIENCES </li>
                <li> Intellectual property litigation .</li>
                <li> Intellectual Property Disputes                .</li>
                <li> Civil rights litigation                .</li>
                <li>Criminal defense litigation                .</li>
                <li>Family Litigation.</li>
                <li>Legal consulting.</li>
                <li>Power of attorney .</li>
                <li>Landlord and tenant litigation .</li>
                <li>Property dispute litigation .</li>
                <li>Corporate litigation .</li>
                <li>Alternate Dispute Resolution                .</li>
                <li>Business and Commercial Litigation        .</li>
                <li>Civil Litigation        .</li>
                <li>Company Law        .</li>
                <li>Corporate Lawyer        .</li>
                <li>Corporate Legal        .</li>
                
                
                
                                <li>
                  {" "}
                MUNNIR (SAHIL)
                </li>
              </ul>
            </div>
            <div className=" col col-md-5 order-md-2 mt-5">
              <div className="square container d-flex flex-column justify-content-center align-items-center py-5 w-50 border border-white border-4 fw-bold">
                <div>
                  <FontAwesomeIcon icon={faGavel} size="2x" />
                </div>
                {/* <div>10+</div>
                <div>ani de experienta</div> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Acasa;













































































