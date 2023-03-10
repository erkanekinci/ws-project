import React from 'react';
import * as bootstrap from 'bootstrap'
import { Link } from 'react-router-dom';
import pic from "../images/hizmet.png"
import ekippic from "../images/ekip.png"
import skala from "../images/skala.png"


class HomePage extends React.Component {



    render() {
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
        const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

        return (


            <div className='container-fluid'>
                <div class="container text-center mb-3" >
                    <h1 className='mb-3'>NEDEN BİZ?</h1>

                    <div class="row justify-content-start">
                        <div class="col-4 ">
                            <figure class="figure">
                                <img src={pic} class="figure-img img-fluid rounded" alt="..."/>
                                    <figcaption class="figure-caption">Hızlı ve Kaliteli Hizmet</figcaption>
                            </figure>
                            

                        </div>
                        <div class="col-4 ">
                        <figure class="figure">
                                <img src={ekippic} class="figure-img img-fluid rounded" alt="..."/>
                                    <figcaption class="figure-caption">Uzman Bir Ekip</figcaption>
                            </figure>
                            
                        </div>
                        <div class="col-4 ">
                        <figure class="figure">
                                <img src={skala} class="figure-img img-fluid rounded" />
                                    <figcaption class="figure-caption">Her ihtiyacınıza yönelik paranızın  </figcaption>
                                    <figcaption class="figure-caption"> karşılığını veren geniş ürün skalası</figcaption>
                            </figure>
                        </div>
                        

                    </div>


                </div>



                <div align="center" className='mb-5 p-3'>
                    <h1 className='mb-4'>Tıklayın, Hemen Online Bir Teklif Alın
                    </h1>

                    <Link to="/teklif-al">
                        <button className='btn btn-primary mb-3 btn-lg  '  >
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-hand-index" viewBox="0 0 20 20">
                                <path d="M6.75 1a.75.75 0 0 1 .75.75V8a.5.5 0 0 0 1 0V5.467l.086-.004c.317-.012.637-.008.816.027.134.027.294.096.448.182.077.042.15.147.15.314V8a.5.5 0 1 0 1 0V6.435a4.9 4.9 0 0 1 .106-.01c.316-.024.584-.01.708.04.118.046.3.207.486.43.081.096.15.19.2.259V8.5a.5.5 0 0 0 1 0v-1h.342a1 1 0 0 1 .995 1.1l-.271 2.715a2.5 2.5 0 0 1-.317.991l-1.395 2.442a.5.5 0 0 1-.434.252H6.035a.5.5 0 0 1-.416-.223l-1.433-2.15a1.5 1.5 0 0 1-.243-.666l-.345-3.105a.5.5 0 0 1 .399-.546L5 8.11V9a.5.5 0 0 0 1 0V1.75A.75.75 0 0 1 6.75 1zM8.5 4.466V1.75a1.75 1.75 0 1 0-3.5 0v5.34l-1.2.24a1.5 1.5 0 0 0-1.196 1.636l.345 3.106a2.5 2.5 0 0 0 .405 1.11l1.433 2.15A1.5 1.5 0 0 0 6.035 16h6.385a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.271-2.715a2 2 0 0 0-1.99-2.199h-.581a5.114 5.114 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.632 2.632 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046l-.048.002zm2.094 2.025z" />
                            </svg>
                            Online Teklif Al
                        </button>
                    </Link>
                </div>






            </div>

        )

    }
};



export default HomePage;