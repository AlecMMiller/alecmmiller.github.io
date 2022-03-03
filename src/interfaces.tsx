import { IDate } from "./utils/date";

export interface IPosition {
    company: string
    role: string
    start: IDate
    end: IDate
    notes: Array<string>
}