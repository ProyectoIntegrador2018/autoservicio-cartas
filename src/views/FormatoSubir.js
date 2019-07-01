import React, { Component } from 'react';
import {
    Icon, Upload, message, Select, Divider,Button, Input, Form
} from 'antd';
import DataTable from "../components/DataTable";
import API from "../tools/API";
import Notifications from "../tools/Notifications";

export default class Documentos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading:true,
            data: [],
            dataTable: [],
            columns: [],
            disabled: true,
            proceso: {},
            loadingTable:false,
            fileName:"",
            id_proceso:undefined
        }
    }

    refreshData = () => {
        this.setState({loading:true});
        API.call('procesos/',[], (response) => {

            this.setState({data: response, loading:false});
        });
    };

    componentWillMount() {
        this.refreshData();
    }

    uploadData = () => {
      let params = {
          nombre: this.state.nombre,
      };
        let csv = JSON.stringify({data: this.state.dataTable, cols: this.state.columns });
        if (params.nombre == "" || this.state.id_proceso == undefined  ||   csv == undefined || csv == "" ||
             this.state.fileName == undefined ||
            this.state.fileName == "" ) {
            Notifications.openNotificationWithIcon("warning","Verifica que todos los campos estén completos","")
        } else {
            API.call('subir-documento/',{proceso: this.state.id_proceso, filename:this.state.fileName, content: csv}, (resposne) => {
                Notifications.openNotificationWithIcon("success","¡Información cargada exitosamente!","")
                API.redirectTo('/documentos');
            });
        }
    };

    parseFile = (file) => {
        this.setState({fileName:file.name});
        let Papa = require("papaparse/papaparse.min.js");
        Papa.parse(file, {
            header: false,
            download: true,
            skipEmptyLines: true,
            complete: this.updateData
        });
    };

    updateData = (result) => {
        const data = result.data;
        // Here this is available and we can call this.setState (since it's binded in the constructor)
        // or shorter ES syntax: this.setState({ data });
        if (this.state.columns && this.state.columns.length > 0) {
            let dataT = [];
            data.splice(1).map((item,index) => {
                let row = {};
                this.state.columns.map((col) => {
                    row[col.key] = item[col.llave];
                });
                dataT.push(row);
            });
            this.setState({dataTable: dataT});
        }
    };

    handleChange = (value) => {
        if (value != null) {
            let cols = [];
            this.setState({disabled: false, proceso: this.state.data[value], loadingTable: false});
            cols.push({key:"ticket",title:'# Ticket',llave:this.state.data[value].columna_ticket});
            cols.push({key:"matricula",title:'Matrícula',llave:this.state.data[value].columna_matricula});
            cols.push({key:"fecha_apertura",title:'Fecha de apertura',llave:this.state.data[value].columna_fecha_inicio});
            cols.push({key:"fecha_ultima",title:'Fecha de última actualización',llave:this.state.data[value].columna_fecha_ultima_actualizacion});
            this.setState({id_proceso: this.state.data[value].id});
            API.call('pasos-procesos/',{proceso: this.state.data[value].id}, (resposne) => {
                resposne.map((val) => {
                    cols.push({key:"paso_" + val.numero, title:val.nombre_mostrar, llave:val.columna_csv});
                });
                this.setState({columns: cols});
            });
        }
    };

    render() {
        return (
            <div>
            <h2>Carta nueva</h2>
            <Form.Item label="Nombre de la carta: ">
                <Input type={'text'} onChange={(e) => this.handleSelect('nombre',e.target.value)}/>
            </Form.Item>
            <Upload.Dragger
                beforeUpload={(file, fileList) => {this.parseFile(file);return false;}}>
                <p className="ant-upload-drag-icon">
                    <Icon type="upload" />
                </p>
                <p className="ant-upload-text">Haz clic o arrastra un documento en esta área</p>
                <p className="ant-upload-hint">El sistema solo soporta archivos HTML</p>
            </Upload.Dragger>

                <Divider/>

                <Form.Item label="Fotos nesesarias para las cartas">
                  </Form.Item>

                  <Upload.Dragger
                      beforeUpload={(file, fileList) => {this.parseFile(file);return false;}}>
                      <p className="ant-upload-drag-icon">
                          <Icon type="upload" />
                      </p>
                      <p className="ant-upload-text">Haz clic o arrastra un documento en esta área</p>
                      <p className="ant-upload-hint">El sistema solo soporta archivos PNG</p>
                  </Upload.Dragger>

                <Divider/>
                    <Button onClick={this.uploadData} style={{marginTop:10}} className={'button-success'}><Icon type={'upload'}/> Subir datos</Button>
            </div>
        );
    }
}
