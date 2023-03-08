import {
  Box,
  Flex,
  Stack,
  Collapse,
  useColorModeValue,
  useDisclosure,
 } from '@chakra-ui/react';
 import { Logo } from './logo';
// import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { Input } from 'antd';
import { Typography } from 'antd';
import SvgIcons from '../assests/svg/SvgIcons';
import profile from '../assests/image/profile-avatar.png';
import '../style/index.scss'


const { Text } = Typography;
const { Search } = Input;
const onSearch = (value: string) => console.log(value);

export const NavBar = () => {
  const { isOpen } = useDisclosure();
  return (
   <Box className='bg-lend'> 
      <Flex>
        <Logo/>
        <Flex>
          <Search className='searchInput' placeholder="Search for anything" onSearch={onSearch} enterButton />
        </Flex>
        <Flex>
          <DesktopNav />
        </Flex>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
   </Box>
  );
 };

 const DesktopNav = () => {
  return (
   <Stack direction={'row'}>
      
      <Text underline>Docs</Text>
      <SvgIcons.NotificationSvg />
      <div className='profileContainer'>
        <div className='profile'>
          <img className='profileIcon' src={profile} alt='profile icon' />Adedeji
        </div>
        <div className='notification'>
          <SvgIcons.ChevronDown />
        </div>
      </div>
   </Stack>
  );
 };

 const MobileNav = () => {
  return (
   <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
      <Search placeholder="input search text" onSearch={onSearch} enterButton />
   </Stack>
  );
 };