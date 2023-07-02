import styled from "styled-components";

export const Table = styled.table`
    width: 100%;
    background-color: #FFF;
    padding: 15px;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    margin-top: 20px;
`

export const TableHeadColumn = styled.th< {width?: number} >`
    width: ${props => props.width ? `${props.width}px` : 'auto'};
    padding: 10px 0 2px;
    text-align: left;
    border-bottom: 2px solid black;
`