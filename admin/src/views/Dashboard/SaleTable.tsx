import React from 'react';
import PageWrapper from '@components/PageWrapper';
import FormatterLocale from '@components/FormatterLocale';
import { Card, Table, Button, Input, Divider, Pagination, Modal, notification, Icon } from 'antd';
import { ordersList, deleteOrders } from '@api/orders';
import styles from '../Order/list.module.scss';
import { format } from '@utils/tools';
import emitter from '@utils/ev';
const { confirm } = Modal;

interface BasicTableState {
  olderList: any[];
  meta: any;
  eventEmitter: any;
  searchData: {
    page: number;
    keyword: string;
    time: any;
  };
}

const Search = Input.Search;
class BasicTable extends React.Component<{}, BasicTableState> {
  status = ['正常', '维护', '已下线', '异常'];
  styles = ['progress', 'maintain', 'offline', 'error'];
  state = {
    olderList: [],
    eventEmitter: '',
    searchData: {
      page: 0,
      keyword: '',
      time: ''
    },
    meta: {
      current_page: 1,
      per_page: 10,
      count: 5,
      total: 5,
      total_pages: 1
    }
  };

  componentDidMount() {
    this.initData();
    let eventEmitter = emitter.addListener('timeChange', time => {
      this.setState(
        {
          searchData: {
            page: 0,
            keyword: '',
            time: time
          }
        },
        () => {
          this.initData();
        }
      );
    });
    this.setState({
      eventEmitter
    });
  }
  componentWillUnmount() {
    emitter.removeListener(this.state.eventEmitter, res => {});
  }
  initData = () => {
    ordersList(this.state.searchData).then((res: any) => {
      console.log(res.data.data.data);
      const data = res.data.data.data;
      this.setState({
        olderList: data,
        meta: res.data.data.meta
      });
    });
  };
  handleSearch = (value: any) => {
    let searchData = this.state.searchData;
    searchData.keyword = value;
    searchData.page = 0;
    this.setState({
      searchData: searchData
    });
    this.initData();
  };

  onChange(pageNumber: number) {
    let searchData = this.state.searchData;
    searchData.page = pageNumber;
    this.setState({
      searchData: searchData
    });
    this.initData();
  }
  delOrder = (id: string) => {
    confirm({
      title: '删除订单',
      content: '是否确定删除订单',
      onOk: () => {
        deleteOrders(id).then((res: any) => {
          console.log(res.data);
          if (res.data.code == 200) {
            notification.open({
              message: '操作成功',
              description: res.data.msg,
              icon: <Icon type="smile" style={{ color: '#108ee9' }} />
            });
            this.initData();
          }
        });
      },
      onCancel: () => {}
    });
  };

  render() {
    const Extra = (
      <div>
        <Search
          placeholder="搜索"
          onSearch={this.handleSearch.bind(this)}
          style={{ width: 200, marginLeft: '8px' }}
        />
      </div>
    );

    const columns = [
      {
        title: '订单编号',
        dataIndex: 'serial_number'
      },
      {
        title: '商品',
        key: 'sale_goods',
        render: (tag: any) => {
          return (
            <span>
              {JSON.parse(tag.sale_goods).map((item: any) => {
                return (
                  <div key={item.id}>
                    {item.good_name}{' '}
                    <span style={{ color: 'green' }}>{'x' + item.sales_num_now}</span>
                  </div>
                );
              })}
            </span>
          );
        }
      },
      {
        title: '销售额(￥)',
        dataIndex: 'sales_amount'
      },
      {
        title: '成本(￥)',
        dataIndex: 'original_amount'
      },
      {
        title: '利润(￥)',
        key: 'id',
        render: (tag: any) => {
          return <span>{(tag.sales_amount - tag.original_amount).toFixed(2)}</span>;
        }
      },
      {
        title: '下单时间',
        key: 'updated_at',
        render: (tag: any) => {
          return <span>{format(tag.updated_at, 'yyyy.MM.dd hh:mm:ss')}</span>;
        }
      }
    ];
    const { olderList, meta } = this.state;
    return (
      <Card className="fat-card" bordered={false} title="最近订单" extra={Extra}>
        <Table
          className="no-head-border"
          bordered
          columns={columns}
          pagination={false}
          dataSource={olderList}
        />
        <div className={styles.paginationStyle}>
          <Pagination
            showQuickJumper
            current={meta.current_page}
            total={meta.total}
            pageSize={meta.per_page}
            onChange={this.onChange.bind(this)}
          />
        </div>
      </Card>
    );
  }
}

export default BasicTable;
