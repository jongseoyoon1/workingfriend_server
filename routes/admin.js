var express = require('express');
var router = express.Router();
var request = require('request');
var bodyParser = require('body-parser');
const fs = require('fs');
const mime = require('mime');

var jsonParser = bodyParser.json()
var parser = bodyParser.urlencoded({extended:false});
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(express.json());

console.log(1234);


router.post('/plan_add', parser,function(req, res, next) {
    console.log(req.body)

    var title = req.body.title;
    var contents = req.body.contents;
    var company_id = 1;
    var grade = 0;
    var status = 0;
    var plan_type = 0;
    var store_id = 1;

    console.log(title);
    
    const options = {
        uri:'http://0.0.0.0:14000/api/v1/plan/',
        method: 'POST',
        body: {
            title:title,
            contents: contents,
            company_id: company_id,
            status: status,
            plan_type: plan_type,
            store_id: store_id
        },
        json:true
    }
    
    request.post(options, function (error, response, body) {
        //callback
        res.redirect(req.get('referer'));
    });
  })

/* 대시보드 */
router.get('/', function(req, res, next) {

    const options = {
        uri:'http://0.0.0.0:14000/api/v1/plan/client_plans',
        method: 'POST',
        body: {
            client_id:'1'
        },
        json:true
    }
    
    request.post(options, function (error, response, body) {
        //callback
        res.render('admin/admin_main', { repair: body.filter(body => body.plan_type == 0), construction: body.filter(body => body.plan_type == 1) });
    });
      
});


router.get('/repair_main', function(req, res, next) {

    const options = {
        uri:'http://0.0.0.0:14000/api/v1/plan/client_plans',
        method: 'POST',
        body: {
            client_id:'1'
        },
        json:true
    }
    
    request.post(options, function (error, response, body) {
        //callback
        console.log("load123")
        console.log(response)

        res.render('admin/repair_main', { repair: body.filter(body => body.plan_type == 0) });
    });

});

router.get('/repair_end', function(req, res, next) {
    const options = {
        uri:'http://0.0.0.0:14000/api/v1/plan/client_plans',
        method: 'POST',
        body: {
            client_id:'1'
        },
        json:true
    }
    
    request.post(options, function (error, response, body) {
        //callback
        res.render('admin/repair_end', { repair: body.filter(body => body.plan_type == 0).filter(body => body.status == 6) });
    });
    //res.render('admin/repair_end', { title: '' });
});

router.get('/repair_reject', function(req, res, next) {
    const options = {
        uri:'http://0.0.0.0:14000/api/v1/plan/client_plans',
        method: 'POST',
        body: {
            client_id:'1'
        },
        json:true
    }
    
    request.post(options, function (error, response, body) {
        //callback
        res.render('admin/repair_reject', { repair: body.filter(body => body.plan_type == 0).filter(body => body.status == 2) });
    });
    //res.render('admin/repair_reject', { title: '' });
});

router.get('/repair_drop', function(req, res, next) {
    const options = {
        uri:'http://0.0.0.0:14000/api/v1/plan/client_plans',
        method: 'POST',
        body: {
            client_id:'1'
        },
        json:true
    }
    
    request.post(options, function (error, response, body) {
        //callback
        res.render('admin/repair_drop', { repair: body.filter(body => body.plan_type == 0).filter(body => body.status == 9) });
    });
    //res.render('admin/repair_drop', { title: '' });
});


router.get('/repair_form', function(req, res, next) {

    const options = {
        uri:'http://0.0.0.0:14000/api/v1/brand/brand_list_with_stores',
        method: 'POST',
        body: {
            client_id:'1'
        },
        json:true
    }
    
    request.post(options, function (error, response, body) {
        //callback
        res.render('admin/repair_form', { brand: body });
    });
    //res.render('admin/repair_form', { title: '' });
});

router.get('/repair_request', function(req, res, next) {
    res.render('admin/repair_request', { title: '' });
});

router.get('/repair_request_live', function(req, res, next) {
    const options = {
        uri:'http://0.0.0.0:14000/api/v1/plan/client_plans',
        method: 'POST',
        body: {
            client_id:'1'
        },
        json:true
    }
    
    request.post(options, function (error, response, body) {
        //callback
        res.render('admin/repair_request_live', { repair: body
            .filter(body => body.plan_type == 0)
            .filter(body => body.status == 3) 
            .filter(body => body.repair_request.deadline_at >= new Date() )
        });
    });
    //res.render('admin/repair_request_live', { title: '' });
});

router.get('/repair_request_end', function(req, res, next) {
    const options = {
        uri:'http://0.0.0.0:14000/api/v1/plan/client_plans',
        method: 'POST',
        body: {
            client_id:'1'
        },
        json:true
    }
    
    request.post(options, function (error, response, body) {
        //callback
        res.render('admin/repair_request_end', { repair: body
            .filter(body => body.plan_type == 0)
            .filter(body => body.status == 3) 
            .filter(body => body.repair_request.deadline_at < new Date() )
        });
    });
    //res.render('admin/repair_request_end', { title: '' });
});


router.get('/construction_main', function(req, res, next) {
    const options = {
        uri:'http://0.0.0.0:14000/api/v1/plan/client_plans',
        method: 'POST',
        body: {
            client_id:'1'
        },
        json:true
    }
    
    request.post(options, function (error, response, body) {
        //callback
        res.render('admin/construction_main', { construction: body.filter(body => body.plan_type == 1) });
    });
    //res.render('admin/construction_main', { title: '' });
});

router.get('/construction_end', function(req, res, next) {
    const options = {
        uri:'http://0.0.0.0:14000/api/v1/plan/client_plans',
        method: 'POST',
        body: {
            client_id:'1'
        },
        json:true
    }
    
    request.post(options, function (error, response, body) {
        //callback
        res.render('admin/construction_end', { construction: body.filter(body => body.plan_type == 1).filter(body => body.status == 6) });
    });
    //res.render('admin/construction_end', { title: '' });
});

router.get('/construction_reject', function(req, res, next) {
    const options = {
        uri:'http://0.0.0.0:14000/api/v1/plan/client_plans',
        method: 'POST',
        body: {
            client_id:'1'
        },
        json:true
    }
    
    request.post(options, function (error, response, body) {
        //callback
        res.render('admin/construction_reject', { construction: body.filter(body => body.plan_type == 1).filter(body => body.status == 2) });
    });
   // res.render('admin/construction_reject', { title: '' });
});

router.get('/construction_drop', function(req, res, next) {
    const options = {
        uri:'http://0.0.0.0:14000/api/v1/plan/client_plans',
        method: 'POST',
        body: {
            client_id:'1'
        },
        json:true
    }
    
    request.post(options, function (error, response, body) {
        //callback
        res.render('admin/construction_drop', { construction: body.filter(body => body.plan_type == 1).filter(body => body.status == 9) });
    });
    //res.render('admin/construction_drop', { title: '' });
});


router.get('/construction_request', function(req, res, next) {
    res.render('admin/construction_request', { title: '' });
});

router.get('/construction_request_live', function(req, res, next) {
    res.render('admin/construction_request_live', { title: '' });
});

router.get('/construction_request_end', function(req, res, next) {
    res.render('admin/construction_request_end', { title: '' });
});



router.get('/brand_list', function(req, res, next) {
    const options = {
        uri:'http://0.0.0.0:14000/api/v1/brand/brand_list_with_stores',
        method: 'POST',
        body: {
            client_id:'1'
        },
        json:true
    }
    
    request.post(options, function (error, response, body) {
        //callback
        res.render('admin/brand_list', { brand: body });
    });
    //res.render('admin/brand_list', { title: '' });
});

router.get('/brand_registration', function(req, res, next) {
    res.render('admin/brand_registration', { title: '' });
});

router.get('/store_registration', function(req, res, next) {
    res.render('admin/store_registration', { title: '' });
});

router.get('/user_list', function(req, res, next) {
    res.render('admin/user_list', { title: '' });
});

router.get('/user_registration', function(req, res, next) {
    res.render('admin/user_registration', { title: '' });
});

router.get('/user_move', function(req, res, next) {
    res.render('admin/user_move', { title: '' });
});

router.get('/modal_sample', function(req, res, next) {
    res.render('admin/modal_sample', { title: '' });
});



//
// /* 전체사용자 리스트 */
// router.get('/member_list', function(req, res, next) {
//     res.render('admin/member_list', { title: '' });
// });
//
// /* 통계 - 컬렉션 */
// router.get('/collections_statistics', function(req, res, next) {
//     res.render('admin/collections_statistics', { title: '' });
// });
//
// router.get('/collections_statistics_2', function(req, res, next) {
//     res.render('admin/collections_statistics_2', { title: '' });
// });
//
// /* 통계 - 스티커 */
// router.get('/stickers_statistics', function(req, res, next) {
//     res.render('admin/stickers_statistics', { title: '' });
// });
//
// router.get('/stickers_statistics_2', function(req, res, next) {
//     res.render('admin/stickers_statistics_2', { title: '' });
// });
//
// /* 실시간 */
// router.get('/stickers_list', function(req, res, next) {
//     res.render('admin/stickers_list', { title: '' });
// });
//
// router.get('/collections_list', function(req, res, next) {
//     res.render('admin/collections_list', { title: '' });
// });
//
// router.get('/comments_list', function(req, res, next) {
//     res.render('admin/comments_list', { title: '' });
// });
//
// /* 신고 */
// router.get('/report_stickers', function(req, res, next) {
//     res.render('admin/report_stickers', { title: '' });
// });
//
// router.get('/report_colletions', function(req, res, next) {
//     res.render('admin/report_colletions', { title: '' });
// });
//
// /* 업로드 */
// router.get('/upload_collections', function(req, res, next) {
//     res.render('admin/upload_collections', { title: '' });
// });
//
// router.get('/upload_stickers', function(req, res, next) {
//     res.render('admin/upload_stickers', { title: '' });
// });
//
// router.get('/upload_account', function(req, res, next) {
//     res.render('admin/upload_account', { title: '' });
// });




module.exports = router;

