import React from "react";
import axios from "axios";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "../../assets/login.css";
toast.configure();

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			errorEmail: false,
			errorPassword: false,
			error: "",
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}
	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};
	handleClick = () => {
		if (this.state.email === "") {
			this.setState({ errorEmail: true });
		} else {
			this.setState({ errorEmail: false });
		}
		if (this.state.password === "") {
			this.setState({ errorPassword: true });
		} else {
			this.setState({ errorPassword: false });
		}

		const options = {
			email: this.state.email,
			password: this.state.password,
		};
		axios
			.post("http://localhost:9000/V1/sigin", options, {
				headers: { "content-type": "application/json" },
			})
			.then((data) => {
				console.log(data);
				//console.log(options);
				if (data.status === 200) {
					localStorage.setItem("token", data.data.token);
					//console.log(localStorage);// token
				} else {
					this.setState({
						errorLogin: true,
					});
				}
				toast.success("welcome to class page", {position: toast.POSITION.TOP_CENTER})
				this.props.history.push("/Cours");
			})
			.catch((error) =>  toast.error(error.response.data.message,{position: toast.POSITION.TOP_CENTER}));
	};
	render() {
		return (
			<section>
				<div className="container">
					<div className="form_log">
						<h1 className="header_login">Login</h1>
					</div>
					<div className="lebls">
						<label htmlFor="email">
							<b>Email</b>
						</label>
						<input
							style={
								this.state.errorEmail
									? { border: "1px solid red" }
									: { border: "" }
							}
							className="prenom"
							type="text"
							placeholder="Enter Email"
							name="email"
							required
							onChange={this.handleChange}
						/>
						<span>
						</span>{this.state.errorEmail}
						
						<label htmlFor="psw">
							<b>Password</b>
						</label>
						<input
							style={
								this.state.errorPassword
									? { border: "1px solid red" }
									: { border: "" }
							}
							type="password"
							placeholder="Enter Password"
							name="password"
							required
							onChange={this.handleChange}
						/>
						<button
							onClick={this.handleClick}
							type="submit"
							className="signupbtn"
						>
							Login
						</button>
					</div>
				</div>
			</section>
		);
	}
}
export default Login;
