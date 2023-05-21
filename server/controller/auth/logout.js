const logOutController = (req, res) => {
    res.clearCookie('token').redirect('/');
}
export default logOutController;