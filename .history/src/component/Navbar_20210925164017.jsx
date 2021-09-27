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

  const handleResize = (e) => setScreenSize(e);
  useEffect(() => {
    console.log(window.innerWidth);
    window.addEventListener("resize", (e) => handleResize(e.target.innerWidth));

    return () => window.removeEventListener("onresize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize > 768) {
      setActiveMenu(true);
    } else {
      setActiveMenu(false);
    }
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large"></Avatar>
        <Title level={2} className="logo">
          <Link to="/">Cryptoo</Link>
        </Title>
        <Button
          style={{ border: "none", position: "absolute", right: 0 }}
          type="ghost"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <MenuOutlined
            style={{
              color: "white",
              fontSize: "1.2rem",
              display: screenSize > 768 ? "none" : "inline",
            }}
          />
        </Button>
      </div>
      {activeMenu && (
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
      )}
    </div>
  );
}

export default Navbar;
