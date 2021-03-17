import React from 'react';
import './App.css';
import { appleService } from './appleService';

interface states {
  initialList: string[];
  searchList: string[];
  interval: any;
  inputText: string;
  inputChanged: boolean;
}
class App extends React.Component<{}, states> {
  private appleApi: string = "https://itunes.apple.com/search?term=";

  constructor(props: {}) {
    super(props);
    this.state = {
      initialList: ['A', 'B', 'C', 'D', 'E'],
      searchList: [],
      interval: null,
      inputText: '',
      inputChanged: false
    }
    this.details = this.details.bind(this);
  }

  fetchDataFromApi(inputText: string, currentInitialList: string[]) {
    appleService.getFirstFiveSongs(inputText).then((items: any) => {
      currentInitialList.push(items.shift());
      this.setState({ searchList: items});
    }).catch(console.log);
  }

  details() {
    let currentInitialList = this.state.initialList;
    let shiftedElement = currentInitialList.shift();
    let currentSearchList = this.state.searchList;
    if (this.state.inputText && this.state.inputChanged) {
      this.fetchDataFromApi(this.state.inputText, currentInitialList);
      this.setState({ inputChanged: false });
    }
    else if (currentSearchList.length > 0) {
      currentInitialList.push(currentSearchList.shift()!);
      this.setState({ searchList: currentSearchList });
    }
    else if (shiftedElement) {
      currentInitialList.push(shiftedElement);
    }
    this.setState({ initialList: currentInitialList });
  }

  componentDidMount() {
    this.setState({ interval: setInterval(this.details, 1000) });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  renderLi(liHtml: string, index: number) {
    return <li key={index}>{liHtml}</li>;
  }

  handleChange(e: any) {
    this.setState({ inputText: e.target.value, inputChanged: true });
  }

  render() {
    return (
      <div className="App">
        <input type="text" placeholder="Search songs" onChange={(e) => this.handleChange(e)} />
        <ul>
          {this.state.initialList.map((e: string, index: number) => this.renderLi(e, index))}
        </ul>
      </div>
    );
  }
}

export default App;
