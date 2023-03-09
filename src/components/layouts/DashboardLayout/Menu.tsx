import { Fragment } from 'react';
import { Layout, Drawer } from 'antd';
import { Link } from 'react-router-dom';
import SvgIcons from '../../../assests/svg/SvgIcons'
import '../../../style/sidebar.scss'

interface IProps {
  visible: boolean;
  onClose: () => void;
  currentPath: string;
}

export const Menu: React.FC<IProps> = ({ visible, onClose, currentPath }) => {
  const { Sider } = Layout;

  const links = [
    {
      link: '/users',
      icon:  <SvgIcons.UsersIcon/>,
      title: 'Users',
    },
    {
      link: "",
      icon: <SvgIcons.GuarantorIcon/>,
      title: "Guarantors",
    },
    {
      title: "Loans",
      icon: <SvgIcons.LoanIcon/>,
      link: "",
    },
    {
      title: "Decision Models",
      icon: <SvgIcons.DecisionIcon/>,
      link: "",
    },
    {
      title: "Savings",
      icon: <SvgIcons.SavingsIcon/>,
      link: "",
    },
    {
      title: "Loan Request",
      icon: <SvgIcons.LoanReqIcon/>,
      link: "",
    },
    {
      title: "Whistlist",
      icon: <SvgIcons.WhitelistIcon/>,
      link: "",
    },
    {
      title: "Karma",
      icon: <SvgIcons.KarmaIcon/>,
      link: "",
    },
  ];

  const isCurrentPath = (link: string) =>
    link === currentPath || link === `/${currentPath.split('/')[1]}`;

  const getMenuLinks = () => (
    <div className='menu-links-wrapper'>
      <div className='organisation'>
          <span style={{ marginTop: '2px' }}><SvgIcons.BriefCase /></span>
          Switch Organization
          <span><SvgIcons.DropDown /></span>
        </div>
       <div className='dashTitle'><span style={{ marginTop: '2px' }}><SvgIcons.HomeIcon /></span>Dashboard </div>
      <div className='customerTitle'>
        Customers
      </div>
      <div className='dashboard-links-container customerActContainer'>
        {links.map(({ link, icon, title }) => (
          <Link to={link}>
            <div
              className={`d-flex align-items-center dashboard-link-item customerActivity ${
                isCurrentPath(link) ? 'dashboard-link-item__active active' : ''
              } cursor-pointer`}>
              <span>{icon} &nbsp; {title}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      <Sider className='menu'>{getMenuLinks()}</Sider>

      <Fragment>
        <Drawer
          placement={'left'}
          closable={false}
          onClose={onClose}
          visible={visible}
          width='250'
          key={'left'}
          className='mobile-drawer'>
          <div className='drawer-menu'>{getMenuLinks()}</div>
        </Drawer>
      </Fragment>
    </div>
  );
};
