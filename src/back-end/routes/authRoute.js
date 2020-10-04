const {Router} = require('express');
const router = Router();

router.get('/login', (req, res) => {
    try {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
        const userRoutes = [
            {data: "23.03.2019", speed: 15, distance: "10 km", time: "40 min"}, {
                data: "23.03.2019",
                speed: 13,
                distance: "1 km",
                time: "5 min"
            }, {data: "24.03.2019", speed: 17, distance: "15 km", time: "30 min"}, {
                data: "25.03.2019",
                speed: 45,
                distance: "55 km",
                time: "120 min"
            }];
        res.json({token:token,userRoutes:userRoutes});
    } catch (e) {
    }
});

module.exports = router;
