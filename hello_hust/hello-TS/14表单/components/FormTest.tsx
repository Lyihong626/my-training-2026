import React from 'react'
import '../less/index.less'
import { Button, Form, Input, Select, Cascader, DatePicker, InputNumber } from 'antd';

interface Option {
  value: string | number;
  label: string;
  children?: Option[];
}

const options: Option[] = [
  {
    value: '河南',
    label: '河南',
    children: [
      {
        value: '郑州',
        label: '郑州',
        children: [
          { value: '金水', label: '金水' },
          { value: '二七', label: '二七' },
        ],
      },
      {
        value: '洛阳',
        label: '洛阳',
        children: [
          { value: '洛龙', label: '洛龙' },
          { value: '涧西', label: '涧西' },
        ],
      },
    ]
  },
  {
    value: '黑龙江', label: '黑龙江', children: [
      {
        value: '哈尔滨',
        label: '哈尔滨',
        children: [
          { value: '道里', label: '道里' },
          { value: '南岗', label: '南岗' },
        ],
      },
      {
        value: '齐齐哈尔',
        label: '齐齐哈尔',
        children: [
          { value: '龙沙', label: '龙沙' },
          { value: '建华', label: '建华' },
        ],
      },
    ]
  }
]

const { RangePicker } = DatePicker;

export default function FormTest() {
  //获取表单实例
  const [form] = Form.useForm();
  const handlesubmit = (values: any) => {
    const formData = { ...values };
    console.log('处理之前的表单数据:', values);
    //将时间范围转换为时间戳
    if (formData.timerange) {
      const [start, end] = formData.timerange;
      formData.timerange = [start.valueOf(), end.valueOf()];
    }
    //数字输入框的值转为number
    if (!formData.num) {
      formData.num = 0;
    }
    //用户名
    if (!formData.username.trim())
      formData.username = undefined;

    //爱好  空数组情况
    if (Array.isArray(formData.hobbies) && formData.hobbies.length === 0)
      formData.hobbies = undefined;
    //地址 空数组情况
    if (Array.isArray(formData.address) && formData.address.length === 0)
      formData.address = undefined;

    //输出
    console.log('处理后的表单数据：', formData);
    form.resetFields();
  };
  return (
    // 选择器、时间范围筛选框（时间戳）、级联选择器、输入框（number，数字，可清除）、输入框（没有数据为undefined）
    <div className='outer'>
      <Form
        form={form}//绑定表单实例
        name='bacis'
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        onFinish={handlesubmit}//提交回调函数
      >
        <div style={{ display: 'flex', justifyContent: 'center' }}><h1>表单</h1></div>
        <Form.Item
          label='用户名'
          name='username'
        >
          <Input allowClear />
          {/*没有数据或空串默认为undefined*/}
        </Form.Item>
        <Form.Item
          label='时间范围'
          name='timerange'
        >
          <RangePicker />
        </Form.Item>
        <Form.Item
          label='输入数字'
          name='num'
        // rules={}
        >
          {/* 只能输入数字 */}
          <Input allowClear
            onChange={(e) => {
              //过滤非数字
              const value = e.target.value.replace(/[^0-9.]/g, '');
              //Input的值是由Form控制的，修改了事件对象的value，但Form里的数据没变
              //更新表单字段值
              form.setFieldsValue({ num: value });
            }}
          />
        </Form.Item>
        <Form.Item
          label='爱好'
          name='hobbies'
        >
          <Select
            mode="multiple"
            style={{ width: '100%' }}
            allowClear
            options={[
              { value: '钓鱼', label: '钓鱼' },
              { value: '游泳', label: '游泳' },
              { value: '跑步', label: '跑步' },
              { value: '唱歌', label: '唱歌', disabled: true },
            ]}
          />
        </Form.Item>
        <Form.Item
          label='家庭地址'
          name='address'
        >
          <Cascader options={options} />
        </Form.Item>
        <Form.Item
          wrapperCol={{ span: 24 }}
          style={{ display: 'flex', justifyContent: 'center' }}>
          <Button type='primary' htmlType='submit'>提交</Button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Button type='primary' htmlType='reset'>清空</Button>
        </Form.Item>
      </Form>
    </div>
  )
}
