import * as C from '../../styles/global';

import { useEffect, useState } from 'react';
import { itens } from '../../data/itens';
import { filterListByMonth, getCurrentMonth } from '../../utils/dateFilter';
import { Item } from '../../types/Item';
import { TableArea } from '../../components/TableArea'
import { InfoArea } from '../../components/InfoArea';
import { categories } from '../../data/categories';

export const Home = () => {

    const [list, setList] = useState(itens); //Lista Geral
    
    const [filteredList, setFilteredList] = useState<Item[]>([]); // Filtrar listta para mês específico
    const [currentMonth, setCurrentMonth] = useState(getCurrentMonth);
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);

    useEffect(() => {
        setFilteredList(filterListByMonth(list, currentMonth));
    }, [list, currentMonth])

    useEffect(()=> {
        let incomeCount = 0;
        let expenseCount = 0;

        for(let i in filteredList) {
            if(categories[filteredList[i].category].expense) {
                expenseCount += filteredList[i].value
            } else {
                incomeCount += filteredList[i].value
            }
        }

        setExpense(expenseCount);
        setIncome(incomeCount);

    }, [filteredList])

    const handleMonthChange = (newMonth: string) => {
        setCurrentMonth(newMonth);
    }

    return (
        <>
        <C.Header>
            <C.HeaderText>
                Sistema Financeiro
            </C.HeaderText>
        </C.Header>
        <C.Body>

            {/* Momento atual do vídeo
            https://youtu.be/_hytKpMc04E?t=5894 */}

            {/* Área de informações */}
            <InfoArea 
                currentMonth={currentMonth} 
                onMonthChange={handleMonthChange}
                income={income}
                expense={expense}
            />

            {/* Área de inserção */}

            {/* Tabela de itens */}
            <TableArea list={filteredList}/>
        </C.Body>
        </>
    )
}