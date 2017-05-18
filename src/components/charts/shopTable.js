import { Table } from 'antd';

const columns = [{
  title: '门店名称',
  dataIndex: 'name',
}, {
  title: '租户名称',
  dataIndex: 'rent',
}, {
  title: '行业名称',
  dataIndex: 'industryname',
},{
  title: "店长",
  dataIndex: 'master'
},{
  title: "联系电话",
  dataIndex: "tel",
},{
    title: '经营状态',
    dataIndex: "status"
}

];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    rent : "万达广场",
    industryname: "中国万达",
    master: "培培",
    tel: '15699898908',
    status: "营业中"
  });
}

class App extends React.Component {
  state = {
    selectedRowKeys: [],  // Check here to configure the default column
  };
  
  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  }
  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      selections: [{
        key: 'all-data',
        text: 'Select All Data',
        onSelect: () => {
          this.setState({
            selectedRowKeys: [...Array(46).keys()],  // 0...45
          });
        },
      }, {
        key: 'odd',
        text: 'Select Odd Row',
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          this.setState({ selectedRowKeys: newSelectedRowKeys });
        },
      }, {
        key: 'even',
        text: 'Select Even Row',
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          this.setState({ selectedRowKeys: newSelectedRowKeys });
        },
      }],
      onSelection: this.onSelection,
    };
    return (
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    );
  }
}

export default App;