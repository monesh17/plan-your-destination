<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
    <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
    <html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
        <title>Welcome</title>
        <spring:url value="/js/closure-library/closure/goog/base.js" var="base" />
	     <spring:url value="/js/front/deps.js" var="deps" />
    </head>
    <body>
    <script src="${base} "></script>
          <script src="${deps} " ></script>
           <script>
                goog.require('example.condition');
            </script>
            <script>
              example.condition();
              </script>
        <table>
            <tr>
                <td>Welcome ${username}</td>
            </tr>
            <tr>
            </tr>
            <tr>
            </tr>
        </table>
    </body>
    </html>