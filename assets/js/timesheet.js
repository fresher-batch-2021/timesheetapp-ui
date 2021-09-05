$("#header").load("_header.html");
$("#footer").load("footer.html");
$(document).ready(function() {
    $('#timesheet a').click(function(e) {
        e.preventDefault();
        $('#content').load($(this).attr('href'));
    });
});