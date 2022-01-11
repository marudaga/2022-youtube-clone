export const trending = (req,res) => res.render("home");
//send 대신 render을 사용
export const see = (req,res) => {
    console.log(req.params);
    return res.send("watch");
}
export const edit = (req,res) => {
    console.log(req.params);
    return res.send("Edit");}
export const remove = (req,res) => res.send("remove Video");
export const search = (req,res) => res.send("Search");
export const upload = (req,res) => res.send("upload");
export const deleteVideo = (req,res) => {
    console.log(req.params);
    res.send("delete Video")
};
