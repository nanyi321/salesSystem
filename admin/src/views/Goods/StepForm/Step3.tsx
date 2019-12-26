import React from 'react';
import { Button, Result } from 'antd';
import FormatterLocale from '@components/FormatterLocale';
import StepFormStore from './formStore';
import styles from './form.module.scss';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';

const Step3: React.FC = () => {
  const { initStep } = StepFormStore;
  return (
    <div className={styles.step}>
      <Result status="success" title="添加成功" subTitle="商品已成功添加" />,
      <div className={styles.buttonGroup}>
        <Button type="primary" onClick={initStep}>
          <FormatterLocale id="step3.oneMore" defaultMessage="再次添加" />
        </Button>
        <Link to={'/form/goodsList'} replace>
          <Button
            style={{
              marginLeft: '8px'
            }}
          >
            <FormatterLocale id="step3.checkList" defaultMessage="查看商品列表" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Step3;
