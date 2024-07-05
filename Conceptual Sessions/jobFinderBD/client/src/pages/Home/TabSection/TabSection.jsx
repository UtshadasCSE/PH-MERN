import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const TabSection = () => {
  return (
    <div className="w-max mx-auto py-5 font-poppins">
      <Tabs>
        <TabList>
          <Tab>Web Development</Tab>
          <Tab>Grapic Design</Tab>
          <Tab>Digital Marketing</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabSection;
