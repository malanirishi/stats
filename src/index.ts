import { CSVFileReader } from './composition/CSVFileReader';
import { MatchReader } from './composition/MatchReader';
import { MatchResult } from './types';

let manUnitedWins = 0;

/* inheritance
const reader = new MatchReader('football.csv');
reader.read(); */

const csvFileReader = new CSVFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
for(let match of matchReader.matches) {
    if ((match[1] === 'Man United' && match[5] === MatchResult.HomeWin) || (match[2] === 'Man United' && match[5] === MatchResult.AwayWin)) {
        manUnitedWins++;
    }
}

console.log(`Manchested United wins: ${manUnitedWins}`);