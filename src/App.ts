import * as express from 'express'

class App {
  public express

  constructor () {
    this.express = express()
    this.mountRoutes()
  }

  private mountRoutes (): void {
    const router = express.Router()
    router.get('/', (req, res) => {
      res.json({
        message: 'Typescript with Nodejs Starter Kit!'
      })
    })
    router.get("/email", (req, res) => {
      res.josn({ Good: "typescript is awesome!" });
    });
    this.express.use('/', router)
    this.express.use('/email', router);
  }
}

export default new App().express
