import {Component, Input, OnInit} from '@angular/core';
import {TopbarComponent} from '../topbar/topbar.component';

@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.css']
})
export class ServiceItemComponent implements OnInit {


  private serviceItems: Array<ServiceItem>;


  constructor() {
  }

  ngOnInit() {
    this.serviceItems = [
      new ServiceItem('移动支付', '../../../assets/img/homepage/application.png', '快速帮助商场开通微信支付、支付宝、网银手机支付账号，并开通移动支付功能。'),
      new ServiceItem('电子发票', '../../../assets/img/homepage/EBill.png', '快速帮助商场开通微信支付、支付宝、网银手机支付账号，并开通移动支付功能。'),
      new ServiceItem('CRM', '../../../assets/img/homepage/crm.png', '快速帮助商场开通微信支付、支付宝、网银手机支付账号，并开通移动支付功能。'),
      new ServiceItem('POS', '../../../assets/img/homepage/POS.png', '快速帮助商场开通微信支付、支付宝、网银手机支付账号，并开通移动支付功能。'),
      new ServiceItem('对账管理', '../../../assets/img/homepage/table.png', '快速帮助商场开通微信支付、支付宝、网银手机支付账号，并开通移动支付功能。'),
      new ServiceItem('ERP', '../../../assets/img/homepage/socialMedia.png', '快速帮助商场开通微信支付、支付宝、网银手机支付账号，并开通移动支付功能。'),
      new ServiceItem('LBS', '../../../assets/img/homepage/LBS.png', '快速帮助商场开通微信支付、支付宝、网银手机支付账号，并开通移动支付功能。'),
      new ServiceItem('停车场系统', '../../../assets/img/homepage/Stop.png', '快速帮助商场开通微信支付、支付宝、网银手机支付账号，并开通移动支付功能。'),
      new ServiceItem('移动支付', '../../../assets/img/homepage/application.png', '快速帮助商场开通微信支付、支付宝、网银手机支付账号，并开通移动支付功能。'),
      new ServiceItem('定制服务', '../../../assets/img/homepage/other1.png', '快速帮助商场开通微信支付、支付宝、网银手机支付账号，并开通移动支付功能。'),
      new ServiceItem('大数据分析', '../../../assets/img/homepage/bigdata.png', '快速帮助商场开通微信支付、支付宝、网银手机支付账号，并开通移动支付功能。'),
      new ServiceItem('大数据分析', '../../../assets/img/homepage/manager.png', '快速帮助商场开通微信支付、支付宝、网银手机支付账号，并开通移动支付功能。'),
      new ServiceItem('大数据分析', '../../../assets/img/homepage/ADM.png', '快速帮助商场开通微信支付、支付宝、网银手机支付账号，并开通移动支付功能。'),
    ];
  }

}

export class ServiceItem {
  constructor(public serviceName: string,
              public serviceImg: string,
              public serviceDescri: string) {
  }
}


