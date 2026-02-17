import mongoose, { Schema, Document } from 'mongoose';

export interface IStatistics extends Document {
  // Installation identification
  installationId: string;
  
  // App info
  version: string;
  
  // System info
  platform: string;
  arch: string;
  nodeVersion: string;
  
  // Library statistics
  seriesCount: number;
  volumeCount: number;
  chapterCount: number;
  mediaFileCount: number;
  
  // Feature usage
  indexerCount: number;
  downloadClientCount: number;
  rootFolderCount: number;
  userCount: number;
  
  // Settings
  authEnabled: boolean;
  autoImportEnabled: boolean;
  calibreEnabled: boolean;
  
  // Database info
  databaseType: string;
  
  // Timestamps
  timestamp: string;
  receivedAt: Date;
}

const StatisticsSchema = new Schema<IStatistics>({
  installationId: { type: String, required: true, index: true },
  version: { type: String, required: true },
  platform: { type: String, required: true },
  arch: { type: String, required: true },
  nodeVersion: { type: String, required: true },
  seriesCount: { type: Number, required: true },
  volumeCount: { type: Number, required: true },
  chapterCount: { type: Number, required: true },
  mediaFileCount: { type: Number, required: true },
  indexerCount: { type: Number, required: true },
  downloadClientCount: { type: Number, required: true },
  rootFolderCount: { type: Number, required: true },
  userCount: { type: Number, required: true },
  authEnabled: { type: Boolean, required: true },
  autoImportEnabled: { type: Boolean, required: true },
  calibreEnabled: { type: Boolean, required: true },
  databaseType: { type: String, required: true },
  timestamp: { type: String, required: true },
  receivedAt: { type: Date, default: Date.now },
});

// Index for efficient queries
StatisticsSchema.index({ receivedAt: -1 });
StatisticsSchema.index({ installationId: 1, receivedAt: -1 });

export const Statistics = mongoose.model<IStatistics>('Statistics', StatisticsSchema);
