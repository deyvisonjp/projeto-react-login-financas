import { Item } from "../types/Item";

export const getCurrentMonth = () => {
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth()+1}`;
}

export const filterListByMonth = (list: Item[], date: string): Item[] => {
    let newList: Item[] = [];
    let [year, month] = date.split('-');

    for (let i in list) {
        if (
            list[i].date.getFullYear() === parseInt(year) &&
            list[i].date.getMonth() + 1 === parseInt(month)
        ) 
        { newList.push(list[i]) }
    }

    return newList;
}

export const formatDate = (date: Date): string => {
    let ano = date.getFullYear();
    let mes = date.getMonth() + 1 ;
    let dia = date.getDate();

    return `${addZeroToDate(dia)}/${addZeroToDate(mes)}/${ano}`
}

const addZeroToDate = (n: number): string => n < 10 ? `0${n}` : `${n}`;

export const formatCurrentMonth = (getCurrentMonth: string) : string => {
    let [year, month] = getCurrentMonth.split('-');

    let months = ['Mes', 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Novembro', 'Dezembro'];

    return `${months[parseInt(month)]} ${year}`

}