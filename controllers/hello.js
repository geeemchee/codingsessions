
exports.postName = (req, res, next) =>{
const name = req.params.name;
if (!name){
    return res.redirect('/');
}
else res.render('hello/hello', {nameValue: name, name: name});
}
