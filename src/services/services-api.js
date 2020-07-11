import axios from "axios"
const BASE_URL = `https://swapi.dev/api/films/`
const fetchArtile =(query="")=>(
axios.get(BASE_URL+query)
)
export default fetchArtile