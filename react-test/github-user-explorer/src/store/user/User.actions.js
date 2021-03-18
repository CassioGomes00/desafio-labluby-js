import githubApiServices from '../../services/githubApi';

export function fetchUser(user) {
  return (dispatch) => {
    dispatch(fetchUserStarted());

    const doFetch = async (user) => {
      try {
        const fetchedUser = await githubApiServices.getUserData(user);

        dispatch(fetchUserSuccess(fetchedUser));
      } catch (error) {
        dispatch(fetchUserFailure(error.message));
      }
    };

    doFetch(user);
  };
}

function fetchUserStarted() {
  return {
    type: 'FETCH_USER_STARTED',
  };
}

function fetchUserSuccess(user) {
  return {
    type: 'FETCH_USER_SUCCESS',
    payload: user,
  };
}

function fetchUserFailure(errorMessage) {
  return {
    type: 'FETCH_USER_FAILURE',
    payload: errorMessage,
  };
}
