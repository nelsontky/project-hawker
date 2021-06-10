# Notes
## Postgres backup (INSERTS only)
```
docker exec project-hawker_postgres_1 pg_dump --inserts postgresql://project-hawker:password@localhost:5432/project-hawker > postgres-backups/backup_$(date +"%d_%b_%y_%H%M")
```

## Postgres restore
```
docker exec -i project-hawker_postgres_1 psql --dbname=postgresql://project-hawker:password@localhost:5432/project-hawker < postgres-backups/backup_
```
