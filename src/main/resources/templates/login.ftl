<#import "_layout/app.ftl" as app>

<@app.content>
    Login page

    <form action="/login" method="post">
        <input type="hidden" name="_csrf" value="${_csrf.token}"/>
        <input type="text" placeholder="Name" name="username">
        <input type="text" placeholder="Password" name="password">
        <button type="submit">Login</button>
    </form>

    <br/>
    <a href="/">Index page</a>
</@app.content>