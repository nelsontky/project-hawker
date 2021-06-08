# Notes

## Postgres backup
```
docker exec project-hawker_postgres_1 pg_dump postgresql://project-hawker:password@localhost:5432/project-hawker > backup
```
## Postgres restore
```
docker exec project-hawker_postgres_1 pg_restore postgresql://project-hawker:password@localhost:5432/project-hawker <> backup
```
