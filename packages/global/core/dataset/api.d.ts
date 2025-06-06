import type { DatasetDataIndexItemType, DatasetSchemaType } from './type';
import type {
  DatasetCollectionTypeEnum,
  DatasetCollectionDataProcessModeEnum,
  ChunkSettingModeEnum,
  DataChunkSplitModeEnum
} from './constants';
import type { LLMModelItemType } from '../ai/model.d';
import type { ParentIdType } from 'common/parentFolder/type';

/* ================= dataset ===================== */
export type DatasetUpdateBody = {
  id: string;
  parentId?: ParentIdType;
  name?: string;
  avatar?: string;
  intro?: string;

  agentModel?: string;
  vlmModel?: string;

  websiteConfig?: DatasetSchemaType['websiteConfig'];
  externalReadUrl?: DatasetSchemaType['externalReadUrl'];
  defaultPermission?: DatasetSchemaType['defaultPermission'];
  apiServer?: DatasetSchemaType['apiServer'];
  yuqueServer?: DatasetSchemaType['yuqueServer'];
  feishuServer?: DatasetSchemaType['feishuServer'];
  chunkSettings?: DatasetSchemaType['chunkSettings'];

  // sync schedule
  autoSync?: boolean;
};

/* ================= collection ===================== */
export type DatasetCollectionChunkMetadataType = {
  parentId?: string;
  customPdfParse?: boolean;
  trainingType?: DatasetCollectionDataProcessModeEnum;
  imageIndex?: boolean;
  autoIndexes?: boolean;

  chunkSettingMode?: ChunkSettingModeEnum;
  chunkSplitMode?: DataChunkSplitModeEnum;

  chunkSize?: number;
  indexSize?: number;

  chunkSplitter?: string;
  qaPrompt?: string;
  metadata?: Record<string, any>;
};

// create collection params
export type CreateDatasetCollectionParams = DatasetCollectionChunkMetadataType & {
  datasetId: string;
  name: string;
  type: DatasetCollectionTypeEnum;

  fileId?: string;
  rawLink?: string;
  externalFileId?: string;
  externalFileUrl?: string;
  apiFileId?: string;

  rawTextLength?: number;
  hashRawText?: string;

  tags?: string[];

  createTime?: Date;
  updateTime?: Date;
  nextSyncTime?: Date;
};

export type ApiCreateDatasetCollectionParams = DatasetCollectionChunkMetadataType & {
  datasetId: string;
  tags?: string[];
};
export type TextCreateDatasetCollectionParams = ApiCreateDatasetCollectionParams & {
  name: string;
  text: string;
};
export type LinkCreateDatasetCollectionParams = ApiCreateDatasetCollectionParams & {
  link: string;
};
export type ApiDatasetCreateDatasetCollectionParams = ApiCreateDatasetCollectionParams & {
  name: string;
  apiFileId: string;
};
export type FileIdCreateDatasetCollectionParams = ApiCreateDatasetCollectionParams & {
  fileId: string;
};
export type reTrainingDatasetFileCollectionParams = DatasetCollectionChunkMetadataType & {
  datasetId: string;
  collectionId: string;
};
export type FileCreateDatasetCollectionParams = ApiCreateDatasetCollectionParams & {
  fileMetadata?: Record<string, any>;
  collectionMetadata?: Record<string, any>;
};
export type CsvTableCreateDatasetCollectionParams = {
  datasetId: string;
  parentId?: string;
  fileId: string;
};
export type ExternalFileCreateDatasetCollectionParams = ApiCreateDatasetCollectionParams & {
  externalFileId?: string;
  externalFileUrl: string;
  filename?: string;
};

/* ================= tag ===================== */
export type CreateDatasetCollectionTagParams = {
  datasetId: string;
  tag: string;
};
export type AddTagsToCollectionsParams = {
  originCollectionIds: string[];
  collectionIds: string[];
  datasetId: string;
  tag: string;
};
export type UpdateDatasetCollectionTagParams = {
  datasetId: string;
  tagId: string;
  tag: string;
};

/* ================= data ===================== */
export type PgSearchRawType = {
  id: string;
  collection_id: string;
  score: number;
};
export type PushDatasetDataChunkProps = {
  q: string; // embedding content
  a?: string; // bonus content
  chunkIndex?: number;
  indexes?: Omit<DatasetDataIndexItemType, 'dataId'>[];
};

export type PostWebsiteSyncParams = {
  datasetId: string;
};

export type PushDatasetDataProps = {
  collectionId: string;
  data: PushDatasetDataChunkProps[];
  trainingType?: DatasetCollectionDataProcessModeEnum;
  autoIndexes?: boolean;
  imageIndex?: boolean;
  prompt?: string;

  billId?: string;

  // Abandon
  trainingMode?: DatasetCollectionDataProcessModeEnum;
};
export type PushDatasetDataResponse = {
  insertLen: number;
};
