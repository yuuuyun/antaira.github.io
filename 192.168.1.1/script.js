// ---------Responsive-navbar-active-animation-----------
function test(){
	var tabsNewAnim = $('#navbarSupportedContent');
	var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
	var activeItemNewAnim = tabsNewAnim.find('.active');
	var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
	var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
	var itemPosNewAnimTop = activeItemNewAnim.position();
	var itemPosNewAnimLeft = activeItemNewAnim.position();
	$(".hori-selector").css({
		"top":itemPosNewAnimTop.top + "px", 
		"left":itemPosNewAnimLeft.left + "px",
		"height": activeWidthNewAnimHeight + "px",
		"width": activeWidthNewAnimWidth + "px"
	});
	$("#navbarSupportedContent").on("click","li",function(e){
		$('#navbarSupportedContent ul li').removeClass("active");
		$(this).addClass('active');
		var activeWidthNewAnimHeight = $(this).innerHeight();
		var activeWidthNewAnimWidth = $(this).innerWidth();
		var itemPosNewAnimTop = $(this).position();
		var itemPosNewAnimLeft = $(this).position();
		$(".hori-selector").css({
			"top":itemPosNewAnimTop.top + "px", 
			"left":itemPosNewAnimLeft.left + "px",
			"height": activeWidthNewAnimHeight + "px",
			"width": activeWidthNewAnimWidth + "px"
		});
	});
}
$(document).ready(function(){
	setTimeout(function(){ test(); });
});
$(window).on('resize', function(){
	setTimeout(function(){ test(); }, 500);
});
$(".navbar-toggler").click(function(){
	$(".navbar-collapse").slideToggle(300);
	setTimeout(function(){ test(); });
});

// --------------add active class-on another-page move----------
jQuery(document).ready(function($){
	// Get current path and find target link
	var path = window.location.pathname.split("/").pop();

	// Account for home page with empty path
	if ( path == '' ) {
		path = 'index.html';
	}

	var target = $('#navbarSupportedContent ul li a[href="'+path+'"]');
	// Add active class to target link
	target.parent().addClass('active');
});

// -----上層navbar active切換--------
  
// -----下層navbar active切換--------
$(document).ready(function() {
	var currentUrl = window.location.href;
	$('.navbar-nav li a').removeClass('active').filter(function() {
	  return $(this).prop('href') == currentUrl;
	}).addClass('active');
  }); 

// --------------上下navbar的連接-----------
$('.navbar-nav .nav-item').on('click', function() {
	// Get the target from the clicked item
	var target = $(this).find('a').data('target');
	// Hide all navbars by default
$('#setupNavbar, #wirelessNavbar, #servicesNavbar, #securityNavbar, #access-restrictionsNavbar, #port-forwardingNavbar, #administrationNavbar, #statusNavbar').hide();

// Show the corresponding navbar based on the target
switch(target) {
	case 'setup':
	case 'basic-setup':
	case 'ipv6':
	case 'ddns':
	case 'mac-address-clone':
	case 'advanced-routing':
	case 'networking':
	case 'tunnels':
		$('#setupNavbar').show();
		break;
	case 'wireless':
	case 'basicSettings':
	case 'wireless-security':
	case 'mac-filter':
	case 'wlan0-WDS':
	case 'wlan1-WDS':
		$('#wirelessNavbar').show();
		break;
	case 'services':
	case 'freeradius':
	case 'pppoe-server':
	case 'vpn':
	case 'usb':
	case 'nas':
	case 'hotspot':
	case 'adBlocking':
		$('#servicesNavbar').show();
		break;
	case 'security':
		$('#securityNavbar').toggle();
		break;
	case 'access-restrictions':
		$('#access-restrictionsNavbar').toggle();
		break;
	case 'port-forwarding':
		$('#port-forwardingNavbar').toggle();
		break;
	case 'administration':
	case 'management':
	case 'keep-alive':
	case 'sysctl':
	case 'commands':
	case 'wol':
	case 'factory-defaults':
	case 'firmware-upgrade':
	case 'backup':
		$('#administrationNavbar').show();
		break;
	case 'status':
	case 'router':
	case 'wan':
	case 'lan':
	case 'status-wireless':
	case 'bandwidth':
	case 'syslog':
	case 'sys-info':
		$('#statusNavbar').show();
		break;
    }
});
