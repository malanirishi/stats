import { OutputTarget } from '../../types';

export class ConsoleReports implements OutputTarget {
    print(report: string): void {
        console.log(report);
    }
}