import { Layout } from 'antd';
import '../style/sidebar.scss'
import SvgIcons from "../assests/svg/SvgIcons"
import { useLocation, Link } from 'react-router-dom'
import { CustomerData, BusinessData, SettingData, LogOut } from './sidebarData'

const { Sider } = Layout;

const Sidebar = () => {
  const location = useLocation()
  return (
    <div >
      <Sider className='sideContainer'>
        <div className='organisation'>
          <span style={{ marginTop: '2px' }}><SvgIcons.BriefCase /></span>
          Switch Organization
          <span><SvgIcons.DropDown /></span>
        </div>
        <div className='dashTitle'><span style={{ marginTop: '2px' }}><SvgIcons.HomeIcon /></span>Dashboard </div>
        <div className='customers'>
          <div className='customerTitle'>CUSTOMERS</div>
          <div className='customerActContainer'>
            {CustomerData.map((val, key) => {
              return (
                <Link to={val.link}>
                  <div className={`customerActivity ${location.pathname = val.link ? "active" : ""}`} key={key} >
                    <div>{val.icon}</div>
                    <div>{val.title}</div>
                  </div>
                </Link>

              );
            })}
          </div>
        </div>
        <div className='customers'>
          <div className='customerTitle'>BUSINESSES</div>
          <div className='customerActContainer'>
            {BusinessData.map((val, key) => {
              return (
                <div className='customerActivity' key={key} onClick={() => { window.location.pathname = val.link }}>
                  <div>{val.icon}</div>
                  <div>{val.title}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className='customers'>
          <div className='customerTitle'>SETTINGS</div>
          <div className='customerActContainer'>
            {SettingData.map((val, key) => {
              return (
                <div className='customerActivity' key={key} onClick={() => { window.location.pathname = val.link }}>
                  <div>{val.icon}</div>
                  <div>{val.title}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className='customers'>
          <div className='customerTitle'></div>
          <div className='customerActContainer'>
            {LogOut.map((val, key) => {
              return (
                <div className='customerActivity' key={key} onClick={() => { window.location.pathname = val.link }}>
                  <div>{val.icon}</div>
                  <div>{val.title}</div>
                </div>
              );
            })}
          </div>
        </div>
      </Sider>
    </div>
  )
}

export default Sidebar;