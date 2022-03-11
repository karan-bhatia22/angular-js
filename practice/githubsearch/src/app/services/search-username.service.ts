import { Injectable } from '@angular/core';
import { Stats } from '../models/Stats';
import { User } from '../models/User';
@Injectable({
  providedIn: 'root',
})
export class SearchUsernameService {
  private apiURL = 'https://api.github.com/users';
  constructor() {}

  async getUser(userName: string): Promise<User> {
    try {
      const res = await fetch(`${this.apiURL}/${userName}`).catch((error) => {
        return Promise.reject(error);
      });
      const data = await res.json();
      const userData: User = {
        name: data.name,
        avatar_url: data.avatar_url,
        blog: data.blog,
        created_at: data.created_at,
        followers: data.followers,
        following: data.following,
        location: data.location,
        login: data.login,
        public_gists: data.public_gists,
        public_repos: data.public_repos,
        email: data.email,
      };
      return userData;
    } catch (err) {
      return Promise.reject('Not found!');
    }
  }

  async getUserStats(userName: string): Promise<Stats> {
    try {
      const res = await fetch(`${this.apiURL}/${userName}/repos`).catch(
        (err) => {
          return Promise.reject(err);
        }
      );
      const repos = await res.json();
      let stars_earned = 0;
      let issues = 0;
      let contributed_to = 0;
      const contributions_res = await fetch(
        `${this.apiURL}/${userName}/events`
      );
      const contributions_data = await contributions_res.json();
      contributed_to = contributions_data.length;
      let languages = new Map<string, number>();
      for (let repo of repos) {
        stars_earned += repo.stargazers_count;
        issues += repo.open_issues_count;
        if (languages.has(repo.language)) {
          let value = languages.get(repo.language)
            ? languages.get(repo.language)
            : 0;
          if (value) languages.set(repo.language, value + 1);
        } else {
          languages.set(repo.language, 1);
        }
      }

      let sumOfLanguageInstances = 0;
      sumOfLanguageInstances = Array.from(languages.values()).reduce(
        (sumOfLanguageInstances, value) => {
          return sumOfLanguageInstances + value;
        },
        0
      );

      languages.forEach((value, key, languages) => {
        languages.set(key, (value / sumOfLanguageInstances) * 100);
      });

      const userStats = {
        stars_earned: stars_earned,
        contributed_to: contributed_to,
        total_issues: issues,
        languages: languages,
      };

      return userStats;
    } catch (err) {
      return Promise.reject('Not Found');
    }
  }
}
