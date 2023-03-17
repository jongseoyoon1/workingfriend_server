var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('admin/M_main', { title: 'Express' });
});

router.get('/M_clients_list', function(req, res, next) {
    res.render('admin/M_clients_list', { title: 'Express' });
});

router.get('/M_clients_upload', function(req, res, next) {
    res.render('admin/M_clients_upload', { title: 'Express' });
});

router.get('/M_interior_store_list', function(req, res, next) {
    res.render('admin/M_interior_store_list', { title: 'Express' });
});

router.get('/M_interior_store_upload', function(req, res, next) {
    res.render('admin/M_interior_store_upload', { title: 'Express' });
});


router.get('/M_repair_main', function(req, res, next) {
    res.render('admin/M_repair_main', { title: '' });
});

router.get('/M_repair_end', function(req, res, next) {
    res.render('admin/M_repair_end', { title: '' });
});

router.get('/M_repair_reject', function(req, res, next) {
    res.render('admin/M_repair_reject', { title: '' });
});

router.get('/M_repair_drop', function(req, res, next) {
    res.render('admin/M_repair_drop', { title: '' });
});


router.get('/M_repair_form', function(req, res, next) {
    res.render('admin/M_repair_form', { title: '' });
});

router.get('/M_repair_request', function(req, res, next) {
    res.render('admin/M_repair_request', { title: '' });
});

router.get('/M_repair_request_live', function(req, res, next) {
    res.render('admin/M_repair_request_live', { title: '' });
});

router.get('/M_repair_request_end', function(req, res, next) {
    res.render('admin/M_repair_request_end', { title: '' });
});


router.get('/M_construction_main', function(req, res, next) {
    res.render('admin/M_construction_main', { title: '' });
});

router.get('/M_construction_end', function(req, res, next) {
    res.render('admin/M_construction_end', { title: '' });
});

router.get('/M_construction_reject', function(req, res, next) {
    res.render('admin/M_construction_reject', { title: '' });
});

router.get('/M_construction_drop', function(req, res, next) {
    res.render('admin/M_construction_drop', { title: '' });
});


router.get('/M_construction_request', function(req, res, next) {
    res.render('admin/M_construction_request', { title: '' });
});

router.get('/M_construction_request_live', function(req, res, next) {
    res.render('admin/M_construction_request_live', { title: '' });
});

router.get('/M_construction_request_end', function(req, res, next) {
    res.render('admin/M_construction_request_end', { title: '' });
});




// router.get('/admin', function(req, res, next) {
//   res.render('admin/index', { title: 'Express' });
// });

module.exports = router;
