function isMobile() {

  try{ document.createEvent("TouchEvent"); return true; }

  catch(e){ return false;}

}

if(isMobile()){
	// document.location.href="https://old.nckuhub.com";
}