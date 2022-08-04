import { Layout } from "antd";

import React from "react";
import "./app.css";
import Filter from "./components/Filters/Filters";
const { Content } = Layout;

const App = () => (
  <Layout className="layout">
    <Content className="site-layout">
      <div className="site-layout-content">
        <h1>
          <strong>Search properties to rent</strong>
        </h1>

        <Filter />
      </div>
    </Content>
  </Layout>
);

export default App;
