import { LightningElement, api } from 'lwc';

export default class LaunchFlow extends LightningElement {

    @api recordId;


  get inputVariables() {
    return [
      {
        // Match with the input variable name declared in the flow.
        name: "recordId",
        type: "String",
        // Initial value to send to the flow input.
        value: this.recordId,
      }
    ];
  }

   
}


