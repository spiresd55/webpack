console.log("login loaded");

let login = (username, password) => {
  console.log('attempting to login');
  if(username !== 'admin' || password !== 'radical') {
    console.log('incorrect login');
  }
};

//login('admin', 'bad password');
export {
  login
}
