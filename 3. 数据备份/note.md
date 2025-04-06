## `mongodb`的备份与恢复

```shell
# 恢复
mongorestore -d <dbname> <backupDir>
# 备份
mongodump -d <dbname> -o <backupDir>
```

Eg.

mongodump -d test -o ./backup
mongorestore -d test ./backup/test
