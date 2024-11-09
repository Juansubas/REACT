import { Names } from '../enums/names';
import { ApiResponse } from '../interfaces/ApiResponse';
import { Movie } from '../interfaces/Movie';

async function getData({ search, sorted }: { search: string, sorted: boolean }): Promise<Movie[]> {
    const response = await fetch(`${Names.url}?s=${search}&apikey=${Names.apikey}`);
    const dataJson : ApiResponse = await response.json();
    if(sorted) return dataJson.Search.sort((a, b) => Number(b.Year) - Number(a.Year));
    return dataJson.Search;
}

export default getData;
