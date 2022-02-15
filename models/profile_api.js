const profileModel = require('./profile_model');

/**
 * POSTs a profile object
 * sends the newly created id back.
 * @param {*} req
 * @param {*} res
 */
exports.profilePost = async (req, res) => {
  console.log();
  console.log(req.body.userid);
  const profileId = await profileModel.createProfile(req.body.userid);
  res.status(201).send(profileId);
};


/**
 * POSTs a profile object
 * sends the newly created id back.
 * @param {*} req
 * @param {*} res
 */
exports.profileUpdate = async (req, res) => {
  console.log(req.body.userid);
  const profileId = await profileModel.updateProfile(req.body);
  res.status(200).send(profileId);
};
