
import React from 'react'
import './payment.css';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';

function Payment() {
    const { bill } = useParams();
    return (
        <>
            <div className="container-fluid">
                <div className="card">
                    <div className="row">
                        <div id="left-div" className="col-sm-3">
                            <div className="card" id="first">
                                <h5 style={{ color: 'white', textAlign: 'center' }}>Your Total Bill</h5>
                                <h3 style={{ color: 'white', textAlign: 'center' }}>Rs: {bill}</h3>
                            </div>
                        </div>

                        <div className="col-sm-2"></div>
                        <div className="card col-sm-5" style={{ border: "none" }}>
                            <div id="card second">
                                <img
                                    src={require("../img/PayemntQR.png")}
                                    className="img-fluid"
                                    alt=""
                                    style={{ height:"500px", width:"600px "}}
                                />
                                <div className="d-grid gap-2 ">
                                    <button
                                        class="d-grid gap-2 col-4 mx-auto btn rounded-pill "
                                        style={{ backgroundColor: '#071952', color: '#fff' }}
                                        type="button"
                                    >
                                        Pay Rs: {bill}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-2"></div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Payment