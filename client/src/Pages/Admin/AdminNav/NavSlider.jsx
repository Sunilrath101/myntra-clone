import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    Button,
    useDisclosure,
    Grid,
    Flex,
} from '@chakra-ui/react'
import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import { MenuButton, MenuItem, MenuList, Menu } from '@chakra-ui/react';

import MenuIcon from '@mui/icons-material/Menu';
import NotificationCard from '../Dashboard/Card/NotificationCard';
import ProfileCard from '../Dashboard/Card/ProfileCard';
import Logout from '../Dashboard/Card/Logout';
import AddUser from '../AddNewProduct/AddUser';
import AddNewProduct from '../AddNewProduct/AddNewProduct';
function NavSlider({ setTogalDash, setTheme }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>



            <Button variant='ghost' onClick={onOpen}>
                <MenuIcon />
            </Button>
            <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth='1px'>Myntra.com</DrawerHeader>
                    <DrawerBody>
                        <Grid className='center'>
                            <ul>
                                <p className="title">MAIN</p>
                                <li ><DashboardIcon className='icon' /><span>DashBoard</span></li>
                                <p className="title">LISTS</p>

                                <li ><PersonIcon className='icon' /><span>Users</span></li>
                                <li> <ProductionQuantityLimitsIcon className='icon' /><Menu>
                                    <MenuButton  >
                                        Products
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem>Mens</MenuItem>
                                        <MenuItem >Womens</MenuItem>
                                        <MenuItem >Kids</MenuItem>
                                    </MenuList>
                                </Menu></li>
                                <li><BookmarkBorderIcon className='icon' /><span>Orders</span></li>
                                <li ><DeliveryDiningIcon className='icon' /><span>Delivery</span></li>
                                <p className="title">USEFUL</p>

                                <li><QueryStatsIcon className='icon' /><span>Stats</span></li>
                                <li><NotificationImportantIcon className='icon' /><NotificationCard /></li>
                                <p className="title">SERVICES</p>

                                <li><HealthAndSafetyIcon className='icon' /><span>System Health</span></li>
                                <li><PsychologyIcon className='icon' /><span><AddUser/> </span></li>
                                <li><SettingsIcon className='icon' /><span><AddNewProduct/></span></li>
                                <p className="title">USER</p>

                                <li><PersonOutlineIcon className='icon' /><ProfileCard /></li>
                                <li><LogoutIcon className='icon' /> <Logout />  </li>
                            </ul>

                        </Grid>
                        <Flex className='bottom'>
                            <div onClick={() => setTheme(false)} className="colorOption"></div>
                            <div onClick={() => setTheme(true)} className="colorOption"></div>

                        </Flex>

                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}
export default NavSlider;
