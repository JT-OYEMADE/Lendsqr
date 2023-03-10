import { useState, useEffect } from "react";
import { Table, Dropdown, Menu } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import SvgIcons from "../assests/svg/SvgIcons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Filter from "./filter";
import { IUserDetails } from "../types";

const Tabl = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [active, setActive] = useState(1);
  const [columns] = useState([
    {
      title: [
        <span>
          <Filter />
        </span>,
      ],
      dataIndex: "orgName",
    },
    {
      title: ["USERNAME", <SvgIcons.FilterIcon />],
      dataIndex: "userName",
    },
    {
      title: ["EMAIL", <SvgIcons.FilterIcon />],
      dataIndex: "email",
    },
    {
      title: ["PHONE NUMBER", <SvgIcons.FilterIcon />],
      dataIndex: "phoneNumber",
    },
    {
      title: ["DATE JOINED", <SvgIcons.FilterIcon />],
      dataIndex: "createdAt",
    },
    {
      title: ["STATUS", <SvgIcons.FilterIcon />],
      dataIndex: "",
    },
    {
      title: "",
      dataIndex: "operation",
      render: (_: any, record: IUserDetails) => (
        <Dropdown overlay={getMenu(record.id)} placement="bottom">
          <MoreOutlined style={{ fontSize: "1.2rem", cursor: "pointer" }} />
        </Dropdown>
        
      ),
    },
  ]);
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    axios
      .get("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/")
      .then((res) => {
        console.log(res);
        setDataSource(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const getMenu = (userId: string) => (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <span onClick={() => navigate("/user", { state: { userId } })}>
              {" "}
              <SvgIcons.EyeIcon /> View Details
            </span>
          ),
        },
      ]}
    />
  );

  const activeClick = (id: number) => {
    setActive(id);
  };
  return (
    <div>
      <Table
        pagination={{
          current: page,
          pageSize: pageSize,
          total: 100,

          onChange: (page, pageSize) => {
            setPage(page);
            setPageSize(pageSize);
            activeClick(active);
          },
        }}
        columns={columns}
        dataSource={dataSource}
        onRow={(record: any, index?: number) => {
          return {
            // onClick: () => {
            //   navigate('/user', { state: { userId: record.id } });
            // },
          };
        }}
      />
    </div>
  );
};

export default Tabl;
