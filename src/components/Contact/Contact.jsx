import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Soumyajit_Behera-BIT_MESRA.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section" style={{ minHeight: "92vh" }}>
        <h1 className="project-heading">
          Liên hệ <strong className="purple">với tôi </strong>
        </h1>
        <p style={{ color: "white" }}>Để lại thông tin của bạn</p>
        <Particle />
        <Row
          style={{ justifyContent: "center", position: "relative" }}
          className="mt-4"
        >
          <div className="col-md-3"></div>
          <div className="col-md-3">
            <label htmlFor="exampleFormControlSelect2">
              <span className="purple">Tên</span> của bạn
            </label>
            <input
              type="text"
              className="form-control mt-2"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter name"
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="exampleFormControlSelect2">
              <span className="purple">Email</span> của bạn
            </label>
            <input
              type="text"
              className="form-control mt-2"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="col-md-3"></div>
          <div className="form-group"></div>
        </Row>
        <Row
          style={{ justifyContent: "center", position: "relative" }}
          className="mt-4"
        >
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <label htmlFor="exampleFormControlSelect2">Thông tin</label>
            <input
              type="text"
              className="form-control mt-2"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter subject"
            />
          </div>
          <div className="col-md-3"></div>
          <div className="form-group"></div>
        </Row>
        <Row
          style={{ justifyContent: "center", position: "relative" }}
          className="mt-4"
        >
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <label htmlFor="exampleFormControlSelect2">Lời nhắn</label>
            <textarea
              rows="3"
              type="text"
              className="form-control mt-2"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Tin nhắn"
            />
          </div>
          <div className="col-md-3"></div>
          <div className="form-group"></div>
        </Row>
        <div className="mt-4">
          <Button>Submit</Button>
        </div>
      </Container>
    </div>
  );
}

export default ResumeNew;
