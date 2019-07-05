import React, { Component } from 'react';
import {
    Icon, Upload, message, Select, Divider,Button, Input, Form,
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
            admin: {},
            loadingTable:false,
            fileName:"",
            id_admin:undefined
        }
    }

    refreshData = () => {
        this.setState({loading:true});
        API.call('agregar_carta/',[], (response) => {

            this.setState({data: response, loading:false});
        });
    };

    componentWillMount() {
        this.refreshData();
    }

    uploadData = () => {
      let params = {
          descripcion: this.state.descripcion,
      };

            API.call('agregar_cartas/',{id_admin:'2', file:'Estudios.html', descripcion:'descripcion'}, (resposne) => {
                Notifications.openNotificationWithIcon("success","¡Información cargada exitosamente!","")
                API.redirectTo('/formatoCartas');
            });
    };

    handleSelect = (descripcion, keyvalue) => {
        this.setState({[descripcion]:keyvalue});
    };

    render() {
        return (
            <div>
            <h2>Carta nueva</h2>
            <Form.Item label="Descripción de la carta: ">
                <Input type={'text'} onChange={(e) => this.handleSelect('descripcion',e.target.value)}/>
            </Form.Item>
            <Upload.Dragger>
                <p className="ant-upload-drag-icon">
                    <Icon type="upload" />
                </p>
                <p className="ant-upload-text">Haz clic o arrastra un documento en esta área</p>
                <p className="ant-upload-hint">El sistema solo soporta archivos HTML</p>
            </Upload.Dragger>

                <Divider/>

                <Form.Item label="Fotos nesesarias para las cartas">
                  </Form.Item>

                  <Upload.Dragger>
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
