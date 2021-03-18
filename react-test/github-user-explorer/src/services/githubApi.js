const API_URL = 'http://localhost:3001/';

async function fetchUrl(url) {
  const response = await fetch(url);

  if (!response.ok) {
    const { status, statusText } = response;
    throw new Error(`${status} ${statusText}`);
  }

  return response;
}

async function toJson(object) {
  const json = await object.json();

  if (json.message) {
    throw new Error(json.message);
  }

  return json;
}

function mapUser(user) {
  const {
    login,
    name,
    email,
    location,
    company,
    bio,
    avatar_url,
    followers_url,
    following_url,
    organizations_url,
    starred_url,
    public_repos,
    public_gists,
    followers,
    following,
  } = user;

  return {
    login,
    name,
    email,
    location,
    company,
    bio,
    avatar_url,
    followers_url,
    following_url,
    organizations_url,
    starred_url,
    public_repos,
    public_gists,
    followers,
    following,
  };
}

async function getUserData(user) {
  const url = `${API_URL}${user}`;

  try {
    const response = await fetchUrl(url);
    const data = await toJson(response);

    return mapUser(data);
  } catch (error) {
    throw error;
  }
}

export default { getUserData };
