const axios = require("axios");
exports.homeRoutes = (req, res) => {
  //Make a get request to /api/users
  axios
    .get("http://localhost:3000/api/users")
    .then(function (response) {
      res.render("index", { users: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
  // res.render('index',{users:"New Data"})
};
exports.add_user = (req, res) => {
  res.render("addUser");
};
exports.update_user = (req, res) => {
axios.get("http://localhost:3000/api/users",{params:{id:req.query.id}}).then(function(userdata){
  res.render("updateUser",{user:userdata.data})}).catch(err=>{
    res.send(err);
  })
}

