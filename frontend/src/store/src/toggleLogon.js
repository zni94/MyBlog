const TOGGLE_ON_OFF = 'TOGGLE/BLOG';

export const toggleOnOff = (state) => ({
  type: TOGGLE_ON_OFF,
  state,
});

const initialState = {
  logon: true,
};

const toggleLogon = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ON_OFF:
      return {
        ...state,
        logon: action.state,
      };
    default:
      return state;
  }
};

export default toggleLogon;
