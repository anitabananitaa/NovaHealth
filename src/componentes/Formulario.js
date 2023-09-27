import Input from "./componentes/Input";
import "./styles.css"

render() {
    return (
<div class="contenedor">
		<form action="" onsubmit="mostrarDatos(); return false;">
			<h1>jhrsgbh</h1>
			<div class="formulario">
				<Input type="text" id="inputa" placeholder="Surname" required />
			</div>
			<div class="formulario">
				<Input type="text" id="inputb" placeholder="Name" required />
			</div>
			<div class="formulario">
				<Input type="text" id="inputc" placeholder="DNI" pattern="[0-9]{8}" required/>
			</div>
			<div class="formulario">
				<Input type="emaiL" id="inputd" placeholder="Email" required/>
			</div>
			<div class="formulario">
				<Input type="text" id="inpute" placeholder="Direction" required/>
			</div>
			<div class="formulario">
				<Input type="password" id="password" placeholder="Password" required/>
			</div>
			<div class="formulario">
				<input type="password" id="repeatpassword" placeholder=" Repeat Password" required/>
			</div>
			<button type="button" class="btn" onclick ="validarContraseña()" id="crear" required>Create</button>
			<button type="button" class="btn"  onclick="goBack()" id="volver" required >Come Back</button>
		</form>
	</div>
    )
         }