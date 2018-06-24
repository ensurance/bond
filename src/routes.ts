import {
  welcomeController
} from './controllers';

export default function routes(server: any): void {
  server.use('/', welcomeController);
}

