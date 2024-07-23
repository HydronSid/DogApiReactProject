import axios from 'axios';

export async function getApiResponse(url) {
  try {
    const response = await axios.get(url);
    if (!response) {
      throw Error;
    }

    if (response.status === 200) {
      return response.data;
    } else {
      throw Error;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
}
