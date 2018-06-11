package handler;
import java.io.IOException;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.*;

public class CalendarHandler extends SimpleTagSupport
{
	public String message;
	public void setId(String msg)
	{
		this.message=msg;
	}
  public void doTag() throws JspException,IOException
  {
//	JspWriter out=getJspContext().getOut();
//	out.println(message);
  }
}
