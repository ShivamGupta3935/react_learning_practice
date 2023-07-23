import './ChartBar.css'
const ChartBar=(props)=>{
    let barHeight='0%'
    if(props.maxValue>0){
        barHeight=Math.round((props.value/props.maxValue)*100)+"%"
    }
    return(
        <div className='chart_bar'>
            <div className='chart_bar_inner'>
                <div className='chart_bar_fill' style={{'height':barHeight}}>
                                    </div>
            </div>
            <div className='chart_bar_label'>{props.label}</div>
        </div> 
    )
}
export default ChartBar;