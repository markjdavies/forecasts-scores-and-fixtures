import { FootballTeam } from './FootballTeam';
import { Scores } from './Scores';

export interface FootballMatch {
  kickOffTime: Date;
  status: MatchStatus;
  homeTeam: FootballTeam;
  awayTeam: FootballTeam;
  homeScore: Scores;
  awayScore: Scores;
}

export enum MatchStatus {
  Fixture = 'FIXTURE',
  FirstHalf = 'FIRSTHALF',
  SecondHalf = 'SECONDHALF',
  Fulltime = 'FULLTIME',
}
