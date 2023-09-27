class Tarjeta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
    };
  }
  render() {
    const { logged } = this.state;
    retrn(<div className="App">{!logged && <Tarjeta />}</div>);
  }
}

export default Tarjeta;
