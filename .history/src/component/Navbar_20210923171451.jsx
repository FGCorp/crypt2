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
const { Item } = Menu;

function Navbar() {
  return (
    <div className="nav-container">
      {/* <div className="logo-container">
        <Avatar src={icon} size="large"></Avatar>
        <Title level={2} className="logo">
          <Link to="/">Cryptoo</Link>
        </Title>
      </div> */}
      <Menu theme="dark">
        <Item icon={<HomeOutlined />}>
          <Link to="/">Homepage</Link>
        </Item>
        <Item icon={<FundOutlined />}>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Item>
        <Item icon={<MoneyCollectOutlined />}>
          <Link to="/exchanges">Exchanges</Link>
        </Item>
        <Item icon={<BulbOutlined />}>
          <Link to="/news">News</Link>
        </Item>
      </Menu>
    </div>
  );
}

export default Navbar;
