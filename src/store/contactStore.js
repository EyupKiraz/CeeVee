import { createSlice } from '@reduxjs/toolkit';
import * as emailjs from 'emailjs-com';

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
    resetState(state, action) {
      state.loading = false;
      state.error = false;
      state.sent = false;
    },
  },
});

const { sendEmailRequest, sendEmailSuccess, sendEmailFailed, resetState } = contactSlice.actions;

export const sendEmail = payload => async dispatch => {
  try {
    dispatch(sendEmailRequest());
    await emailjs
      .send(
        'gmail',
        'portfolio-contact-template',
        {
          from_email: payload.fromEmail,
          from_name: payload.name,
          message: payload.message,
          to_email: payload.recipientEmail,
        },
        process.env.EMAILJS_API_KEY
      )
      .then(dispatch({ type: 'EMAIL_SENT', payload: { test: 'test' } }));
    // setTimeout(() => dispatch({ type: 'EMAIL_SENT', payload: { test: 'test' } }), 1000);
    dispatch(sendEmailSuccess());
  } catch (e) {
    dispatch({ type: 'REQUEST_FAILED', payload: { error: e } });
    dispatch(sendEmailFailed());
  }
};

export const resetButton = payload => async dispatch => {
  try {
    dispatch(resetState());
  } catch (e) {
    dispatch({ type: 'REQUEST_FAILED', payload: { error: e } });
  }
};

export default contactSlice.reducer;
