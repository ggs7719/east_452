function TABchang(tabPanel)
{   
      // alert(tabPanel.id + "有"+tabPanel.tabs.length);    
      
        var intervalID=window.setInterval(function (){
        var currentTabIndex=tabPanel.current_tab;
	if(currentTabIndex+1>tabPanel.tabs.length-1)
	{
	  currentTabIndex=0;
	}
	else
	{
	   currentTabIndex+=1;
	} 
        tabPanel.current_tab=currentTabIndex;	 	
	selectTabPanel(tabPanel, currentTabIndex,true);	   	   
        //document.getElementById(tabPanel.tabs[currentTabIndex].tab_id).focus(); <=不能加 
	
  }
   ,5000); 
   
   
    this.node = document.getElementById(tabPanel.id);
    browser.addEvent(this.node, "click", function(event) { return window.clearInterval(intervalID);}, false);
 
   
}






 
