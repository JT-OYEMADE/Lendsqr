import { Layout } from 'antd';
import { Menu } from './Menu';
import { Navbar } from './Navbar';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../../../style/dashboardLayout.scss'

interface IProps {
  children?: JSX.Element[] | JSX.Element;
  contentClassName?: string;
}

export const DashboardLayout: React.FC<IProps> = ({ children, contentClassName = '' }) => {
  const { Content } = Layout;
  const [visible, setVisible] = useState<boolean>(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const location = useLocation();

  return (
    <div className='dashboard-container'>
      <Layout>
        <Menu onClose={onClose} visible={visible} currentPath={location.pathname} />
        <Layout className='site-layout'>
          <Navbar showDrawer={showDrawer} />
          <Content className={`site-content ${contentClassName}`}>{children}</Content>
        </Layout>
      </Layout>
    </div>
  );
};
