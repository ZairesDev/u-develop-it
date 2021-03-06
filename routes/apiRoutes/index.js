//* Will act as a central hub to pull them all routes within apiRoutes together.
const express = require(`express`);
const router = express.Router();

router.use(require(`./candidateRoutes`));
router.use(require(`./partyRoutes`));
router.use(require(`./voterRoutes`));
router.use(require(`./voteRoutes`));

module.exports = router;