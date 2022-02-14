import React from "react";

import Modal from "./Modal";

const ModalLifeActivity = ({ modalCloseHandler, ...rest }) => {
  return (
    <div>
      <Modal
        className="invoice-modal"
        modalCloseHandler={modalCloseHandler}
        {...rest}
      >
        <div className="left">
          <h2 className="main-title">Invoice #AA-04-19-1890</h2>

          <div className="invoice-head">
            <div className="head-left mt-4">
              <div className="fw-600 mb-2">Garage Lelaval</div>
              <div className="text-small text-dark-4">61 Wellfield Road</div>
              <div className="text-small text-dark-4">Cardiff, CF24 3DG</div>
              <div className="text-small text-dark-4">mail@wonw.xyz</div>
              <div className="text-small text-dark-4">+1 456–980-3004</div>
            </div>

            <div className="head-right">
              <div className="text-manrope fs-14">13 Nov 2019</div>
              <div className="tag pink mt-2">Unpaid</div>
            </div>
          </div>

          <div className="bill-to">
            <div className="bill-to-left d-flex justify-content-between">
              <div className="vector-img-container me-3">
                <img src="./assets/vectors/noded-blue-1.svg" alt="noded" />
              </div>
              <div className="text">
                <h5 className="sus-evidence-word">Noded with</h5>
                <div className="fw-600">2020 Subaru Impreza</div>
                <div className="fw-600">GoodRich tires</div>
              </div>
            </div>
            <div className="bill-to-right">
              <div className="text-lato fs-12 text-blue fw-700">Bill to:</div>
              <div className="fw-600 mb-2 mt-4">Johanne Larose</div>
              <div className="text-small text-dark-4">3 Edgar Buildings</div>
              <div className="text-small text-dark-4">George Street</div>
              <div className="text-small text-dark-4">England, BA1 2FJ</div>
              <div className="text-small text-dark-4">mail@dropdox.com</div>
              <div className="text-small text-dark-4">+1 736–140-1003</div>
            </div>
          </div>

          <div className="billing">
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th></th>
                    <th>SKU</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Oil Change</td>
                    <td>Complete...</td>
                    <td>365</td>
                    <td>$3560</td>
                  </tr>
                  <tr>
                    <td>Tires Change</td>
                    <td>Balance &amp;...</td>
                    <td>420</td>
                    <td>$8400</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="billing-foot mt-5">
            <div className="billing-left">
              <div className="text">
                <div className="title-label fs-10">
                  Is there any evidence of benefit if people without diabetes
                  monitor their blood sugar levels with CGMs? There’s little
                  published research to help answer this question.
                </div>
              </div>
            </div>
            <div className="billing-right">
              <div className="line mb-4">
                <div className="item fw-600">Subtotal</div>
                <div className="item">100.00$</div>
              </div>
              <div className="line">
                <div className="item fw-600">TPS</div>
                <div className="item">5.00$</div>
              </div>
              <div className="line">
                <div className="item fw-600">TVQ</div>
                <div className="item">9.98$</div>
              </div>
              <div className="line mt-2 mb-3">
                <div className="item fw-600">Total</div>
                <div className="item fw-600">114.98$</div>
              </div>
              <div className="line">
                <div className="item fw-600">Balance</div>
                <div className="item fw-600">0.00$</div>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <h3 className="section-title">Pay with</h3>

          <div className="banks">
            <img src="./assets/vectors/mastercard.svg" alt="mastercard" />
            <img src="./assets/vectors/visa.svg" alt="visa" />
            <img src="./assets/vectors/note.svg" alt="note" />
          </div>

          <div className="custom-form-control">
            <label htmlFor="amount">Ammount</label>
            <div className="d-flex">
              <div className="select-container">
                <select className="custom-input" name="currency" id="">
                  <option value="USD">USD</option>
                </select>
              </div>
              <input
                className="flex-grow-1 w-100 ms-2 custom-input"
                type="text"
              />
            </div>
          </div>

          <label htmlFor="description">Description (Optional)</label>
          <textarea name="" id="" rows="4"></textarea>

          <div className="d-flex justify-content-end mt-4 pb-5">
            <button
              onClick={modalCloseHandler}
              className="btn btn-blue btn-rounded"
            >
              Add Transaction
            </button>
          </div>

          <div className="transactions short-vertical-scrollbar mt-4">
            <h3 className="section-title mb-3">Transactions</h3>

            <div className="transaction-item">
              <div>Jun 22, 2021</div>
              <div>10.00$</div>
              <div>VISA</div>
            </div>
            <div className="transaction-item">
              <div>Jun 23, 2021</div>
              <div>4.98$</div>
              <div>VISA</div>
            </div>
            <div className="transaction-item">
              <div>Jun 24, 2021</div>
              <div>100.00$</div>
              <div>CASH</div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalLifeActivity;
