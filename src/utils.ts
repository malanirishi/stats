export const convertToDate = (dateString: string): Date => {
    const dateParts = dateString
        .split('/')
        .map((datePart: string): number => parseInt(datePart));
    return new Date(dateParts[2], dateParts[1]-1, dateParts[0]);
}