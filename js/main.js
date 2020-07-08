$(document).ready(function () {


    $nav = $('.nav')
    $toggleCollapse = $('.toggle-collapse')

    /* Click Event To Toggle Menu */
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse')
    })
})