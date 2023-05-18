

class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'apikey=137831e707b8f63493b02a069fc7d055';

    getResource = async(url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }


    getAllCharaters = () => {
        return this.getResource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);

    }
    
    getAllCharater = (id) => {
        return this.getResource(`${this._apiBase}characters/${id}?&${this._apiKey}`);

    }
}

export default MarvelService;