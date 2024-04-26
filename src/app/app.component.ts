import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ListViewComponent } from './list-view/list-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule,CommonModule, ListViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  public index = 0;

  public tempTitle;
  public tempNote;

  public modelSize=15;

  public modelTitle='';
  public modelNote='';


  public videoLinkCollection = [
    {
      link: 'https://www.youtube.com/shorts/dMGluqyT2Ps',
      title: '',
      notes: ''
    },
    {
      link: 'https://www.youtube.com/shorts/dFg8Nu2X5Mo',
      title: '',
      notes: ''
    },
    {
      link: 'https://www.youtube.com/watch?v=uYJQIKAVBw8&pp=ygUEZG9ncw%3D%3D',
      title: '',
      notes: ''
    },
  ];

  

  public processNextClip() {
    this.index++;
    if (this.index >= this.videoLinkCollection.length) {
      this.index = 0;
    }
    this.resetTempData();
  }

  public processPreviousClip() {

    this.index--;

    if (this.index < 0) {
      this.index = this.videoLinkCollection.length - 1;
    }
    this.resetTempData();

  }
  public processSaveVideoData() {
    this.videoLinkCollection[this.index].title=this.modelTitle;
    this.videoLinkCollection[this.index].notes=this.modelNote;
    this.resetTempData();

  }
  public processInputVideoNote(input) {

    this.tempNote=input.target;



  }
  public processInputVideoTitle(input) {

    this.tempTitle=input.target;


  }
  public processVideoRecord(videoElement, index){

    this.index=index;
  }

  private resetTempData(){
    this.modelTitle='';
    this.modelNote='';
  }
}
