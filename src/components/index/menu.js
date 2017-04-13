import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const menu = function(){
    return (
        <Menu
            style={{width: '100%',minHeight: 750}}
            mode='inline'
            selectedKeys={['1']}
        >   
            <MenuItemGroup title="首页">
              <Menu.Item key="1">首页</Menu.Item>
              <Menu.Item key="2">我的账户</Menu.Item>
            </MenuItemGroup>
        </Menu>
    );
}

export default menu;