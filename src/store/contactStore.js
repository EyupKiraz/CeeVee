import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    sent: false,
    loading: false,
    error: false,
  },
  reducers: {
    sendEmailRequest(state, action) {
      state.loading = true;
    },
    sendEmailSuccess(state, action) {
      state.loading = false;
      state.sent = true;
    },
    sendEmailFailed(state, action) {
      state.loading = false;
      state.error = true;
    },
  },
});

const { sendEmailRequest, sendEmailSuccess, sendEmailFailed } = contactSlice.actions;

export const sendEmail = () => async dispatch => {
  try {
    dispatch(sendEmailRequest());
    // const response = await sendEmailApi();
    setTimeout(() => dispatch(sendEmailSuccess()), 2000);
  } catch (e) {
    dispatch(sendEmailFailed());
  }
};

export default contactSlice.reducer;
