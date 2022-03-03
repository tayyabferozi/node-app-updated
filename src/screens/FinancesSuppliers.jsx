import React from "react";
import AddBtn from "../components/AddBtn";
import SearchInput from "../components/SearchInput";
import FancyInput from "../components/FancyInput";
import MainLayout from "../layouts/MainLayout";

const dummyData = [
  {
    vector: "./assets/img/supplier-1.png",
    circleColor: "#ECA0A0",
    name: "Napa Pièces d’auto",
    email: "(450) 322-2132",
    contact: "Manon Latulippe",
    poste: 23,
    paidDate: "15/APR/2020",
    lastOne: "12/APR/2020",
    amount: 200,
    currency: "CAD",
  },
  {
    vector: "./assets/img/supplier-2.png",
    circleColor: "#4ACBD3",
    name: "WorldPac Parts",
    email: "(450) 322-2132",
    contact: "Francois Coulombe",
    poste: 2,
    paidDate: "15/APR/2020",
    amount: 200,
    currency: "CAD",
  },
  {
    vector: "./assets/img/supplier-3.png",
    circleColor: "#4ACBD3",
    name: "Dagenais Volvo",
    email: "(450) 322-2132",
    contact: "Isabelle Marechal",
    paidDate: "",
    lastOne: "12/APR/2020",
    amount: 200,
    currency: "CAD",
  },
  {
    vector: "./assets/img/supplier-3.png",
    circleColor: "#4ACBD3",
    name: "Dagenais Volvo",
    email: "(450) 322-2132",
    contact: "Isabelle Marechal",
    paidDate: "",
    lastOne: "12/APR/2020",
    amount: 200,
    currency: "CAD",
  },
];

const FinancesIncome = () => {
  return (
    <MainLayout
      title={"Suppliers"}
      activeLink={"treasury"}
      tabData={{
        img: true,
        tabLinks: true,
        tabGroupName: "finances-tabs",
        data: [
          {
            icon: "./assets/vectors/tab-finances-income.svg",
            iconActive: "./assets/vectors/tab-finances-income-active.svg",
            to: "/finances-income",
          },
          {
            icon: "./assets/vectors/tab-finances-expense.svg",
            iconActive: "./assets/vectors/tab-finances-expense-active.svg",
            to: "/finances-expense",
          },
          {
            icon: "./assets/vectors/tab-finances-suppliers.svg",
            iconActive: "./assets/vectors/tab-finances-suppliers-active.svg",
            to: "/finances-suppliers",
          },
        ],
      }}
    >
      <div className="finances-invoice-main-content">
        <div className="container-fluid">
          <div className="row pt-5">
            <div className="col-12 ps-sm-4 col-sm-9">
              <SearchInput
                withFilter
                placeholder="Search supplier or contact"
              />
            </div>
            <div className="col-12 col-sm-3 py-sm-0 pt-5 d-flex justify-content-start justify-content-sm-end align-items-center">
              <AddBtn pale title="New" />
            </div>
          </div>
          <div className="container-fluid mt-5 px-0">
            <div className="row">
              <div className="col-lg-8">
                <div className="table-wrapper short-vertical-scrollbar">
                  <div className="table">
                    <div className="container-fluid px-0">
                      <div className="row gx-0 table-heading">
                        <div className="col-1"></div>
                        <div className="col-4">
                          <div className="label">Supplier</div>
                        </div>
                        <div className="col-3">
                          <div className="label">Contact</div>
                        </div>
                        <div className="col-3">
                          <div className="label">Categorie</div>
                        </div>
                        <div className="col-1 text-end">
                          <div className="label">Balance</div>
                        </div>
                      </div>
                    </div>
                    {dummyData.map((data, idx) => {
                      return (
                        <div
                          key={"li" + idx}
                          className="row emboss-row mb-3 align-items-center gx-0 py-2 dummy-data"
                        >
                          <div className="col-1 d-flex justify-content-center align-items-center">
                            <img w="true" src={data.vector} alt={data.name} />
                          </div>
                          <div className="col-4 d-flex flex-column gap-1">
                            <div className="name">{data.name}</div>
                            <div className="email">{data.email}</div>
                          </div>
                          <div className="col-3 d-flex flex-column gap-1">
                            <div className="text-inter fw-600 fs-12 mb-1">
                              {data.contact}
                            </div>
                            <div className="last-login">
                              {data.poste ? <>Post {data.poste}</> : "N/A"}
                            </div>
                          </div>
                          <div className="col-3 d-flex flex-column gap-1">
                            <div className="text-blue text-inter fw-500 fs-12 ps-2">
                              Parts
                            </div>
                            {data.lastOne && (
                              <div className="fs-12 fw-600">
                                Last one {data.lastOne}
                              </div>
                            )}
                          </div>
                          <div className="col-1 d-flex flex-column gap-1 text-end">
                            <div className="amount">{data.amount}$</div>
                            <div className="currency">{data.currency}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="col-lg-4 ps-xxl-5">
                <div className="ps-xxl-5 pt-5 pt-lg-0">
                  <div className="d-flex align-items-center">
                    <img
                      src="./assets/img/supplier-1.png"
                      alt="Napa Pièces d’auto"
                    />
                    <div class="ms-3">
                      <div className="fw-700">Napa Pièces d’auto</div>

                      <button className="btn mt-2 btn-emboss round me-3">
                        <img src="./assets/vectors/call.svg" alt="call" />
                      </button>
                      <button className="btn btn-emboss round me-3">
                        <img src="./assets/vectors/email-2.svg" alt="email" />
                      </button>
                      <button className="btn btn-emboss round">
                        <img
                          src="./assets/vectors/location.svg"
                          alt="location"
                        />
                      </button>
                    </div>
                  </div>

                  <div className="inputs mt-5">
                    <FancyInput
                      embossed={false}
                      rootClassName="my-3"
                      prominant
                      label="Nom"
                      id="nom"
                      name="nom"
                      placeholder="Start typing..."
                    />
                    <FancyInput
                      embossed={false}
                      rootClassName="my-3"
                      prominant
                      label="Contact"
                      id="contact"
                      name="contact"
                      placeholder="Start typing..."
                    />
                    <FancyInput
                      embossed={false}
                      rootClassName="my-3"
                      prominant
                      label="Email"
                      id="email"
                      name="email"
                      placeholder="Start typing..."
                    />
                    <div className="emboss-input">
                      <div className="container-fluid px-0">
                        <div className="row px-0">
                          <div className="col-9">
                            <FancyInput
                              embossed={false}
                              rootClassName="my-3"
                              prominant
                              label="Téléphone"
                              id="tel"
                              name="tel"
                              placeholder="Start typing..."
                            />
                          </div>
                          <div className="col-3">
                            <FancyInput
                              embossed={false}
                              rootClassName="my-3"
                              prominant
                              label="Ext."
                              id="ext"
                              name="ext"
                              placeholder="Enter"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <FancyInput
                      embossed={false}
                      rootClassName="my-3"
                      prominant
                      label="Addresse"
                      id="address"
                      name="address"
                      placeholder="Start typing..."
                    />

                    <div className="d-flex justify-content-end mt-4">
                      <AddBtn gradient title="SAVE" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default FinancesIncome;
