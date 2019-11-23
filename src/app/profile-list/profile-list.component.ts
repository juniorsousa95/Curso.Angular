import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {

  public profiles:Array<Profile> = []

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.loadProfiles();
  }

  private loadProfiles(){
    this.http.get<Array<Profile>>('/api/profiles')
    .subscribe(profiles => this.profiles = profiles)
  }

  
}
interface Profile {
  id?:number
  name:string
}
