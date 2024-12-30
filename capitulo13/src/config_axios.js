import axios from "axios";

//cria uma instance Axios com a URL da base do web Service a ser acessado pelo app
export const inAxios = axios.create({baseURL: 'http://localhost:3001'});