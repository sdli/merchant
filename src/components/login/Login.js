import { Form, Icon, Input, Button, Checkbox } from 'antd';
import styles from './loginForm.css';

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
    constructor(props){
        super(props);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
        if (!err) {
            console.log('Received values of form: ', values);
        }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <h1 className={styles.center}>云东家商户中心</h1>
                <div className={styles.loginPosition}>
                    <Form onSubmit={this.handleSubmit} className={styles.loginForm}>
                        <FormItem>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: '请输入用户名!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="账户" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入密码!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>记住我</Checkbox>
                            )}
                        <a className={styles.loginFormForgot}  href="">忘记密码</a>
                        <Button type="primary" htmlType="submit" className={styles.loginFormButton}>
                            登录
                        </Button>
                        （没有账户）： <a href="">购买云东家收银机!</a>
                        </FormItem>
                    </Form>
                </div>
            </div>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm;