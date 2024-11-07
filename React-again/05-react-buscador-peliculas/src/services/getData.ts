import { Names } from '../enums/names';
import { ApiResponse } from '../interfaces/ApiResponse';
import { Movie } from '../interfaces/Movie';

async function getData({ search }: { search: string }): Promise<Movie[]> {
    const response = await fetch(`${Names.url}?s=${search}&apikey=${Names.apikey}`);
    const dataJson : ApiResponse = await response.json();
    return dataJson.Search;
}

export default getData;
