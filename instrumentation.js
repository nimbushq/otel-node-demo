
const { NodeSDK } = require('@opentelemetry/sdk-node');
const {
  SimpleLogRecordProcessor,
} = require('@opentelemetry/sdk-logs');
const {
  OTLPLogsExporter
} = require('@opentelemetry/exporter-logs-otlp-proto');
const { Resource } = require('@opentelemetry/resources');
const {
  SemanticResourceAttributes,
} = require('@opentelemetry/semantic-conventions');
const {
  getNodeAutoInstrumentations,
} = require('@opentelemetry/auto-instrumentations-node');
const {
  OTLPTraceExporter,
} = require('@opentelemetry/exporter-trace-otlp-proto');

const resource = Resource.default().merge(
  new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: "otel-node-demo",
    [SemanticResourceAttributes.SERVICE_VERSION]: "0.1.2",
  }),
);
const sdk = new NodeSDK({
  resource,
  logRecordProcessor: new SimpleLogRecordProcessor(new OTLPLogsExporter()),
  traceExporter: new OTLPTraceExporter(),
  instrumentations: [getNodeAutoInstrumentations()],
});
sdk.start();