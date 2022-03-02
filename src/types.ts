export enum MatchResult {
    HomeWin = 'H',
    AwayWin = 'A',
    Draw = 'D',
};

export type MatchData = [Date, string, string, number, number, MatchResult, string];

export interface DataReader {
    data: string[][];
    read(): void;
}

export interface Analyzer {
    run(matches: MatchData[]): string;
}

export interface OutputTarget {
    print(report: string): void;
}