/**
 * 
 */
function initialize()
{
  	var collection=document.getElementsByTagName('input');
//  	for(var i=0;i<collection.length;i++)
//  		this.append(collection[i]);
  	this.calendar=new Calendarr();
  	for(var i=0;i<collection.length;i++)
  		{
  		var test=Object.assign(this.calendar);
  	   test.parentElement=collection[i];
  		}
}
initialize.prototype.append=function(element)
{
	var option=element.dataset;
	if(option['calendar']==='true')
		{
		var parentid=element.getAttribute('id');
		var temp=new Calendarr(parentid);
		var id="testing"+element.getAttribute('id');
		temp.setAttribute("id",id);
		element.after(temp);
		element.addEventListener("click",this.calendarclick);
		}
}
initialize.prototype.calendarclick=function(event)
{
	var element=event.target;
	var id="testing"+element.getAttribute('id');
	var c=document.getElementById(id);
	c.removeAttribute('style');
}
initialize.prototype.check=function(calendar)
{
}