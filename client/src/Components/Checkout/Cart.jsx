import {
  Box,
  Button,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React from "react";
import Bag from "./Bag";
import "./cart.css";
import logo from "./Shop24.jpeg";
import secure from "./secure.png";
import Address from "./Address";
import Payment from "./Payment";
import { useState } from "react";

const Cart = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleClick = () => {
    console.log("sahil");
    setTabIndex(tabIndex + 1);
  };

  const handleTabsChange = (index) => {
    setTabIndex(index);
  };
  return (
    <div>
      <div className="logos-div">
        <img src={logo} className="logo" alt="" />
        <div className="secure-div">
          <img src={secure} className="logo2" alt="" />
          <p>1 0 0 % S e c u r e</p>
        </div>
      </div>
      <Box>
        <Tabs
          align="center"
          colorScheme={"green"}
          size="sm"
          className="chakraTab"
          index={tabIndex}
          onChange={handleTabsChange}
        >
          <TabList>
            <Tab>BAG</Tab>
            <p>_ _ _ _ _</p>
            <Tab>ADDRESS</Tab>
            <p>_ _ _ _ _</p>
            <Tab>PAYMENT</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Bag />
            </TabPanel>
            <TabPanel>
              <Address />
            </TabPanel>
            <TabPanel>
              <Payment />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </div>
  );
};

export default Cart;
