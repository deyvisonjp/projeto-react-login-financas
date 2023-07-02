import { styled } from "styled-components";

export const Container = styled.div`
    background-color: #FFF;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    padding: 20px;
    margin-top: -30px;
    display: flex;
    align-items: center;
`

export const MonthArea = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
export const MonthArrow = styled.div`
    width: 35px;
    height: 35px;
    border: 2px solid black;
    text-align: center;
    font-size: 24px;
    background-color: orange;
    color: white;
    cursor: pointer;
`
export const MonthTitle = styled.div`
    flex: 1;
    text-align: center;
`
export const ResumeArea = styled.div`
    flex: 2;
    display: flex;
`