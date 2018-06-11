/**
 * 
 */
var today=moment();
function Calendarr(parentid) {
		    //this.el = document.getElementById(selector);
		      this.el=createElement('div','calendar');
		      this.parentid=parentid;
		    this.createcomponent=createElement('div','checkcalendar');
		    this.calendarcomponent=document.getElementById('calendarcomponent');
		    this.current = moment().date(1);
		    this.draw();
		   // selector.after(this.el);
		    this.el.style.display="none";
		    var current = document.querySelector('.today');
		    if(current) {
		      var self = this;
		      window.setTimeout(function() {
		        //self.openDay(current);
		      }, 500);
		    }
		   /* this.el.addEventListener('click',this.dayClick);*/
		    return this.el;
		  }
	  Calendarr.prototype.draw = function() {
		    //Create Header
		    this.drawHeader();
		    this.drawtableHeader();

		    //Draw Month
		   // this.drawMonth();

		  //  this.drawLegend();
		  }

	  Calendarr.prototype.drawHeader = function() {
	    var self = this;
	    if(!this.header) {
	      //Create the header elements
	      this.header = createElement('div', 'header');
	      this.header.className = 'header';
          var headtoogle=createElement('ul','cal-toogle');
          this.headtooglediv=createElement('div','headtooglediv');
          var selectdate=createElement('li','selectdate','');
          var selectdateanchor=createElement('a','lowfareanchor','');
          var selectdatespan=createElement('span','lowfarespan','Select Date');
          var lowfare=createElement('li','lowfare','');
          var lowfareanchor=createElement('a','lowfareanchor','');
          var calendaricon=createElement('i','holiday-icon','');
          calendaricon.style.right='127px';
          var lowfarespan=createElement('span','lowfarespan','Holiday');
          selectdateanchor.appendChild(calendaricon);
          selectdateanchor.appendChild(selectdatespan);
          selectdate.appendChild(selectdateanchor);
          lowfareanchor.appendChild(calendaricon);
          lowfareanchor.appendChild(lowfarespan);
           lowfare.appendChild(lowfareanchor);
          this.monthtitlediv=createElement('div','monthtitlediv');
	      this.title = createElement('h1');
	      var right = createElement('div', 'right');
	      right.addEventListener('click', function() {self.nextMonth(); });

	      var left = createElement('div', 'left');
	      left.addEventListener('click', function() { self.prevMonth(); });

	      //Append the Elements
	      headtoogle.appendChild(selectdate);
	      headtoogle.appendChild(lowfare);
	      this.headtooglediv.appendChild(headtoogle);
	      this.monthtitlediv.appendChild(this.title); 
	      this.monthtitlediv.appendChild(right);
	      this.monthtitlediv.appendChild(left);
	      this.header.appendChild(this.headtooglediv);
	      this.header.appendChild(this.monthtitlediv);
	      this.el.appendChild(this.header);
	    }

	    this.title.innerHTML = this.current.format('MMMM YYYY');
	  }
	  Calendarr.prototype.drawtableHeader=function()
	  {
		  var self=this;
		  var day=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
		  if(this.table)
			  {
			  this.oldtable=this.table;
			  this.oldtable.parentNode.removeChild(self.oldtable);
			  self.table = createElement('table', 'month');
			  this.tr1=createElement('tr','trhead');
			  for(var i=0;i<7;i++)
				  {
				  this.tr1.appendChild(createElement('th','dayname',day[i]));
				  }
			  this.table.appendChild(this.tr1);
			 this.el.appendChild(this.table);
		       self.backFill();
		        self.currentMonth();
		        self.fowardFill();
			  }
		  else
			  {
		  this.table=createElement('table','month');
		  this.tr1=createElement('tr','trhead');
		  for(var i=0;i<7;i++)
			  {
			  this.tr1.appendChild(createElement('th','dayname',day[i]));
			  }
		  this.table.appendChild(this.tr1);
		  this.el.appendChild(this.table);
		 this.backFill();
	      this.currentMonth();
	      this.fowardFill();
			  }
	  }
	  Calendarr.prototype.spanposition=function(event)
	  {
		 if(event.clientY<=160)
			 {
			 var day=event.target;
			 var tooltip=day.getElementsByClassName('holiday-tooltip');
			 tooltip[0].setAttribute("style","margin-top :50px");
			 }
	  }
	  Calendarr.prototype.drawMonth = function() {
		    var self = this;
		    if(this.month) {
		      this.oldMonth = this.month;
		      this.oldMonth.className = 'month out ' + (self.next ? 'next' : 'prev');
		      this.oldMonth.addEventListener('webkitAnimationEnd', function() {
		        self.oldMonth.parentNode.removeChild(self.oldMonth);
		        self.month = createElement('div', 'month');
		        self.backFill();
		        self.currentMonth();
		        self.fowardFill();
		        self.el.appendChild(self.month);
		        window.setTimeout(function() {
		          self.month.className = 'month in ' + (self.next ? 'next' : 'prev');
		        }, 16);
		      });
		    } else {
		        this.month = createElement('div', 'month');
		        this.el.appendChild(this.month);
		        this.backFill();
		        this.currentMonth();
		        this.fowardFill();
		        this.month.className = 'month new';
		    }
		  }
	  Calendarr.prototype.backFill = function() {
		    var clone = this.current.clone();
		    var dayOfWeek = clone.day();

		    if(!dayOfWeek) { return; }

		    clone.subtract('days', dayOfWeek+1);

		    for(var i = dayOfWeek; i > 0 ; i--) {
		      this.drawDay(clone.add('days', 1));
		    }
		  }
	  Calendarr .prototype.fowardFill = function() {
		    var clone = this.current.clone().add('months', 1).subtract('days', 1);
		    var dayOfWeek = clone.day();

		    if(dayOfWeek === 6) { return; }

		    for(var i = dayOfWeek; i < 6 ; i++) {
		      this.drawDay(clone.add('days', 1));
		    }
		  }
	  Calendarr.prototype.currentMonth = function() {
		    var clone = this.current.clone();

		    while(clone.month() === this.current.month()) {
		      this.drawDay(clone);
		      clone.add('days', 1);
		    }
		  }
	  Calendarr.prototype.drawDay = function(day) {
		    var self = this;
		    this.getWeek(day);

		    //Outer Day
		    var outer = createElement('td', this.getDayClass(day), day.format('DD'));
		    outer.dataset.parentId=this.parentid;
		    outer.dataset.date=day;
		    outer.addEventListener('click',this.dayClick);
		    if(day.day()===0||day.day()===6&&day.month()=== this.current.month())
		    {
		    	var holiday=createElement('p','holiday-tooltip','sunday');
		    	outer.appendChild(holiday);
		    	outer.style.color='yellow';
		    }
		    var price=createElement('span','price-display','25,000');
		    outer.appendChild(price);
		  //  var name = createElement('div', 'day-name', day.format('ddd'));

		    //Day Number
		  //  var number = createElement('div', 'day-number', day.format('DD'));


		    //Events
		   // var events = createElement('div', 'day-events');
		   // this.drawEvents(day, events);

		   // outer.appendChild(name);
		   // outer.appendChild(number);
		    //outer.appendChild(events);
		    this.week.appendChild(outer);
		  }
	  Calendarr.prototype.dayClick=function(event){
		  var element=event.currentTarget;
		  var datestring=element.dataset.date;
		  var date=new Date(datestring);
		  var parentelement=document.getElementById(element.dataset.parentId);
		  var datevalue=date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
		  parentelement.value=datevalue;
	  }
	  Calendarr.prototype.getWeek = function(day) {
		    if(!this.week || day.day() === 0) {
		      this.week = createElement('tr', 'week');
		      this.week.addEventListener("mouseover",this.spanposition);
		      this.table.appendChild(this.week);
		    }
		  }
	  Calendarr.prototype.getDayClass = function(day) {
		    classes = ['day'];
		    if(day.month() !== this.current.month()) {
		      classes.push('other');
		    } else if (today.isSame(day, 'day')) {
		      classes.push('today');
		    }
		    return classes.join(' ');
		  }
	  Calendarr.prototype.nextMonth = function() {
		    this.current.add('months', 1);
		    this.next = true;
		    this.draw();
		  }

		  Calendarr.prototype.prevMonth = function() {
		    this.current.subtract('months', 1);
		    this.next = false;
		    this.draw();
		  }


	  function createElement(tagName, className, innerText) {
		    var ele = document.createElement(tagName);
		    if(className) {
		      ele.className = className;
		    }
		    if(innerText) {
		      ele.innerText = ele.textContent = innerText;
		    }
		    return ele;
		  }

	  