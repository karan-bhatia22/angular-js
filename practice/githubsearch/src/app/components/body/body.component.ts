import { Component, OnInit } from '@angular/core';
import { Stats } from 'src/app/models/Stats';
import { User } from 'src/app/models/User';
import { SearchUsernameService } from 'src/app/services/search-username.service';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  user: User;
  stats: Stats;
  error: boolean = false;
  constructor(private searchUserNameService: SearchUsernameService) {}

  ngOnInit(): void {
    this.user = {
      name: '',
      avatar_url: 'https://avatars.githubusercontent.com/u/424443?v=4',
      blog: '',
      created_at: '',
      followers: 0,
      following: 0,
      location: '',
      login: '',
      public_gists: 0,
      public_repos: 0,
      email: null,
    };
    this.stats = {
      stars_earned: 0,
      contributed_to: 0,
      languages: new Map<string, number | undefined>(),
      total_issues: 0,
    };
  }
  async searchUsername(username: string) {
    try {
      const res_user = await this.searchUserNameService.getUser(username);

      const res_stats = await this.searchUserNameService.getUserStats(username);

      this.user = res_user;
      this.stats = res_stats;
      console.log(this.user);
      console.log(res_stats);
    } catch (err) {
      console.error(err);
      this.error = true;
    }
  }
}
