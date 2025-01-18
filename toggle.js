$(document).ready(function () {
    $('.collapse').on('show.bs.collapse', function () {
        // Ẩn tất cả các phần tử .pic trừ phần tử hiện tại
        $('.collapse').not(this).collapse('hide');
    });
});