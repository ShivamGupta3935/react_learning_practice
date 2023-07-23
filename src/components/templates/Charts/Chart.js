import './Chart.css'
import ChartBar from './ChartBar'
const Chart =(props)=>{
    const dataSetValue= props.dataSets.map(dataset=>dataset.value)
    const max = Math.max(...dataSetValue)

    return(
        <div className='chart'>
            {props.dataSets.map((data)=>{
                return <ChartBar value={data.value} 
                 label={data.label}
                 key={data.label}
                 maxValue={max}
                 />
            })}
        </div>
    )
}
export default Chart


// [{value:"", label:'',key:"",mxValue:''},{},{}]