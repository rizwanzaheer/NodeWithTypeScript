// import App from '../App';
const authRoutes = (router) => {
  router.get('/emailtesting', (req, res) => {
    res.json({
      Good: 'typescript is awesome!'
    });
  });
}
export default authRoutes;