import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import {Environment} from "./environment/environment";

export default ({ mode }) => {

  if (Environment.DEV === true) {
    process.env = Object.assign(process.env, loadEnv(mode, process.cwd(), ''));
    return defineConfig({
      plugins: [react()],
      server: {
        port: parseInt(Environment.APP_PORT),
      },
    });
  } else {
    process.env = Object.assign(process.env, loadEnv(mode, process.cwd(), ''));
    return defineConfig({
      plugins: [react()],
      server: {
        port: parseInt(Environment.API_ENDPOINT),
      },
    });
  }
};
