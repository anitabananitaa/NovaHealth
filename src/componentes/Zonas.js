class Zonas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
    };
  }
  render() {
    const { logged } = this.state;
    retrn(<div className="App">{!logged && <Zonas />}</div>);
  }
}

export default Zonas;
