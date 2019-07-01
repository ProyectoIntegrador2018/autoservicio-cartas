import React, { Component } from 'react';
import {
    Icon, Button, Modal, Divider
} from 'antd';
import DataTable from "../components/DataTable";
import API from "../tools/API";
import moment from 'moment';
import Select from "antd/lib/select";
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

export default class CartaSolicitar extends Component {

    constructor(props) {
        super(props);
        this.state = {selectedOption: "Beca Telmex", type:'', label: ''}
    }

    handleChange(event){
        let index = event.nativeEvent.target.selectedIndex;
        let label = event.target.options[event.target.selectedIndex].text;
        let value = event.target.value;
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div>
                <Button style={{float:'right'}} onClick={this.showModal} type="secondary" icon="printer">
                Imprimir </Button>
                <h1><Icon type="solution" /> Cartas y Constancias</h1>
                <br></br>
                <p>Las constancias académicas (cartas oficiales) incluyen el nombre completo y su número de matrícula y de acuerdo al tipo de documento se solicite, especificará la información correspondiente</p>
                <div style={{ maxWidth: "550px", margin: "0 auto"}}>
                    <Select defaultValue="Beca Telmex" onChange={(value) => { this.setState({ selectedOption: value }); }} autosize={false} style={{width:"100%"}}>
                        <Select.Option value="Beca Telmex">Beca Telmex</Select.Option>
                        <Select.Option value="Documentos en el instituto">Documentos en el instituto</Select.Option>
                        <Select.Option value="Documentos en el instituto_INGLÉS">Documentos en el instituto_INGLÉS</Select.Option>
                        <Select.Option value="Estudios">Estudios</Select.Option>
                        <Select.Option value="Estudios con foto">Estudios con foto</Select.Option>
                        <Select.Option value="Estudios con foto_INGLÉS">Estudios con foto_INGLÉS</Select.Option>
                        <Select.Option value="Migración">Migración</Select.Option>
                        <Select.Option value="No baja">No baja</Select.Option>
                        <Select.Option value="No baja_INGLÉS">No baja_INGLÉS</Select.Option>
                        <Select.Option value="Promedio acumulado">Promedio acumulado</Select.Option>
                        <Select.Option value="Promedio acumulado_INGLÉS">Promedio acumulado_INGLÉS</Select.Option>
                        <Select.Option value="Promedio certificado">Promedio certificado</Select.Option>
                        <Select.Option value="Promedio certificado_INGLÉS">Promedio certificado_INGLÉS</Select.Option>
                        <Select.Option value="Promedio y rango graduado">Promedio y rango graduado</Select.Option>
                        <Select.Option value="Promedio y rango graduado_INGLÉS">Promedio y rango graduado_INGLÉS</Select.Option>
                        <Select.Option value="Terminación de carrera">Terminación de carrera</Select.Option>
                        <Select.Option value="Terminación de carrera_INGLÉS">Terminación de carrera_INGLÉS</Select.Option>
                        <Select.Option value="Terminación de plan">Terminación de plan</Select.Option>
                        <Select.Option value="Terminación de plan_INGLÉS">Terminación de plan_INGLÉS</Select.Option>
                    </Select>

                    
                </div>
                <br></br>


                <table width="100%">
                  <thead>
                    <tr style={{backgroundColor: "#D3D3D3"}}><th id="TituloCarta" colspan="2">{this.state.selectedOption}</th></tr>
                  </thead>  
                  <tr>
                    <th width="200px">Descripción: </th>
                    <td id="descInfo">Carta donde especifica que el alumno se encuentra inscrito en cierto periodo incluyendo el listado de materias inscritas, así como el promedio acumulado y el promedio del semestre anterior.</td>
                  </tr>
                  <br></br>
                  <tr>
                    <th>Requisitos: </th>
                    <td id="reqInfo">Ser alumno inscrito en el periodo académico vigente en Campus Monterrey</td>
                  </tr>
                  <br></br>
                  <tr>
                    <th>Medios de Solicitud de trámite: </th>
                    <td>*Presencial: Centro de Atención Punto Azul ubicado en el sotano del CETEC Torre Norte con un horario de atención de Lunes a Viernes de 8:00 AM a 6:00 PM.<br></br>Los pagos en CAJA se reciben de lunes a viernes de 8:00 AM a 6:00 PM.<br></br><br></br>
                    *Telefónico: Conmutador 83582000 Ext. 4241/ Directo 81582259  <br></br><br></br>
                    *Correo electrónico: <u>escolar.mty@servicios.itesm.mx</u></td>
                  </tr>
                </table>

            </div>

        );
    }
}
