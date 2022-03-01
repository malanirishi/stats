import { DataReader, MatchData, MatchResult } from '../types';
import { convertToDate } from '../utils';

export class MatchReader {
    matches: MatchData[] = [];
    constructor(public reader: DataReader) {}
    load(): void {
        this.reader.read();
        this.matches = this.reader.data
            .map((row: string[]): MatchData => {
                return [
                    convertToDate(row[0]),
                    row[1],
                    row[2],
                    parseInt(row[3]),
                    parseInt(row[4]),
                    row[5] as MatchResult,
                    row[6],
                ];
            })
    }
}