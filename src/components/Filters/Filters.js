import { Select, Space, Divider } from "antd";
const { Option } = Select;
const Filter = () => {
  return (
    <>
      <Space
        className="filter-container"
        size="large"
        split={<Divider type="vertical" />}
        wrap
      >
        <Select
          placeholder="select"
          style={{
            width: 120,
          }}
          allowClear
        >
          <Option value="lucy">Lucy</Option>
        </Select>

        <Select
          placeholder="select"
          style={{
            width: 120,
          }}
          allowClear
        >
          <Option value="lucy">Lucy</Option>
        </Select>

        <Select
          placeholder="select"
          style={{
            width: 120,
          }}
          allowClear
        >
          <Option value="lucy">Lucy</Option>
        </Select>

        <Select
          placeholder="select"
          style={{
            width: 120,
          }}
          allowClear
        >
          <Option value="lucy">Lucy</Option>
        </Select>
      </Space>
    </>
  );
};

export default Filter;
