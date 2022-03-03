const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export interface IDate {
    month: number
    year: number
}

export function getDateString(date: IDate): string{
    return `${months[date.month-1]} ${date.year}`
}