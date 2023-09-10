
const { NodeSDK } = require('@opentelemetry/sdk-node');
const {
  SimpleLogRecordProcessor,
} = require('@opentelemetry/sdk-logs');
const {
  OTLPLogsExporter
} = require('@opentelemetry/exporter-logs-otlp-proto');

const sdk = new NodeSDK({
  logRecordProcessor: new SimpleLogRecordProcessor(new OTLPLogsExporter()),
});
sdk.start();