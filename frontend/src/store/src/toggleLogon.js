const TOGGLE_ON_OFF = 'TOGGLE/BLOG';

export const toggleOnOff = (state) => ({
  type: TOGGLE_ON_OFF,
  state,
});

const initialState = {
  logon: false,
};

const toggleLogon = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ON_OFF:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default toggleLogon;
