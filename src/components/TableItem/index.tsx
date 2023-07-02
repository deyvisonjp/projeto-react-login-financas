import { Item } from '../../types/Item';
import { formatDate } from '../../utils/dateFilter';
import { categories } from '../../data/categories'
import * as C from './style';

type Props = {
    item: Item;
}

// https://youtu.be/_hytKpMc04E?t=4627

export const TableItem = ( {item}: Props ) => {
    return (
        <C.TableLine>
            <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
            <C.TableColumn>
                <C.Category color={categories[item.category].color}>
                    {categories[item.category].title}
                </C.Category>
            </C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>
                <C.Value color={categories[item.category].expense ? 'red' : 'green'}>
                    R$ {item.value}
                </C.Value>
            </C.TableColumn>
        </C.TableLine>
    );
}