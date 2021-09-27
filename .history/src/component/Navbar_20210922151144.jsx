import React from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";

import icon from "../images/logo192.png";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";

const { Title } = Typography;

function Navbar() {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large"></Avatar>
        <Title level={2} className="logo">
          <Link to="/">Cryptoo</Link>
          {/* <Button className="menu-control-container"></Button> */}
        </Title>
      </div>
    </div>
  );
}

export default Navbar;
