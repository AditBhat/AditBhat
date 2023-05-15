import { LightningElement} from 'lwc';
import NAME from '@salesforce/schema/Account.Name';
import ANNUALREVENUE from '@salesforce/schema/Account.AnnualRevenue';

export default class Practice extends LightningElement {
  name=NAME;
  annual_revenue=ANNUALREVENUE;
   message;
   handleEvent(event){
     this.message=event.detail.message;
   }
}