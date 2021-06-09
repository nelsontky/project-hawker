FROM docker.elastic.co/logstash/logstash:7.13.1
COPY postgresql-42.2.20.jar /usr/share/logstash/logstash-core/lib/jars/postgresql.jar

RUN rm -f /usr/share/logstash/pipeline/logstash.conf
ADD pipeline/ /usr/share/logstash/pipeline/
ADD config/ /usr/share/logstash/config/