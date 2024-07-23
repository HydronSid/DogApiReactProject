import {RemoteUrls} from './remote-urls';
import {getApiResponse} from './use-app-write';

export const getRandomDogImages = async () => {
  try {
    const response = await getApiResponse(`${RemoteUrls.getRandomDogImages}/3`);

    return response.message;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};
