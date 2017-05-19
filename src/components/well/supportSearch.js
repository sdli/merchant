import { Icon, Input, AutoComplete } from 'antd';
import styles from "./support.css";

const Option = AutoComplete.Option;
const OptGroup = AutoComplete.OptGroup;
const dataSource = [{
  title: '话题',
  children: [{
    title: '操作说明',
    count: 10000,
  }, {
    title: '如何入库？',
    count: 10600,
  }],
}, {
  title: '问题',
  children: [{
    title: '操作问题找谁？',
    count: 60100,
  }, {
    title: '售后电话多少',
    count: 30010,
  }],
}, {
  title: '文档',
  children: [{
    title: '在线文档查看',
    count: 100000,
  }],
}];

function renderTitle(title) {
  return (
    <span>
      {title}
      <a
        style={{ float: 'right' }}
        href="/#/support"
        target="_blank"
        rel="noopener noreferrer"
      >更多
      </a>
    </span>
  );
}

const options = dataSource.map(group =>
  <OptGroup
    key={group.title}
    label={renderTitle(group.title)}
  >
    {group.children.map(opt =>
      <Option key={opt.title} value={opt.title}>
        {opt.title}
        <span className={styles.certainSearchItemCount}>{opt.count} 人 关注</span>
      </Option>)
    }
  </OptGroup>).concat([
    <Option disabled key="all" className="show-all">
      <a
        href="https://www.google.com/search?q=antd"
        target="_blank"
        rel="noopener noreferrer"
      >查看所有结果</a>
    </Option>,
  ]);

function Complete() {
  return (
    <div className="certain-category-search-wrapper" style={{ width: 480,margin:"32px auto" }}>
      <AutoComplete
        className={styles.certainCategorySearch}
        dropdownClassName={styles.certainCategorySearchDropdown}
        dropdownMatchSelectWidth={false}
        dropdownStyle={{ width: 300 }}
        size="large"
        style={{ width: '100%' }}
        dataSource={options}
        placeholder="输入问题进行搜索"
        optionLabelProp="value"
      >
        <Input suffix={<Icon type="search" className={styles.certainCategoryIcon} />} />
      </AutoComplete>
    </div>
  );
}

export default Complete;