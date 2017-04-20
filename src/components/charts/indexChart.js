import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts";
import { Select,DatePicker } from 'antd';
import React, {Component} from "react";
import ReactDom from 'react-dom';
import styles from "./chart.css";

const {RangePicker} = DatePicker;
const data = [
      {name: '现金支付', "李书东": 4000, "吴台松": 2400, "总金额": 6400},
      {name: '支付宝', "李书东": 3000, "吴台松": 1398, "总金额": 4300},
      {name: '微信支付', "李书东": 2000, "吴台松": 9800, "总金额": 11200},
      {name: '刷卡支付', "李书东": 2780, "吴台松": 3908, "总金额": 6000},
      {name: '会员支付', "李书东": 1890, "吴台松": 4800, "总金额": 6000},
      {name: '优惠折扣', "李书东": 2390, "吴台松": 3800, "总金额": 6300}
];

class SimpleLineChart extends Component{
  constructor(props){
    super(props);
    this.state={
      width: 0
    };
  }
  
  componentDidMount(){
      this.setState({
          width: this.div.offsetWidth-50
      });
  }

	render () {
  	return (
      <div className={styles.indexChart} ref={(div)=>this.div=div}>
        <div className={styles.chartController}>
           <Select defaultValue="姚佳便利店" style={{ width: 120,marginRight: 8  }} size="small">
              <Option value="姚佳便利店">姚佳便利店</Option>
              <Option value="I DO黄金">I DO黄金</Option>
              <Option value="拉亚汉堡">拉亚汉堡</Option>
            </Select>
            <RangePicker size="small" style={{ width: 220}} />
        </div>
        <LineChart width={this.state.width} height={300} data={data} ref={(chart)=>this.chart = chart}>
          <XAxis dataKey="name" padding={{left: 30, right: 30}}/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend />
          <Line type="monotone" dataKey="吴台松" stroke="#8884d8" />
          <Line type="monotone" dataKey="李书东" stroke="#82ca9d" />
          <Line type="monotone" dataKey="总金额" stroke="#82ca9d" activeDot={{r: 8}} />
        </LineChart>
      </div>
    );
  }
}

export default SimpleLineChart;