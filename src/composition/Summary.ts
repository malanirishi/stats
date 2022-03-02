import { Analyzer, MatchData, OutputTarget } from '../types';
export class Summary {
    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget){}
    buildAndPrintReport(matches: MatchData[]) {
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    }
}