const API_URL = "https://thesimpsonsapi.com/api/characters";

export async function fetchSimsons(page){

    const responce = await fetch(`${API_URL}?page=${page}`);

    if (!responce.ok) {
      throw new Error(`Ошибка: ${responce.status}`);
    }

    return await responce.json();
};