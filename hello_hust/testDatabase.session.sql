SELECT
    rolname AS 角色名,
    rolcanlogin AS 能否登录,
    rolsuper AS 是否超级管理员,
    rolcreatedb AS 能否建库
FROM pg_roles
WHERE rolname NOT LIKE 'pg_%';  -- 过滤掉所有以 pg_ 开头的系统角色