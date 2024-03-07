import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Dự án <strong className="purple">Của tôi </strong>
        </h1>
        <p style={{ color: "white" }}>
          Dưới đây là một số dự án tôi đã thực hiện gần đây.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Clone instagram"
              description="Clone instagram là một ứng dụng mạng xã hội cho phép người dùng chia sẻ ảnh và video, kết nối với bạn bè, gia đình và các người theo dõi khác. Người dùng có thể tạo và chỉnh sửa nội dung của họ thông qua bộ lọc và công cụ chỉnh sửa ảnh tích hợp. Instagram cũng cung cấp các tính năng như Stories và IGTV để chia sẻ nội dung ngắn thời lượng và video dài hơn."
              ghLink="https://github.com/TamLe2312/DuAnMau"
              demoLink="https://github.com/TamLe2312/DuAnMau"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="WibuStore"
              description="Một trang web bán mô hình anime là một nền tảng trực tuyến chuyên cung cấp các sản phẩm mô hình được lấy cảm hứng từ các nhân vật và cảnh trong anime. Trang web này cung cấp một loạt các sản phẩm chất lượng từ các bộ anime phổ biến, thu hút người hâm mộ để mua sắm và sưu tập."
              ghLink="https://github.com/ccxtncntus/wibustore"
              demoLink="https://github.com/ccxtncntus/wibustore"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Nothing"
              description="lorem issum"
              ghLink="https://github.com/ccxtncntus"
              demoLink="https://github.com/ccxtncntus"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
