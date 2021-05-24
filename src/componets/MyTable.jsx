import React, { Component } from 'react';
import TabelHeads from './TabelHeads';
import TableBody from './TableBody';

class MyTable extends Component {
    render() {

        return (
            <table>
                <TabelHeads/>
                <TableBody/>
            </table>
        );
    }
}

export default MyTable;