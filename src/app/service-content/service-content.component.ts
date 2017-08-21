import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-service-content',
  templateUrl: './service-content.component.html',
  styleUrls: ['./service-content.component.css']
})
export class ServiceContentComponent implements OnInit {
  // @Input()
  serviceName: string;

  private serviceContents: ServiceContent[] = [
    new ServiceContent('支付宝', '../../assets/img/zhifubao.png', ' 客户只需关联您的银行卡,无需网银,付款时输入支付宝支付密码和手机校验码即可轻松完成付款!', 'serviceDetails', false, ['http://placehold.it/400*200', 'http://placehold.it/400*100']),
    new ServiceContent('微信', '../../assets/img/weixin.png', ' 客户只需关联您的银行卡,无需网银,付款时输入支付宝支付密码和手机校验码即可轻松完成付款!', 'serviceDetails', false, ['http://placehold.it/400*200', 'http://placehold.it/400*100']),
    new ServiceContent('壹钱包', '../../assets/img/yiqianbao.png', ' 客户只需关联您的银行卡,无需网银,付款时输入支付宝支付密码和手机校验码即可轻松完成付款!', 'serviceDetails', false, ['http://placehold.it/400*200', 'http://placehold.it/400*100']),
    new ServiceContent('信用白条', '../../assets/img/xinyongbaitiao.png', ' 客户只需关联您的银行卡,无需网银,付款时输入支付宝支付密码和手机校验码即可轻松完成付款!', 'serviceDetails', false, ['http://placehold.it/400*200', 'http://placehold.it/400*100']),
    new ServiceContent('平安会员付', '../../assets/img/huiyuanzhifu.png', ' 客户只需关联您的银行卡,无需网银,付款时输入支付宝支付密码和手机校验码即可轻松完成付款!', 'serviceDetails', false, ['http://placehold.it/400*200', 'http://placehold.it/400*100']),
    new ServiceContent('京东钱包', '../../assets/img/jingdongqianbao.png', ' 客户只需关联您的银行卡,无需网银,付款时输入支付宝支付密码和手机校验码即可轻松完成付款!', 'serviceDetails', false, ['http://placehold.it/400*200', 'http://placehold.it/400*100']),
  ];

  constructor(private routeInfo: ActivatedRoute) {

  }

  ngOnInit() {
    this.serviceName = this.routeInfo.snapshot.params['serviceName'];
  }
  goback() {
    window.history.back();
  }

}

export class ServiceContent {
  constructor(public serviceName: string,
              public serviceImg: string,
              public serviceFunc: string,
              public serviceDetail: string,
              public serviceIsApply: boolean,
              public serviceGuide: Array<string>) {
  }
}
