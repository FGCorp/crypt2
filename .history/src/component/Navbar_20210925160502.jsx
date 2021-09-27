import React, { useState, useEffect } from "react";
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
const { Item } = Menu;

function Navbar() {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large"></Avatar>
        <Title level={2} className="logo">
          <Link to="/">Cryptoo</Link>
        </Title>
      </div>
      <Menu theme="dark">
        <Item key="/" icon={<HomeOutlined />}>
          <Link to="/">Homepage</Link>
        </Item>
        <Item key="/cryptocurrencies" icon={<FundOutlined />}>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Item>
        <Item key="/exchanges" icon={<MoneyCollectOutlined />}>
          <Link to="/exchanges">Exchanges</Link>
        </Item>
        <Item key="/news" icon={<BulbOutlined />}>
          <Link to="/news">News</Link>
        </Item>
      </Menu>
    </div>
  );
}

export default Navbar;
