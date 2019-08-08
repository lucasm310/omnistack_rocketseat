import React from 'react';
import './Login.css';
import logo from '../assets/logo.svg'

function Login() {
	return (
	  <div className="login-container">
		  <form>
			  <img src={logo} alt="Tindev"></img>
				<input placeholder="Digite seu usuário no GitHub" />
				<button type="submit">Salvar</button>
		  </form>
	  </div>
	
	);
}
export default Login;