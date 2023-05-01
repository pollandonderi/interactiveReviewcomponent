import { Component, OnInit } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {  
maincontainer:HTMLElement = document.querySelector(".main-container")!
  thankyoucontainer = document.querySelector(".card2");
  public submitbutton = document.getElementById("submit");
  public visible = "none";
  public Invisible = "";
  public number: number[] = [];



  ngOnInit(): void {
    // if (this.submitbutton) {
    //   this.submitbutton.addEventListener("click", () =>{
    //     console.log("here we come")
    //     this.maincontainer.classList.remove("hidden");
    //     this.maincontainer.style.display = "none";
    //   });
    // }
  }

  onclick() {
   this.visible = "";
   this.Invisible = "none";
   
  }
  click1(){
    this.number.push(1)

  }
  click2(){
    this.number.push(2)
  }
  click3(){
    this.number.push(3)
  }
  click4(){
    this.number.push(4)
  }
  click5(){
    this.number.push(5)
  }

}


