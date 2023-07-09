import React, { useState } from 'react'

export default function Payment({ amount }) {
  const [paymentMethod, setPaymentMethod] = useState('');
  return (
    <div className="row" style={{ width: "100%", margin: "auto", textAlign: "center" }}>
      <div className="col-xs-12 col-md-4" style={{ width: "50%", margin: "auto" }}>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title my-3">
              Payment Details
            </h3>
            <div className="checkbox pull-right">
              <label>
                <input type="checkbox" />
                Remember
              </label>
            </div>
          </div>
          <div className="panel-body my-2">
            <form role="form">
              <div className="form-group">
                <label for="cardNumber">
                  CARD NUMBER</label>
                <div className="input-group my-4">
                  <input type="text" className="form-control" id="cardNumber" placeholder="Valid Card Number"
                    required autofocus />
                  <span className="input-group-addon"><span className="glyphicon glyphicon-lock"></span></span>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-7 col-md-7">
                  <div className="form-group" style={{ display: "flex" }}>
                    <label for="expityMonth" className='mx-3'>
                      EXPIRY DATE</label>
                    <div className="col-xs-5 col-lg-4 pl-ziro mx-2">
                      <input type="text" className="form-control" id="expityMonth" placeholder="MM" required />
                    </div>
                    <div className="col-xs-5 col-lg-4 pl-ziro">
                      <input type="text" className="form-control" id="expityYear" placeholder="YY" required /></div>
                  </div>
                </div>
                <div className="col-xs-3 col-md-5 pull-right">
                  <div className="form-group">
                    <label for="cvCode">
                      CVV CODE</label>
                    <input type="password" className="form-control" id="cvCode" placeholder="CVV" required />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <ul className="nav nav-pills nav-stacked" style={{ justifyContent: "center" }}>
          <li className="active">Final Payment {amount}</li>
        </ul>
        <br />
        <a className="btn btn-success btn-lg btn-block" role="button" onClick={()=>alert("Payment Successfully")}>Pay</a>
      </div>
    </div>
  );
};