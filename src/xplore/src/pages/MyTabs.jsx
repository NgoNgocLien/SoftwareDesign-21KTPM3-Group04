import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getTopicByUserAction } from '../redux/actions/UserAction';
import Loading from '../components/loading/Loading';

const MyTabs = () => {
  const dispatch = useDispatch();
  const [tabsData, setTabsData] = useState([]);
  const {topic, user_login} = useSelector(state => state.UserReducer);
  const {loading} = useSelector(state => state.LoadingReducer);

  useEffect(() => {

    // if followed topic === null, then get followed topic from database
    if (topic === null){
      dispatch(getTopicByUserAction(user_login?.id_user))
    } else {

      // if followed topic !== null, then get relevant posts
      // const fetchPost = async () => {
      //   try {
      //     const post = await userService

      //     console.log(data);
      //   } catch (error) {
      //     console.error('Error fetching data:', error);
      //   }
      // };

      // fetchPost();
      const tabsData = [
        { title: 'Tab 1', content: 'Content for Tab 1' },
        { title: 'Tab 2', content: 'Content for Tab 2' },
        { title: 'Tab 3', content: 'Content for Tab 3' },
        { title: 'Tab 3', content: 'Content for Tab 3' },
      ];
  
      setTabsData(tabsData)
    }

  }, [topic]); 


  return (
    loading 
    ? (
      <Loading/>
    ): (
      <Tabs>
        <TabList>
          {tabsData.map((tab, index) => (
            <Tab key={index}>{tab.title}</Tab>
          ))}
        </TabList>

        {tabsData.map((tab, index) => (
          <TabPanel key={index}>
            <h2>{tab.title}</h2>
            <p>{tab.content}</p>
          </TabPanel>
        ))}
      </Tabs>
    )
  );
};

export default MyTabs;