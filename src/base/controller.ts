import express, { Router, Request, Response, NextFunction } from 'express';
import { logger } from '../utils';

export default class Controller {
  protected provider = express;
  protected router: Router = express.Router();

  constructor() {
    this.router.use(this.logging)
    this.router.get('/', this.index);
    this.router.get('/new', this.construct);
    this.router.post('/', this.create);
    this.router.get('/edit/:id', this.edit);
    this.router.put('/:id', this.update);
    this.router.delete('/:id', this.destroy);
  }

  protected index(request: Request, response: Response) {}
  protected construct(request: Request, response: Response) {}
  protected create(request: Request, response: Response) {}
  protected edit(request: Request, response: Response) {}
  protected update(request: Request, response: Response) {}
  protected destroy(request: Request, response: Response) {}

  protected logging(request: Request, response: Response, next: NextFunction) {
    logger.info(`Requst - path: '${request.path}', params: '${JSON.stringify(request.params)}'`);

    next();
  }

  public export() {
    return this.router;
  }
}
