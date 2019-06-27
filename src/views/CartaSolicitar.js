import React, { Component } from 'react';
import {
    Icon, Button, Modal
} from 'antd';
import DataTable from "../components/DataTable";
import API from "../tools/API";
import moment from 'moment';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
const options = ['one', 'two', 'three']     


export default class CartaSolicitar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            /* data:[],
            data2:[],
            loading:true,
            record:{},
            cols:[], */
        }
    }

    

    render() {
        return (
            <div>
                <h1><Icon type="solution" /> Cartas y Constancias</h1>
                <br></br>
                <p>Las constancias académicas (cartas oficiales) incluyen el nombre completo y su número de matrícula y de acuerdo al tipo de documento se solicite, especificará la información correspondiente</p>
                <div style={{ maxWidth: "550px", margin: "0 auto" }}>
                    <Dropdown options={options} onChange={this._onSelect} value={options[0]} placeholder="Select an option" />
                </div>
                
            </div>

        );
    }
}
