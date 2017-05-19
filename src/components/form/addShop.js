import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import React , {Component} from "react";
const FormItem = Form.Item;
const Option = Select.Option;

const residences = [{
  value: 'guangdong',
  label: "广东省",
  children: [{
    value: 'shenzhen',
    label: '深圳市',
    children: [{
      value: 'nanshan',
      label: '南山区',
    }],
  }],
}, {
  value: 'shandong',
  label: '山东省',
  children: [{
    value: 'dezhou',
    label: '德州市',
    children: [{
      value: 'pingyuan',
      label: '平原县',
    }],
  }],
}];

class RegistrationForm extends Component {
  state = {
    autoCompleteResult: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }


  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }

  checkConfirm = (rule, value, callback) => {
    const form = this.props.form;
    if (value ) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  handleWebsiteChange = (value) => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 14,
          offset: 6,
        },
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select className="icp-selector">
        <Option value="86">+86</Option>
      </Select>
    );

    return (
      <Form onSubmit={this.handleSubmit}>
          <FormItem
            {...formItemLayout}
            label="电话"
          >
            {getFieldDecorator('phone', {
              rules: [{ required: true, message: '请输入电话号码' }],
            })(
              <Input addonBefore={prefixSelector} />
            )}
        </FormItem>
        <FormItem
            {...formItemLayout}
            label="门店名称"
          >
            {getFieldDecorator('shopname', {
              rules: [{ required: true, message: '请输入门店名称' }],
            })(
              <Input />
            )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="邮箱"
          hasFeedback
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: '请输入正确的邮箱',
            }, {
              required: true, message: '请输入邮箱',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label={(
            <span>
              优惠限制&nbsp;
              <Tooltip title="为了您的资金安全，每次给予顾客的最大优惠金额。">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          )}
          hasFeedback
        >
          {getFieldDecorator('price', {
            rules: [{ required: true, message: '请输入优惠限制', whitespace: true }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="所在城市"
        >
          {getFieldDecorator('residence', {
            initialValue: ['guangdong', 'shenzhen', 'nanshan'],
            rules: [{ type: 'array', required: true, message: '请选择城市！' }],
          })(
            <Cascader options={residences} />
          )}
        </FormItem>
        {/*<FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" size="large">确认</Button>
        </FormItem>*/}
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);

export default WrappedRegistrationForm;