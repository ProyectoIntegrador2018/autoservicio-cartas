import React, { Component } from 'react';
import {
    Icon, Button, Modal
} from 'antd';
import DataTable from "../components/DataTable";
import API from "../tools/API";
import moment from 'moment';
import Select from "antd/lib/select";
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
<<<<<<< Updated upstream
const options = ['one', 'two', 'three']     

=======
>>>>>>> Stashed changes

export default class CartaSolicitar extends Component {

    constructor(props) {
        super(props);
        this.state = {selectedOption: "Beca Telmex", type:'', label: ''}
    }

<<<<<<< Updated upstream
    
=======
    handleChange(event){
        let index = event.nativeEvent.target.selectedIndex;
        let label = event.nativeEvent.target[index].text;
        let value = event.target.value;
        this.setState({value: event.target.value});
    }
>>>>>>> Stashed changes

    render() {
        return (
            <div>
<<<<<<< Updated upstream
                <h1><Icon type="solution" /> Cartas y Constancias</h1>
                <br></br>
                <p>Las constancias académicas (cartas oficiales) incluyen el nombre completo y su número de matrícula y de acuerdo al tipo de documento se solicite, especificará la información correspondiente</p>
                <div style={{ maxWidth: "550px", margin: "0 auto" }}>
                    <Dropdown options={options} onChange={this._onSelect} value={options[0]} placeholder="Select an option" />
                </div>
                
=======
                <Button style={{float:'right'}} onClick={this.showModal} type="secondary" icon="printer">
                Imprimir </Button>
                <h1><Icon type="solution" /> Cartas y Constancias</h1>
                <br></br>
                <p>Las constancias académicas (cartas oficiales) incluyen el nombre completo y su número de matrícula y de acuerdo al tipo de documento se solicite, especificará la información correspondiente</p>
                <div style={{ maxWidth: "550px", margin: "0 auto"}}>
                    <Select defaultValue="1" onChange={(value) => { this.setState({ selectedOption: value }); }} autosize={false}>
                        <Select.Option value="1">Beca Telmex</Select.Option>
                        <Select.Option value="2">Documentos en el instituto</Select.Option>
                        <Select.Option value="3">Documentos en el instituto_INGLÉS</Select.Option>
                        <Select.Option value="4">Estudios</Select.Option>
                        <Select.Option value="5">Estudios con foto</Select.Option>
                        <Select.Option value="6">Estudios con foto_INGLÉS</Select.Option>
                        <Select.Option value="7">Migración</Select.Option>
                        <Select.Option value="8">No baja</Select.Option>
                        <Select.Option value="9">No baja_INGLÉS</Select.Option>
                        <Select.Option value="10">Promedio acumulado</Select.Option>
                        <Select.Option value="11">Promedio acumulado_INGLÉS</Select.Option>
                        <Select.Option value="12">Promedio certificado</Select.Option>
                        <Select.Option value="13">Promedio certificado_INGLÉS</Select.Option>
                        <Select.Option value="14">Promedio y rango graduado</Select.Option>
                        <Select.Option value="15">Promedio y rango graduado_INGLÉS</Select.Option>
                        <Select.Option value="16">Terminación de carrera</Select.Option>
                        <Select.Option value="17">Terminación de carrera_INGLÉS</Select.Option>
                        <Select.Option value="18">Terminación de plan</Select.Option>
                        <Select.Option value="19">Terminación de plan_INGLÉS</Select.Option>
                    </Select>

                    
                </div>
                <br></br>


                <table>
                  <thead>
                    <tr style={{backgroundColor: "#D3D3D3"}}><th id="TituloCarta" colspan="2">{this.state.selectedOption}</th></tr>
                  </thead>  
                  <tr>
                    <th>Descripción: </th>
                    <td id="DescInfo">Info</td>
                  </tr>
                  <tr>
                    <th>Requisitos: </th>
                    <td>Info</td>
                  </tr>
                  <tr>
                    <th>Medios de Solicitud de trámite: </th>
                    <td>Info</td>
                  </tr>
                </table>

>>>>>>> Stashed changes
            </div>

        );
    }
}
