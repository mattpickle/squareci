$('.main-body').on('DOMNodeInserted', '.build', function(event) {
  if(event.currentTarget.firstChild.className == 'status-area') {
    var build = event.currentTarget;
    updateStatusColor(build.firstChild);
    $(build.firstChild).appendTo(event.currentTarget);
    $('#om-app').find('.dashboard').css('width', '80%');
    $('#om-app').find('.dashboard').css('margin', '2rem auto');
    $(build).find('.recent-commit-msg').css('margin', '0');
    $(build).find('.pull-revision')[0].style.display = 'none';
    $(build).find('.timing').css('margin-top', '1.65rem');
    $(build).find('.recent-status-badge').css('margin-top', '1.1rem');

    if($(build).find('.build-actions').length > 0) {
      $(build).find('.build-actions')[0].style.display = 'none';
    }
  }
});

function updateStatusColor(status) {
  if($(status).find('.busy').length > 0) {
    $(status).find('.busy')[0].style.background = '#1E96CB';
  } else if($(status).find('.pass').length > 0) {
    $(status).find('.pass')[0].style.background = '#2F9900';
  } else if($(status).find('.fail').length > 0) {
    $(status).find('.fail')[0].style.background = '#BE3937';
  }
}

hideAside();

function hideAside() {
  var aside = $('#om-app').find('.app-aside');
  aside[0].style.display = 'none';
}