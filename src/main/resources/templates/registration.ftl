<#import "_layout/app.ftl" as app>

<@app.content>
    Registration page

    <form action="/registration" method="post">
        <input type="hidden" name="_csrf" value="${_csrf.token}"/>
        <input type="text" placeholder="Name" name="username">
        <input type="text" placeholder="Password" name="password">
        <button type="submit">Register</button>
    </form>


    <a href="/">Index page</a>
</@app.content>