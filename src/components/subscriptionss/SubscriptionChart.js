import Chart from '../templates/Charts/Chart'
import './SubscriptionChart.css'

const SubscriptionChart=(props)=>{
    const chartData = [
        {label:'jan',value:0},
        {label:'feb',value:0},
        {label:'mar',value:0},
        {label:'Apr',value:0},
        {label:'May',value:0},
        {label:'jun',value:0},
        {label:'jul',value:0},
        {label:'Aug',value:0},
        {label:'sep',value:0},
        {label:'Oct',value:0},
        {label:'Nov',value:0},
        {label:'Dec',value:0},
    ];
    for(const subscription of props.filteredSubscriptions){
        const month = subscription.date.getMonth();
        chartData[month].value+=subscription.amount
    }
    return(
       <Chart dataSets={chartData}/>
    )
}
export default SubscriptionChart;