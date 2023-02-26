import axios from 'axios';
const PICTURE_SOURCE = 'https://pixabay.com/api/';

const queryOptions = {
  key: '33963060-3bb6457bb0abf1bcfa88447b5',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 40,
};

async function fetchPictures(name, pageCounter) {
  const colectedURL = `${PICTURE_SOURCE}?key=${queryOptions.key}&q=${name}&image_type=${queryOptions.image_type}&orientation=${queryOptions.orientation}&safesearch=${queryOptions.safesearch}&page=${pageCounter}&per_page=${queryOptions.per_page}`;

  return axios.get(colectedURL).then(r => r.data.hits);
}

export { fetchPictures };
