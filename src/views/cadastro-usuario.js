import React from "react";
import Card from "../components/card";
import FormGroup from "../components/form-group";
import { useNavigate } from "react-router-dom";

class CadastroUsuario extends React.Component {

    state = {
        nome: '',
        email: '',
        senha: '',
        senhaRepeticao: ''
    }

    cadastrar = () => {

    }

    cancelar = () => {
        this.props.navigate('/login');
    }

    render(){
        return(
            <Card title="Cadastro de Usuário">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bs-component">
                            <FormGroup label="Nome: *" htmlFor="inputNome">
                                <input type="text" 
                                    id="inputName" 
                                    className="form-control mb-4"
                                    name="nome" 
                                    onChange={e => this.setState({nome: e.target.value})}/>
                            </FormGroup>
                            <FormGroup label="Email: *" htmlFor="inputEmail">
                                <input type="email"
                                    id="inputEmail"
                                    className="form-control mb-4"
                                    name="email"
                                    onChange={e => this.setState({email: e.target.value})} />
                            </FormGroup>
                            <FormGroup label="Senha: *" htmlFor="inputSenha">
                                <input type="password"
                                    id="inputSenha"
                                    className="form-control mb-4"
                                    name="senha"
                                    onChange={e => this.setState({senha: e.target.value})} />
                            </FormGroup>
                            <FormGroup label="Repita a Senha: *" htmlFor="inputRepitaSenha">
                                <input type="password"
                                    id="inputRepitaSenha"
                                    className="form-control mb-4"
                                    name="senhaRepeticao"
                                    onChange={e => this.setState({senhaRepeticao: e.target.value})} />
                            </FormGroup>
                            <button type="button" onClick={this.cadastrar} className="btn btn-success me-3">Salvar</button>
                            <button type="button" onClick={this.cancelar} className="btn btn-danger me-3">Cancelar</button>

                        </div>
                    </div>
                </div>
            </Card>
        );
    }
}

export default (props) => (
    <CadastroUsuario navigate={useNavigate()} />
);