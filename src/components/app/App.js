import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import MarvelService from "../../services/MarvelService";

import decoration from "../../resources/img/vision.png";

const App = () => {
    const marvelService = new MarvelService();
    async function fetchCharacters() {
        const data = await marvelService.getAllCharacters();
        return data;
    }

    async function fetchCharacter(id) {
        const data = await marvelService.getCharacter(id);
        return data;
    }

    return (
        <div className="app">
            <AppHeader />
            <main>
                <RandomChar />
                <div className="char__content">
                    <CharList fetchCharacters={fetchCharacters} />
                    <CharInfo fetchCharacter={fetchCharacter} />
                </div>
                <img className="bg-decoration" src={decoration} alt="vision" />
            </main>
        </div>
    );
};

export default App;
