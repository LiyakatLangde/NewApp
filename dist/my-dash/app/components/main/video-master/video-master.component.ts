import { Component, inject } from '@angular/core';
import { VideoModel } from '../../../model/Video';
import { VideoService } from '../../../service/video.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-video-master',
  imports: [ReactiveFormsModule],
  templateUrl: './video-master.component.html',
  styleUrl: './video-master.component.css'
})
export class VideoMasterComponent {

  videoList:VideoModel []=[]; 

  videoForm: FormGroup = new FormGroup({

    videoId: new FormControl(0),
    videoUrl: new FormControl(""),
    videoTitle: new FormControl(""),
    videoDescription: new FormControl(""),
    videoThumbnail: new FormControl(""),
    totalDuration: new FormControl(""),

  });

  videoSrv = inject(VideoService);

  
  ngOnInit(): void { 
    this.getVideos();
  }

  onSaveVideo(){
    debugger
    const formValue = this.videoForm.value;
    this.videoSrv.saveVideo(formValue).subscribe((result:any)=>{
      if (result.result){
        // debugger
        alert('Video Saved');
        this.getVideos();
      }
        else{
          alert(result.message);
        
      }
  
    })
  }
  
  getVideos(){ 
    this.videoSrv.getVideos().subscribe((result:any)=>{ 
      this.videoList = result;
      console.log(result)
    })
  }
  
  onEdit(data:VideoModel){
    // this.videoObj = data;
  }


  deleteVideo(id:number){
    const isDelete = confirm("Are you sure  want to delete this.")
    if(isDelete){
      this.videoSrv.deleteVideo(id).subscribe((result:any)=>{
        if (result.result){
          // debugger
          alert('Video Deleted Success');
          this.getVideos();
        }
          else{
            alert(result.message);
          
        }
    
      })
    }
  }




}
