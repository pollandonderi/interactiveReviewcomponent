import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {
  
maincontainer:HTMLElement = document.querySelector(".main-container")!
  thankyoucontainer = document.querySelector(".card2");
  public submitbutton = document.getElementById("submit");

  ngOnInit(): void {
    if (this.submitbutton) {
      this.submitbutton.addEventListener("click", () =>{
        console.log("here we come")
        this.maincontainer.classList.remove("hidden");
        this.maincontainer.style.display = "none";
      });
    }
  }
  

}
