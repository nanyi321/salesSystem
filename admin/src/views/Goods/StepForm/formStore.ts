import { observable, configure, action } from 'mobx';
import React from 'react';
import { createGoods } from '@api/goods';

configure({ enforceActions: 'always' });

interface StepObj {
  id: string;
  title: string;
  component: any;
}

interface StepData {
  goodName: string;
  imageFile: string;
  price: number;
  originalPrice: number;
  stockNum: number;
  spec: string;
  dec: string;
}

class FormStore {
  @observable current: number = 0;
  @observable submitting: boolean = false;
  @observable data: StepData = {
    goodName: '',
    imageFile: '',
    price: 0,
    originalPrice: 0,
    stockNum: 0,
    spec: '',
    dec: ''
  };
  steps: Array<StepObj>;

  constructor() {
    this.steps = [
      {
        id: 'form.stepTitle1',
        title: '进货信息',
        component: React.lazy(() => import(/* webpackChunkName: "Step1" */ './Step1'))
      },
      {
        id: 'form.stepTitle2',
        title: '销售信息',
        component: React.lazy(() => import(/* webpackChunkName: "Step2" */ './Step2'))
      },
      {
        id: 'form.stepTitle3',
        title: '完成',
        component: React.lazy(() => import(/* webpackChunkName: "Step3" */ './Step3'))
      }
    ];
  }

  getStepChild = (): any => {
    return this.steps[this.current].component;
  };

  @action initStep = (): void => {
    this.current = 0;
  };

  @action nextStep(): void {
    this.current++;
    this.submitting = false;
  }

  @action setValue(values: StepData): void {
    this.data = values;
  }

  @action onPrev = (): void => {
    this.current--;
  };

  @action onSubmit = (): void => {
    this.submitting = true;
    let goodsData = JSON.parse(JSON.stringify(this.data));
    createGoods(goodsData)
      .then((res: any) => {
        console.log(res.data);
        const { code, data } = res.data;
        if (code === 200) {
          this.nextStep();
        }
      })
      .catch(() => {
        this.initStep();
      });
  };
}

const formStore = new FormStore();

export default formStore;
