import React from "react";
import "../../assets/About/Equipes.css";
import photo from "../../source/equipes/eglise.png";

class Equipe extends React.Component {
	render() {
		return (
			<section className="contuner_equips">
				
				
				<div className="for">
					<h1 className="equipes_heder">les equipes</h1>
				</div>
				<div>
					<div className="all_img">
						<div>
							<div className="fir-para">
								<div className="fir">
									<h1>Nome</h1>
									<h2>Profesion:</h2>
									<h3>Email:</h3>
								</div>
								<img className="all_img_equipe" src={photo} alt="responsable de la mese" />
							</div>
							<div className="fir-para">
							<div className="fir">
									<h1>Nome</h1>
									<h2>Profesion:</h2>
									<h3>Email:</h3>
								</div>
								<img className="all_img_equipe" src={photo} alt="un de nos équipes" />
							</div>
						</div>
						<div>
							<div className="fir-para">
                            <div className="fir">
									<h1>Nome</h1>
									<h2>Profesion:</h2>
									<h3>Email:</h3>
								</div>
								<img  className="all_img_equipe" src={photo} alt="presponsable" />
							</div>
							<div className="fir-para">
                            <div className="fir">
									<h1>Nome</h1>
									<h2>Profesion:</h2>
									<h3>Email:</h3>
								</div>
								<img className="all_img_equipe" src={photo} alt="responsable" />
							</div>
						</div>
						<div>
							<div className="fir-para">
                            <div className="fir">
									<h1>Nome</h1>
									<h2>Profesion:</h2>
									<h3>Email:</h3>
								</div>
								<img className="all_img_equipe" src={photo} alt="responsable" />
							</div>
							
							<div className="fir-para">
                            <div className="fir">
									<h1>Nome</h1>
									<h2>Profesion:</h2>
									<h3>Email:</h3>
								</div>
								<img className="all_img_equipe" src={photo} alt="responsable" />
							
							</div>
							</div>
							{/* <div>
							<div className="fir-para">
							<div className="fir">
									<h1>Nome</h1>
									<h2>Profesion:</h2>
									<h3>Email:</h3>
								</div>
								<img  className="all_img_equipe" src={photo} alt="photo des éqipe"/>
							</div>

								<div className="fir-para">
								<div className="fir">
									<h1>Nome</h1>
									<h2>Profesion:</h2>
									<h3>Email:</h3>
								</div>
								<img  className="all_img_equipe" src={photo} alt="photo des éqipe"/>
								
								</div>
								</div>  */}
							</div>
						</div>
					</section>
		);
	}
}

export default Equipe;
