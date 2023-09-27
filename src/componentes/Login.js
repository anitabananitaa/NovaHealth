import "./styles.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
    };
  }
  render() {
    const { logged } = this.state;
    retrn(<div className="App">{!logged && <Formulario />}</div>);
  }
}

export default Login;
