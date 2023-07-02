import * as C from '../../styles/global';

import { useEffect, useState } from 'react';
import { itens } from '../../data/itens';
import { filterListByMonth, getCurrentMonth } from '../../utils/dateFilter';
import { Item } from '../../types/Item';
import { TableArea } from '../../components/TableArea'
import { InfoArea } from '../../components/InfoArea';

export const Home = () => {

    const [list, setList] = useState(itens); //Lista Geral
    
    const [filteredList, setFilteredList] = useState<Item[]>([]); // Filtrar listta para mês específico
    const [currentMonth, setCurrentMonth] = useState(getCurrentMonth);

    useEffect(() => {
        setFilteredList(filterListByMonth(list, currentMonth));
    }, [list, currentMonth])

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
            />

            {/* Área de inserção */}

            {/* Tabela de itens */}
            <TableArea list={filteredList}/>
        </C.Body>
        </>
    )
}