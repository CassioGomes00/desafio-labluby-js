const initialState = {};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case 'FETCH_USER_STARTED':
      return { ...state, status: { loading: true, error: null } };

    case 'FETCH_USER_SUCCESS':
      return { ...action.payload, status: { loading: false, error: null } };

    case 'FETCH_USER_FAILURE':
      return { ...state, status: { loading: false, error: action.payload } };

    default:
      return state;
  }
}
