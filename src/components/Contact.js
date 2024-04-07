
import React from 'react'
import Footer from './Footer'

function Contact() {
    return (
        <>
            <h1 class="fs-1 text-primary text-center mt-2">Feedback</h1>
            <div class="container mt-4 mb-4">
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                            aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner Feedback">
                        <div class="carousel-item active">
                            <div class="card p-4 bg-primary">
                                <div class="row mb-4">
                                    <div class="col-sm-4"></div>
                                    <div class="col-sm-2">
                                        <div class="card bg-primary" style={{border: "none"}}>
                                            <img class="rounded-circle" height="150" width="150" src={require("../img/profile.png")} alt="" />
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="card bg-primary" style={{border: "none"}}>
                                            <p class="fs-5">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Cumque recusandae deleniti iusto tempore voluptate optio
                                                odit, quis dignissimos asperiores quidem!
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-sm-2"></div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="card bg-primary p-4">
                                <div class="row mb-4">
                                    <div class="col-sm-4"></div>
                                    <div class="col-sm-2">
                                        <div class="card bg-primary" style={{border: "none"}}>
                                            <img class="rounded-circle" height="150" width="150" src={require("../img/profile.png")} alt="" />
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="card bg-primary" style={{border: "none"}}>
                                            <p class="fs-5">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Cumque recusandae deleniti iusto tempore voluptate optio
                                                odit, quis dignissimos asperiores quidem!
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-sm-2"></div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="card bg-primary p-4">
                                <div class="row mb-4">
                                    <div class="col-sm-4"></div>
                                    <div class="col-sm-2">
                                        <div class="card bg-primary" style={{border: "none"}}>
                                            <img class="rounded-circle" height="150" width="150" src={require("../img/profile.png")} alt="" />
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="card bg-primary" style={{border: "none"}}>
                                            <p class="fs-5">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Cumque recusandae deleniti iusto tempore voluptate optio
                                                odit, quis dignissimos asperiores quidem!
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-sm-2"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden text-primary">Next</span>
                    </button>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    )
}

export default Contact