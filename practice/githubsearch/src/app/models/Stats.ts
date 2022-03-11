export interface Stats {
  stars_earned: number;
  total_issues: number;
  contributed_to: number;
  languages: Map<string, number | undefined>;
}
