import { Layout, Input, Typography } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Logo } from "../../logo";
import SvgIcons from "../../../assests/svg/SvgIcons";
import profile from "../../../assests/image/profile-avatar.png";

interface IProps {
  showDrawer: () => void;
}

export const Navbar: React.FC<IProps> = ({ showDrawer }) => {
  const { Header } = Layout;
  const { Search } = Input;
  const { Text } = Typography;
  const onSearch = (value: string) => console.log(value);

  return (
    <Header className="top-header">
      <Logo />
      <div>
        <Search
          className="searchInput"
          placeholder="Search for anything"
          onSearch={onSearch}
          enterButton
        />
      </div>
      <div className="t">
        <Text underline>Docs</Text>
        <SvgIcons.NotificationSvg />
        <div className="profileContainer">
          <div className="profile">
            <img className="profileIcon" src={profile} alt="profile icon" />
            Adedeji
          </div>
          <div className="notification">
            <SvgIcons.ChevronDown />
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center w-100">
        <div>
          <div className="mobile-hambugger">
            <MenuOutlined style={{ fontSize: "20px" }} onClick={showDrawer} />
          </div>
        </div>
      </div>
    </Header>
  );
};
