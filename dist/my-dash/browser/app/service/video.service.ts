import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VideoModel } from '../model/Video';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {



  apiUrl: string = "./assets/videos.json";
 

  constructor(private http: HttpClient) { }
 
  getVideos():Observable<VideoModel>{
      return this.http.get<VideoModel>(this.apiUrl)
  }

  saveVideo(obj: VideoModel){
   return this.http.post(this.apiUrl + "AddNewVideo",obj)
  }
  updateVideo(obj: VideoModel){
   return this.http.put(this.apiUrl + "UpdateVideo",obj)
  }
  deleteVideo(id: number){
   return this.http.delete(this.apiUrl + "DeleteVideo?videoId="+id)
  }
}
