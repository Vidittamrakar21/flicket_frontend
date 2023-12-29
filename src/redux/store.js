import {configureStore } from '@reduxjs/toolkit';
import ticketreducer from './ticketslice';


export const store = configureStore({
    reducer: {
        ticket: ticketreducer,
    }
})