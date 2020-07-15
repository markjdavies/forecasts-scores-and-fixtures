import { FootballTournament } from './FootballTournament';
import { FootballFixtureList } from './FootballFixtureList';
import * as Logger from 'bunyan';

export interface FixtureFinder {
  find: (
    dateFrom: Date,
    dateTo: Date,
    tournament: FootballTournament,
  ) => FootballFixtureList;
}

export interface FinderFactory {
  configureFinder: (log: Logger) => FixtureFinder;
}
