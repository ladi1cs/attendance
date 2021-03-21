import styled from 'styled-components';
import { Colors } from './consts';


const Label = styled.label`
    font-size: ${props => (props.size || 18)}px;
    color: ${props => (props.color || 'black')};
    font-weight: ${props => (props.bold ? 'bold' : 'normal')};
    margin: 15px 40px;
`
const Button = styled.button`
    color: blue;
    margin: 15px 10px;
    font-size: ${props => (props.fontSize || 16)}px;
    height: ${props => (props.height || 30)}px;
    width: ${props => (props.width || 100)}px;
    background-color: ${props => (props.bgcolor || Colors.Gray)};
`
const TextBox = styled.input`
    font-size: 16px;
    margin: 15px 0;
`
const TableData = styled.td`
    padding: 2px 10px;
    border: 1px solid black;
`
const Table = styled.table`
    font-size: 14px;
    font-weight: 'normal';
    border: 1px solid black;
    border-collapse: collapse;
`
const TableHdr = styled.th`
    border: 1px solid black;
`

const BaseDiv = styled.div`
    background-color: ${Colors.White};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
`
const BaseContainer = styled(BaseDiv)`
    width: 100%;
    background-color: ${Colors.Gray};
    font-size: 20px;
    color: blue;
    border: solid 2px blue;
    border-radius: 5px;
`
const Row = styled(BaseDiv)`
    color: gray;
    background-color: ${Colors.Gray};
    flex-direction: row;
`

const Block = styled(BaseContainer)`
    width: 60%;
    height: auto;
    font-size: 18px;
    color: gray;
    margin: 35px;
    padding: 20px;
`
const Container = styled(BaseDiv)`
    background-color: ${Colors.MainBlue};
    min-height: 100vh;
`

export {Container, Label, Button, TextBox, Table, TableData, TableHdr, Block, Row}