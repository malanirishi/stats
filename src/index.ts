import { WinsAnalysis } from './composition/analyzers/WinsAnalysis';
import { CSVFileReader } from './composition/CSVFileReader';
import { MatchReader } from './composition/MatchReader';
import { ConsoleReports } from './composition/reportTargets/ConsoleReports';
import { HtmlReport } from './composition/reportTargets/HtmlReports';
import { Summary } from './composition/Summary';

/* inheritance
const reader = new MatchReader('football.csv');
reader.read(); */

const csvFileReader = new CSVFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
/* using console report
const summary = new Summary(new WinsAnalysis('Man United'), new ConsoleReports());
summary.buildAndPrintReport(matchReader.matches); */

const summary = new Summary(new WinsAnalysis('Man United'), new HtmlReport());
summary.buildAndPrintReport(matchReader.matches);