/* ------------------------------------------------------------------------------
 *
 *  # Custom JS code
 *
 *  Place here all your custom js. Make sure it's loaded after app.js
 *
 * ---------------------------------------------------------------------------- */
console.log(1);
var Modals = function () {


    //
    // Setup module components
    //

    // Load remote content
    var _componentModalRemote = function() {
        $('#modal_remote').on('show.bs.modal', function() {
            $(this).find('.modal-body').load('../../../../global_assets/demo_data/wizard/education.html');
        });
    };

    // Modal callbacks
    var _componentModalCallbacks = function() {

        // onShow callback
        $('#modal_onshow').on('show.bs.modal', function() {
            alert('onShow callback fired.')
        });

        // onShown callback
        $('#modal_onshown').on('shown.bs.modal', function() {
            alert('onShown callback fired.')
        });

        // onHide callback
        $('#modal_onhide').on('hide.bs.modal', function() {
            alert('onHide callback fired.')
        });

        // onHidden callback
        $('#modal_onhidden').on('hidden.bs.modal', function() {
            alert('onHidden callback fired.')
        });
    };

    // Bootbox extension
    var _componentModalBootbox = function() {
        if (typeof bootbox == 'undefined') {
            console.warn('Warning - bootbox.min.js is not loaded.');
            return;
        }



        // Prompt dialog
        $('#prompt').on('click', function() {
            console.log(1111);
            bootbox.prompt({
                title: '관리자 비밀번호를 입력해주세요.',
                buttons: {
                    confirm: {
                        label: '확인',
                        className: 'btn-primary'
                    },
                    cancel: {
                        label: '취소',
                        className: 'btn-link'
                    }
                },
                callback: function (result) {
                    if (result === null) {
                        return true;
                        bootbox.alert({
                            title: 'Prompt dismissed',
                            message: 'You have cancelled this damn thing'
                        });
                    } else {
                        bootbox.alert({
                            title: '홍길동 사원 비밀번호',
                            message: '패스워드1234'
                        });
                    }
                }
            });
        });

        $('#prompt2').on('click', function() {
            bootbox.prompt({
                title: '관리자 비밀번호를 입력해주세요.',
                buttons: {
                    confirm: {
                        label: '확인',
                        className: 'btn-primary'
                    },
                    cancel: {
                        label: '취소',
                        className: 'btn-link'
                    }
                },
                callback: function (result) {
                    if (result === null) {
                        return true;
                        bootbox.alert({
                            title: 'Prompt dismissed',
                            message: 'You have cancelled this damn thing'
                        });
                    } else {
                        bootbox.alert({
                            title: '고객사 관리자 비밀번호',
                            message: '패스워드1234'
                        });
                    }
                }
            });
        });



        // Custom bootbox dialog with form

    };


    //
    // Return objects assigned to module
    //

    return {
        initComponents: function() {
            _componentModalRemote();
            _componentModalCallbacks();
            _componentModalBootbox();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    Modals.initComponents();
});
console.log(2);