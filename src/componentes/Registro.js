class Registro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
    };
  }
  render() {
    const { logged } = this.state;
    retrn(<div className="App">{!logged && <Registro />}</div>);
  }
}

export default Registro;
