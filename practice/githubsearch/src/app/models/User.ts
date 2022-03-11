export interface User {
  login: string;
  avatar_url: string;
  name: string;
  blog: string;
  location: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  email: string | null;
}
