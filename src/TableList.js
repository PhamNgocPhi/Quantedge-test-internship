import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

 class TableList extends React.Component {
   render() {
     return(
      <Table>
        <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
          <TableRow>
              <TableHeaderColumn style={{width: '15%'}}>CODE</TableHeaderColumn>
              <TableHeaderColumn >COMPANY</TableHeaderColumn>
              <TableHeaderColumn style={{textAlign: 'right'}}>PRICE</TableHeaderColumn>
              <TableHeaderColumn style={{textAlign: 'right'}}>VALUE</TableHeaderColumn>
              <TableHeaderColumn style={{textAlign: 'right'}}>CHANGE</TableHeaderColumn>
              <TableHeaderColumn style={{textAlign: 'right'}}>%CHANGE</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.props.arrData.map(item => {
              if(item.percent >= 0) {
                return (
                  <TableRow>
                    <TableRowColumn style={{width: '15%'}}>{item.code}</TableRowColumn>
                    <TableRowColumn style = {{whiteSpace: 'normal'}}>{item.company}</TableRowColumn>
                    <TableRowColumn style={{textAlign: 'right'}}>{item.price.toFixed(2)}</TableRowColumn>
                    <TableRowColumn style={{textAlign: 'right'}}>{item.value.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableRowColumn>
                    <TableRowColumn style={{textAlign: 'right', color: '#2ecc71'}}>{item.change_value.toFixed(2)}</TableRowColumn>
                    <TableRowColumn style={{textAlign: 'right', color: '#2ecc71'}}>{item.percent.toFixed(1)}%</TableRowColumn>
                  </TableRow>
                );
              }
              return (
                <TableRow>
                  <TableRowColumn style={{width: '15%'}}>{item.code}</TableRowColumn>
                  <TableRowColumn style = {{whiteSpace: 'normal'}}>{item.company}</TableRowColumn>
                  <TableRowColumn style={{textAlign: 'right'}}>{item.price.toFixed(2)}</TableRowColumn>
                  <TableRowColumn style={{textAlign: 'right'}}>{item.value.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableRowColumn>
                  <TableRowColumn style={{textAlign: 'right', color: '#e74c3c'}}>{item.change_value.toFixed(2)}</TableRowColumn>
                  <TableRowColumn style={{textAlign: 'right', color: '#e74c3c'}}>{item.percent.toFixed(1)}%</TableRowColumn>
                </TableRow>
              );

            })}
          </TableBody>

      </Table>
    );
  }
}

export default TableList;
