import React from "react";
import Card from "../components/card";
import FormGroup from "../components/form-group";
import { useNavigate } from 'react-router-dom';

import axios from 'axios'

class Login extends React.Component {

    state = {
        email: '',
        senha: '',
        mensagemErro: null
    }

    entrar = async () => {
        await axios.post('http://localhost:8080/api/usuarios/autenticar', {
            email: this.state.email,
            senha: this.state.senha
        }).then(response => {
            localStorage.setItem('_usuario_logado', JSON.stringify(response.data))

            this.props.navigate('/home');
        }).catch( erro => {
            this.setState({mensagemErro: erro.response.data});
        });
    }

    preCadastro = () => {

        this.props.navigate('/cadastro-usuarios');
    }

    render(){
        return(
            <div className="row">
                <div className="col-md-6" style={ {position : 'relative', left: '300px'} }>
                    <div className="bs-docs-section">
                        <Card title="Login">
                            <div className="row">
                                <span>{this.state.mensagemErro}</span>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="bs-component">
                                        <fieldset>
                                            <FormGroup label="Email: *" htmlFor="inputEmail">
                                                <input type="email" 
                                                    value={this.state.email}
                                                    onChange={e => this.setState({email: e.target.value})}
                                                    className="form-control mb-4" 
                                                    id="inputEmail" 
                                                    aria-describedby="emailHelp" 
                                                    placeholder="Digite o Email" 
                                                />
                                            </FormGroup>
                                            <FormGroup label="Senha: *" htmlFor="inputSenha">
                                                <input type="password" 
                                                    value={this.state.senha}
                                                    onChange={e => this.setState({senha: e.target.value})}
                                                    className="form-control mb-4" 
                                                    id="inputSenha" 
                                                    placeholder="Password" />
                                            </FormGroup>
                                            <button className="btn btn-success me-3" onClick={this.entrar} >Entrar</button>
                                            <button className="btn btn-danger me-3" onClick={this.preCadastro} >Cadastrar</button>
                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                        </Card>   
                    </div>
                </div>
            </div>
        );
    }
}

export default (props) => (
    <Login navigate={useNavigate()} />
);