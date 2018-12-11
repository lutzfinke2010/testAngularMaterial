import {Component, Input, OnInit} from '@angular/core';
import {PayPalConfig, PayPalEnvironment, PayPalIntegrationType} from 'ngx-paypal';

@Component({
  selector: 'app-paypal-button',
  templateUrl: './paypal-button.component.html',
  styleUrls: ['./paypal-button.component.css']
})
export class PaypalButtonComponent  implements OnInit {

  public payPalConfig?: PayPalConfig;

  @Input()
  public kosten: number;

  ngOnInit(): void {
    this.initConfig();
    this.kosten = 0;
  }

  private initConfig(): void {
    this.payPalConfig = new PayPalConfig(PayPalIntegrationType.ClientSideREST, PayPalEnvironment.Sandbox, {
      commit: true,
      client: {
        sandbox: 'ASFvX32sNKuWCc06qEla6jwEVZ8oufnRJaMwxDirl-b9IGVYtwfkDwYrn6kiUsp0HKhPqFQDwJnqNIy3',
      },
      button: {
        label: 'paypal',
      },
      onPaymentComplete: (data, actions) => {
        console.log('OnPaymentComplete');
      },
      onCancel: (data, actions) => {
        console.log('OnCancel');
      },
      onError: (err) => {
        console.log('OnError');
      },
      transactions: [{
        amount: {
          currency: 'USD',
          total: this.kosten
        }
      }]
    });
  }
}
