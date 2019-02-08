<#import "_layout/app.ftl" as app>

<@app.content>

    Mian page

    <form action="/logout" method="post">

        <input type="hidden" name="_csrf" value="${_csrf.token}"/>
        <input type="submit" value="Sign Out"/>
    </form>

</@app.content>