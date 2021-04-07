import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  up = 0;
  down = 0;

  handleTakeOff() {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
       this.color = 'blue';
       this.height = 10000;
       this.width = 0;
       this.message = 'Shuttle in flight.';
    }
 }

 handleLand(){
  let result = window.confirm('The shuttle is landing. Landing gear engaged.');
  if (result) {
    this.color = 'green';
    this.height = 0;
    this.width = 0;
    this.message = 'The shuttle has landed.';
 }
 }

 handleAbrotMission(){
  let result = window.confirm('Are you sure you want to Abrot this Mission?');
  if (result) {
    this.color = 'red';
    this.height = 0;
    this.width = 0;
    this.message = 'Mission aborted.';
 }
 }

 handleUpButton(){
   this.up += 10;
   this.down += 10;
 }
 handleDownButton(){
   if (this.up > 0 || this.down > 0){
    this.up -= 10
    this.down -= 10
   }
   console.log(this.up)

 }


}

