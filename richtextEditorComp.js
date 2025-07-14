import { LightningElement , api, track } from 'lwc';
import { OmniscriptBaseMixin } from 'omnistudio/omniscriptBaseMixin';

export default class RichTextEditor extends OmniscriptBaseMixin(LightningElement){
    richTextValue = ''; 
    @api textnode;
    showhtml = false; 
    @api showhtmlButton = false;
    @track allowedFormats = [
        'font',
        'size',
        'bold',
        'italic',
        'underline',
        'strike',
        'list',
        'indent',
        'align',
        'link',
        'clean',
        'table',
        'header',
        'color',
        'background',
        'code',
        'code-block',
        'script',
        'blockquote',
        'direction',
    ];

    connectedCallback() {
        this.richTextValue = this.omniJsonData[this.textnode];
    }

    // Handle change event from rich text editor
    handleRichTextChange(event) {
        this.richTextValue = event.target.value;
        var data ={
                   [this.textnode]:this.richTextValue 
        }
        this.omniApplyCallResp(data);
    }

    handleShowHTML() {
        this.showhtml = !this.showhtml; 
    }


}