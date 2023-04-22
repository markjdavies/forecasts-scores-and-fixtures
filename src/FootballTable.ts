import { FootballTournament } from './FootballTournament';

export interface FootballTable {
  tournament: FootballTournament;
  rows: FooballTableRow[];
}

export interface FooballTableRow {
  movement: 'U' | 'D' | '';
  teamName: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  for: number;
  against: number;
  goalDifference: number;
  points: number;
  form: Result[];
}

export type Result = 'W' | 'D' | 'L';
