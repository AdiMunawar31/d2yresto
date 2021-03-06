import CONFIG from './config';

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}/list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  IMAGE_SMALL: `${CONFIG.BASE_URL}/images/small/`,
  IMAGE_MEDIUM: `${CONFIG.BASE_URL}/images/medium/`,
  IMAGE_LARGE: `${CONFIG.BASE_URL}/images/large/`,
};

export default API_ENDPOINT;
