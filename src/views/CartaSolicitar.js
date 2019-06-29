import React, { Component } from 'react';
import {
    Icon, Button, Modal, Divider
} from 'antd';
import DataTable from "../components/DataTable";
import API from "../tools/API";
import moment from 'moment';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
const options = [
{ label: 'Beca Telmex', value: 1},
{ label: 'Documentos en el instituto', value: 2},
{ label: 'Documentos en el instituto_INGLÉS', value: 3},
{ label: 'Estudios', value: 4},
{ label: 'Estudios_INGLÉS', value: 5},
{ label: 'Estudios con foto', value: 6},
{ label: 'Estudios con foto_INGLÉS', value: 7},
{ label: 'Migración', value: 8},
{ label: 'No baja', value: 9},
{ label: 'No baja_INGLÉS', value: 10},
{ label: 'Promedio acumulado' , value: 11},
{ label: 'Promedio acumulado_INGLÉS', value: 12},
{ label: 'Promedio certificado', value: 13},
{ label: 'Promedio certificado_INGLÉS', value: 14},
{ label: 'Promedio y rango graduado', value: 15},
{ label: 'Promedio y rango graduado_INGLÉS', value: 16},
{ label: 'Terminación de carrera', value: 17},
{ label: 'Terminación de carrera_INGLÉS', value: 18},
{ label: 'Terminación de plan', value: 19},
{ label: 'Terminación de plan_INGLÉS', value: 20},
];

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
            <Button style={{float:'right'}} onClick={this.showModal} type="secondary" icon="printer">
                Imprimir </Button>
                <h1><Icon type="solution" /> Cartas y Constancias</h1>
                <br></br>
                <p>Las constancias académicas (cartas oficiales) incluyen el nombre completo y su número de matrícula y de acuerdo al tipo de documento se solicite, especificará la información correspondiente</p>
                <div style={{ maxWidth: "550px", margin: "0 auto" }}>
                    <Dropdown options={options} onChange={this._onSelect} value={options[0]} placeholder="Select an option"/>
                </div>
                    <Divider/>


            </div>

        );
    }
}
