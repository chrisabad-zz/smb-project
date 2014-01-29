// File for hijacking submission forms.

$("form").live('submit', function(e) {

    e.preventDefault();
    e.returnValue = false;

    console.log('You submitted the form!');
});