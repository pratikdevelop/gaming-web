import { Component, OnInit } from '@angular/core';
declare var Razorpay: any;

@Component({
  selector: 'app-payment',
  imports: [],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}
  
  makePayment(): void {
    const options = {
      key: 'YOUR_RAZORPAY_KEY', // Replace with your Razorpay key
      amount: 10000,  // Amount in the smallest currency unit (e.g., paise for INR)
      currency: 'INR',
      name: 'Gambling Game',
      description: 'Game deposit',
      handler: function (response: any) {
        alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
      },
      prefill: {
        name: 'Player Name',
        email: 'player@example.com',
        contact: '9876543210',
      },
      notes: {
        address: 'Razorpay Corporate Office',
      },
      theme: {
        color: '#F37254'
      }
    };

    const paymentObject = new Razorpay(options);
    paymentObject.open();
  }

}

