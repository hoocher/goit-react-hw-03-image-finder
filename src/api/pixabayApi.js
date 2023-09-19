import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api';

export const getImagesApi = async (q, page) => {
  const { data } = await axios(
    `?q=${q}&page=${page}&key=38646784-30fa50ee56e34cceca0d99061&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data;
};
