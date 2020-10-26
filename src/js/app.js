import api from "./api"
export default class app extends Component {
  state = {
    contact: [],
  }

  ComponentDidMaunt() {
    api.FetchContact().then(data => console.log(data))
  }
}