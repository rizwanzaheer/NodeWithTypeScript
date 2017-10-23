import App from '../App';
const authRoutes = (App) => {
  App.get('/email', (req, res) => {
    res.sendFile({
      Good: 'typescript is awesome!'
    });
  });
}
export default authRoutes;