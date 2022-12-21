import { Component, Input, OnInit, Output, EventEmitter  } from '@angular/core';


@Component({
  selector: 'app-list-style',
  templateUrl: './list-style.component.html',
  styleUrls: ['./list-style.component.scss'],
})

export class ListStyleComponent  implements OnInit{
  @Input()  question!: any;
  @Output() results =  new EventEmitter<object>();
  optionSelected = false;
  selected: any;
  answer: any;
  show = true 

  ngOnInit(): void {
      console.log("From List-Style: ", this.question)

  }

  // Function - handleSelected()
  // DESC - Assigned the Clicked option as the selected option.
  handleSelected(option: object){
    this.optionSelected = true;
    this.selected = option
    this.answer = this.selected
  }

  // Function -  sendAnswer()
  // DESC - Send the answer (Selected option) back to the parent component
  sendAnswer(){
    this.show=false
    setTimeout(()=>{
      this.results.emit(this.answer)
    },800)
  }


  // Filter the Options to show the User which item is currently selected
  currentlySelected(option: any){
    if(this.selected){
      return option.name == this.selected.name ? 'brightness(80%)': 'brightness(1)'
    }else{
      return 'brightness(1)'
    }
  }
}
