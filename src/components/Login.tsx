import React from 'react'
import { Row, Col } from 'antd';
import Logo from '../assests/image/logo.svg'
import Lend from '../assests/image/pablo-sign-in 1.svg'
import LoginForm from './LoginForm';
import '../style/login.scss'


function Login() {
  return (
   <Row className='login'>
    <Col className='lendLeft'>
      <img className='logo' src={Logo} alt='logo' />
      <img className='signImage' src={Lend} alt='main-pic' />
    </Col>
    <Col className='lendRight'>
    <img className='logoMobile' src={Logo} alt='logo' />
      <h2 className='welcome'>Welcome!</h2>
      <p className='loginDetails'>Enter details to login.</p>
      <div>
        <LoginForm />
      </div>
    </Col>
   </Row>
  )
}

export default Login