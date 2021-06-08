# Notes

## Postgres backup
```
docker exec project-hawker_postgres_1 pg_dump postgresql://project-hawker:password@localhost:5432/project-hawker > backup
```
## Postgres restore
```
docker exec -i project-hawker_postgres_1 psql --dbname=postgresql://project-hawker:password@localhost:5432/project-hawker < backup
```
