import { React, useRef, useState } from "react";
import "./App.css";

import { PDFExport } from "@progress/kendo-react-pdf";

const PDF = () => {
  const [state, setstate] = useState({
    name: "",
    course: "",
    supervisor: "",
    date: "",
  });

  const { name, course, supervisor, date } = state;

  const pdfExportComponent = useRef(null);

  const handleExportPDF = (event) => {
    pdfExportComponent.current.save();
    console.log("Clicked");
  };

  const handleChange = (name) => (event) => {
    setstate({ ...state, error: false, [name]: event.target.value });
  };
  return (
    <div>
      <section>
        <PDFExport ref={pdfExportComponent} paperSize="A4" landscape="true">
          <div className="container borderMain ">
            <div className="my-4">
              <div className="fs-2 fw-bolder pt-3 ">
                CERTIFICATE OF ACHIEVEMENT
              </div>
              <div className="fs-6 pt-5 pb-3 mt-3">This acknowledges that</div>
              <div className="nameMain fw-bold">
                {name === "" && "Rudra Rao"}
                {name !== "" && name}
              </div>
              <div className="fs-6 pt-3">
                has successfully completed&nbsp;
                {course === "" && "Cheese Production Training"}
                {course !== "" && course}
              </div>
              <div className="row py-5 mt-5">
                <div className="col">
                  <div className="container">
                    <div className="row mx-3">
                      <div className="col">
                        <div className="fs-4"> &nbsp; </div>
                        <hr className="hrLine" />
                        <div>
                          {supervisor === ""
                            ? "Rushikesh Pitale, Sr. Software Engineer"
                            : supervisor}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="container">
                    <div className="row mx-3">
                      <div className="col text-start">
                        <div className="fs-4">
                          {date === "" && "February 04, 2021"}
                          {date !== "" && date}
                        </div>
                        <hr className="hrLine" />
                        <div>Date</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PDFExport>
      </section>
      <section>
        <div className="container py-5 mt-5">
          <div className="row">
            <div className="col-6 offset-2">
              <form onSubmit={handleExportPDF}>
                <div className="mb-3">
                  <input
                    type="text"
                    value={name}
                    placeholder="Awarded To"
                    className="form-control inputField"
                    onChange={handleChange("name")}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    value={course}
                    placeholder="For What"
                    className="form-control inputField"
                    onChange={handleChange("course")}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    value={supervisor}
                    placeholder="By Who"
                    className="form-control inputField"
                    onChange={handleChange("supervisor")}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    value={date}
                    placeholder="Date"
                    className="form-control inputField"
                    onChange={handleChange("date")}
                  />
                </div>
                <button type="submit" className="btn btn-primary mt-5">
                  Generate
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PDF;
