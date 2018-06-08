import * as express from 'express'
import authRoutes from './routes/authRoutes';

class App {

  public express
  public authRoutes

  constructor () {
    this.express = express()
    this.authRoutes = authRoutes(express.Router())
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
      res.json({ Good: "Rizwan Zaheer typescript is awesome!" });
    });
    this.express.use('/', router)
    this.express.use('/emailtesting', router);
    this.express.use('/email', authRoutes);
  }
}

export default new App().express
