
const { NodeSDK } = require('@opentelemetry/sdk-node');
const {
  SimpleLogRecordProcessor,
  ConsoleLogRecordExporter,
} = require('@opentelemetry/sdk-logs');

const sdk = new NodeSDK({
  logRecordProcessor: new SimpleLogRecordProcessor(new ConsoleLogRecordExporter()),
});
sdk.start();