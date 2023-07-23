// import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import SubscriptionList from './components/subscriptionss/SubscriptionList';
import Subscription from './components/subscriptionss/Subscription';
import Container from './components/templates/Container';
import NewSubscriptions from './components/subscriptionss/NewSubscription/NewSubscriptions';
import Fitler from './components/subscriptionss/Filter';
import SubscriptionChart from './components/subscriptionss/SubscriptionChart';

const INITIALIZE_SUBSCRIPTION =[
  {
    id:"1",
    date:(new Date('2023','07','15')),
    title:"Monthly Subscription",
    amount:"125.70"
  },
  {
    id:"2",
    date:(new Date('2021','03','05')),
    title:"Quatorly Subscription",
    amount:"425.70"
  },
  {
    id:"3",
    date:(new Date('2020','01','05')),
    title:"Annual Subscription",
    amount:"1125.70"
  }  
]
const App = () => {
  const [subscriptions, setSubscriptions]= useState(INITIALIZE_SUBSCRIPTION)
        
const [filterYear, setFilterYear]=useState('2020');
  // let date = new Date('2023','07','15') ;
  // let title = "Monthly Subscription"
  // let amount = "125.00"
  const addSubscriptionHandler=(data)=>{
    // subscriptions.push(data)
    setSubscriptions(prevState=>{return [data,...INITIALIZE_SUBSCRIPTION]});
    console.log("Add subscription", data);
  }
  const FilterChangeHandler = (data)=>{
       setFilterYear(data)
       console.log("on Filter change", data);
  }
//filter dom using filter data
const filteredSubscriptions=subscriptions.filter((item) =>{
  return item.date.getFullYear().toString()===filterYear;
})


  return (
    <Container className="App">
      <NewSubscriptions onAddSubscription={addSubscriptionHandler}/>
      <Fitler onFilterChange={FilterChangeHandler} selectedFilter={filterYear}/>
    <SubscriptionChart filteredSubscriptions={filteredSubscriptions}/>
      <SubscriptionList subscriptions={filteredSubscriptions}/>


      {/* now we are using && operator */}
      {/* {filteredSubscriptions.length===0 && <h3>No data found</h3>}
      {filteredSubscriptions.length !==0 && filteredSubscriptions.map(subscription=> <Subscription  key={subscription.id} 
      date={subscription.date} title={subscription.title} amount={subscription.amount} />) } */}

     {/* third we did using turnery operator to do apply filter
     {filteredSubscriptions.length===0 ?<h3>No data found </h3>:filteredSubscriptions.map(subscription=> <Subscription  key={subscription.id} 
      date={subscription.date} title={subscription.title} amount={subscription.amount} /> )} */}

      {/* second we did using unique key feature */}
      {/* {filteredSubscriptions.map(subscription=> <Subscription  key={subscription.id} 
      date={subscription.date} title={subscription.title} amount={subscription.amount} /> )} */}

      {/* First we can using staticly */}
      {/* <Subscription date={subscriptions[0].date} title= {subscriptions[0].title} amount= {subscriptions[0].amount} /> */}
      {/* <Subscription date={subscriptions[1].date} title= {subscriptions[1].title} amount= {subscriptions[1].amount} /> */}
      {/* <Subscription date={subscriptions[2].date} title= {subscriptions[2].title} amount= {subscriptions[2].amount} /> */}
      {/* <SubscriptionList subscriptions={filteredSubscriptions} /> */}

    </Container>
  );
}

export default App;
