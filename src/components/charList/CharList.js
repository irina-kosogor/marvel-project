import { Component } from "react";
import "./charList.scss";

class CharList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: [],
        };
    }

    componentDidMount() {
        this.props.fetchCharacters().then((res) => {
            this.setState({ characters: res });
        });
    }

    render() {
        const { characters } = this.state;

        return (
            <div className="char__list">
                <ul className="char__grid">
                    {characters.map((character) => {
                        return (
                            <li className="char__item" key={character.id}>
                                <img src={character.thumbnail} alt="abyss" />
                                <div className="char__name">
                                    {character.name}
                                </div>
                            </li>
                        );
                    })}
                </ul>
                <button className="button button__main button__long">
                    <div className="inner">load more</div>
                </button>
            </div>
        );
    }
}

export default CharList;
