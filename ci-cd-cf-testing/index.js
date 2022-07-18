/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.ci_cd_sum = (req, res) => {
    let result = 0;
    let x = Number(req.query.x);
    let y = Number(req.query.y);
    result = x + y;
    //This will return String
    res.status(200).send(result.toString());
};
