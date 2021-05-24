import React, { Component } from 'react';

class TableBody extends Component {
    state = {
        peopel: [
            {
                id: 1,
                fullName: "Haris G",
                phoneNumber: "123456789",
                emailAdress: "H@h.h"
            },
            {
                id: 2,
                fullName: "Bajro G",
                phoneNumber: "987654321",
                emailAdress: "B@b.b"
            },
            {
                id: 3,
                fullName: "Fuad G",
                phoneNumber: "123498765",
                emailAdress: "F@F.F"
            },
        ]
    }
    render() {
       
            const tableRows = this.state.peopel.map((row) => 
            <tr key = {row.id}>
                <td>{row.fullName}</td>
                <td>{row.phoneNumber}</td>
                <td>{row.emailAdress}</td>
                <td></td>
            </tr>
          
            );


        return (
            <tbody>
               {tableRows}
            </tbody>
        );
    }
}

export default TableBody;