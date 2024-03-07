import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Chào mọi người, Tôi là <span className="purple">Name space </span>
            đến từ <span className="purple"> Nam dong - Đăk Nông</span>
            <br />
            Hiện tại tôi đang là sinh viên của cao đẳng FPT
            <br />
            <br />
            <br />
            Ngoài việc code, một số hoạt động khác mà tôi thích làm!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Chơi game
            </li>
            <li className="about-activity">
              <ImPointRight /> Viết Blog
            </li>
            <li className="about-activity">
              <ImPointRight /> Du lịch
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Hãy nỗ lực xây dựng những điều tạo nên sự khác biệt!"{" "}
          </p>
          <footer className="blockquote-footer">Chat GPT</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
