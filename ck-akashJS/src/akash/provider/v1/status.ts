import { Quantity, QuantityAmino, QuantitySDKType } from "../../../k8s.io/apimachinery/pkg/api/resource/generated";
import { Cluster, ClusterAmino, ClusterSDKType } from "../../inventory/v1/cluster";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, toTimestamp, fromTimestamp } from "../../../helpers";
export interface ResourcesMetric_StorageEntry {
  key: string;
  value?: Quantity | undefined;
}
export interface ResourcesMetric_StorageEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface ResourcesMetric_StorageEntryAmino {
  key: string;
  value?: QuantityAmino | undefined;
}
export interface ResourcesMetric_StorageEntryAminoMsg {
  type: string;
  value: ResourcesMetric_StorageEntryAmino;
}
export interface ResourcesMetric_StorageEntrySDKType {
  key: string;
  value?: QuantitySDKType | undefined;
}
/** ResourceMetrics */
export interface ResourcesMetric {
  cpu?: Quantity | undefined;
  memory?: Quantity | undefined;
  gpu?: Quantity | undefined;
  ephemeralStorage?: Quantity | undefined;
  storage: {
    [key: string]: Quantity | undefined;
  };
}
export interface ResourcesMetricProtoMsg {
  typeUrl: "/akash.provider.v1.ResourcesMetric";
  value: Uint8Array;
}
/** ResourceMetrics */
export interface ResourcesMetricAmino {
  cpu?: QuantityAmino | undefined;
  memory?: QuantityAmino | undefined;
  gpu?: QuantityAmino | undefined;
  ephemeral_storage?: QuantityAmino | undefined;
  storage: {
    [key: string]: QuantityAmino | undefined;
  };
}
export interface ResourcesMetricAminoMsg {
  type: "/akash.provider.v1.ResourcesMetric";
  value: ResourcesMetricAmino;
}
/** ResourceMetrics */
export interface ResourcesMetricSDKType {
  cpu?: QuantitySDKType | undefined;
  memory?: QuantitySDKType | undefined;
  gpu?: QuantitySDKType | undefined;
  ephemeral_storage?: QuantitySDKType | undefined;
  storage: {
    [key: string]: QuantitySDKType | undefined;
  };
}
/** Leases */
export interface Leases {
  active: number;
}
export interface LeasesProtoMsg {
  typeUrl: "/akash.provider.v1.Leases";
  value: Uint8Array;
}
/** Leases */
export interface LeasesAmino {
  active: number;
}
export interface LeasesAminoMsg {
  type: "/akash.provider.v1.Leases";
  value: LeasesAmino;
}
/** Leases */
export interface LeasesSDKType {
  active: number;
}
/** ReservationsMetric */
export interface ReservationsMetric {
  count: number;
  resources: ResourcesMetric | undefined;
}
export interface ReservationsMetricProtoMsg {
  typeUrl: "/akash.provider.v1.ReservationsMetric";
  value: Uint8Array;
}
/** ReservationsMetric */
export interface ReservationsMetricAmino {
  count: number;
  resources: ResourcesMetricAmino | undefined;
}
export interface ReservationsMetricAminoMsg {
  type: "/akash.provider.v1.ReservationsMetric";
  value: ReservationsMetricAmino;
}
/** ReservationsMetric */
export interface ReservationsMetricSDKType {
  count: number;
  resources: ResourcesMetricSDKType | undefined;
}
/** Reservations */
export interface Reservations {
  pending: ReservationsMetric | undefined;
  active: ReservationsMetric | undefined;
}
export interface ReservationsProtoMsg {
  typeUrl: "/akash.provider.v1.Reservations";
  value: Uint8Array;
}
/** Reservations */
export interface ReservationsAmino {
  pending: ReservationsMetricAmino | undefined;
  active: ReservationsMetricAmino | undefined;
}
export interface ReservationsAminoMsg {
  type: "/akash.provider.v1.Reservations";
  value: ReservationsAmino;
}
/** Reservations */
export interface ReservationsSDKType {
  pending: ReservationsMetricSDKType | undefined;
  active: ReservationsMetricSDKType | undefined;
}
/** Inventory */
export interface Inventory {
  cluster: Cluster | undefined;
  reservations: Reservations | undefined;
}
export interface InventoryProtoMsg {
  typeUrl: "/akash.provider.v1.Inventory";
  value: Uint8Array;
}
/** Inventory */
export interface InventoryAmino {
  cluster: ClusterAmino | undefined;
  reservations: ReservationsAmino | undefined;
}
export interface InventoryAminoMsg {
  type: "/akash.provider.v1.Inventory";
  value: InventoryAmino;
}
/** Inventory */
export interface InventorySDKType {
  cluster: ClusterSDKType | undefined;
  reservations: ReservationsSDKType | undefined;
}
/** ClusterStatus */
export interface ClusterStatus {
  leases: Leases | undefined;
  inventory: Inventory | undefined;
}
export interface ClusterStatusProtoMsg {
  typeUrl: "/akash.provider.v1.ClusterStatus";
  value: Uint8Array;
}
/** ClusterStatus */
export interface ClusterStatusAmino {
  leases: LeasesAmino | undefined;
  inventory: InventoryAmino | undefined;
}
export interface ClusterStatusAminoMsg {
  type: "/akash.provider.v1.ClusterStatus";
  value: ClusterStatusAmino;
}
/** ClusterStatus */
export interface ClusterStatusSDKType {
  leases: LeasesSDKType | undefined;
  inventory: InventorySDKType | undefined;
}
/** BidEngineStatus */
export interface BidEngineStatus {
  orders: number;
}
export interface BidEngineStatusProtoMsg {
  typeUrl: "/akash.provider.v1.BidEngineStatus";
  value: Uint8Array;
}
/** BidEngineStatus */
export interface BidEngineStatusAmino {
  orders: number;
}
export interface BidEngineStatusAminoMsg {
  type: "/akash.provider.v1.BidEngineStatus";
  value: BidEngineStatusAmino;
}
/** BidEngineStatus */
export interface BidEngineStatusSDKType {
  orders: number;
}
/** ManifestStatus */
export interface ManifestStatus {
  deployments: number;
}
export interface ManifestStatusProtoMsg {
  typeUrl: "/akash.provider.v1.ManifestStatus";
  value: Uint8Array;
}
/** ManifestStatus */
export interface ManifestStatusAmino {
  deployments: number;
}
export interface ManifestStatusAminoMsg {
  type: "/akash.provider.v1.ManifestStatus";
  value: ManifestStatusAmino;
}
/** ManifestStatus */
export interface ManifestStatusSDKType {
  deployments: number;
}
/** Status */
export interface Status {
  errors: string[];
  cluster?: ClusterStatus | undefined;
  bidEngine?: BidEngineStatus | undefined;
  manifest?: ManifestStatus | undefined;
  publicHostnames: string[];
  timestamp: Date | undefined;
}
export interface StatusProtoMsg {
  typeUrl: "/akash.provider.v1.Status";
  value: Uint8Array;
}
/** Status */
export interface StatusAmino {
  errors: string[];
  cluster?: ClusterStatusAmino | undefined;
  bid_engine?: BidEngineStatusAmino | undefined;
  manifest?: ManifestStatusAmino | undefined;
  public_hostnames: string[];
  timestamp: string | undefined;
}
export interface StatusAminoMsg {
  type: "/akash.provider.v1.Status";
  value: StatusAmino;
}
/** Status */
export interface StatusSDKType {
  errors: string[];
  cluster?: ClusterStatusSDKType | undefined;
  bid_engine?: BidEngineStatusSDKType | undefined;
  manifest?: ManifestStatusSDKType | undefined;
  public_hostnames: string[];
  timestamp: Date | undefined;
}
function createBaseResourcesMetric_StorageEntry(): ResourcesMetric_StorageEntry {
  return {
    key: "",
    value: undefined
  };
}
export const ResourcesMetric_StorageEntry = {
  encode(message: ResourcesMetric_StorageEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Quantity.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResourcesMetric_StorageEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourcesMetric_StorageEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = Quantity.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ResourcesMetric_StorageEntry>): ResourcesMetric_StorageEntry {
    const message = createBaseResourcesMetric_StorageEntry();
    message.key = object.key ?? "";
    message.value = object.value !== undefined && object.value !== null ? Quantity.fromPartial(object.value) : undefined;
    return message;
  },
  fromAmino(object: ResourcesMetric_StorageEntryAmino): ResourcesMetric_StorageEntry {
    const message = createBaseResourcesMetric_StorageEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Quantity.fromAmino(object.value);
    }
    return message;
  },
  toAmino(message: ResourcesMetric_StorageEntry): ResourcesMetric_StorageEntryAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value ? Quantity.toAmino(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: ResourcesMetric_StorageEntryAminoMsg): ResourcesMetric_StorageEntry {
    return ResourcesMetric_StorageEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: ResourcesMetric_StorageEntryProtoMsg): ResourcesMetric_StorageEntry {
    return ResourcesMetric_StorageEntry.decode(message.value);
  },
  toProto(message: ResourcesMetric_StorageEntry): Uint8Array {
    return ResourcesMetric_StorageEntry.encode(message).finish();
  }
};
function createBaseResourcesMetric(): ResourcesMetric {
  return {
    cpu: undefined,
    memory: undefined,
    gpu: undefined,
    ephemeralStorage: undefined,
    storage: {}
  };
}
export const ResourcesMetric = {
  typeUrl: "/akash.provider.v1.ResourcesMetric",
  encode(message: ResourcesMetric, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cpu !== undefined) {
      Quantity.encode(message.cpu, writer.uint32(10).fork()).ldelim();
    }
    if (message.memory !== undefined) {
      Quantity.encode(message.memory, writer.uint32(18).fork()).ldelim();
    }
    if (message.gpu !== undefined) {
      Quantity.encode(message.gpu, writer.uint32(26).fork()).ldelim();
    }
    if (message.ephemeralStorage !== undefined) {
      Quantity.encode(message.ephemeralStorage, writer.uint32(34).fork()).ldelim();
    }
    Object.entries(message.storage).forEach(([key, value]) => {
      ResourcesMetric_StorageEntry.encode({
        key: key as any,
        value
      }, writer.uint32(42).fork()).ldelim();
    });
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResourcesMetric {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourcesMetric();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cpu = Quantity.decode(reader, reader.uint32());
          break;
        case 2:
          message.memory = Quantity.decode(reader, reader.uint32());
          break;
        case 3:
          message.gpu = Quantity.decode(reader, reader.uint32());
          break;
        case 4:
          message.ephemeralStorage = Quantity.decode(reader, reader.uint32());
          break;
        case 5:
          const entry5 = ResourcesMetric_StorageEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.storage[entry5.key] = entry5.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ResourcesMetric>): ResourcesMetric {
    const message = createBaseResourcesMetric();
    message.cpu = object.cpu !== undefined && object.cpu !== null ? Quantity.fromPartial(object.cpu) : undefined;
    message.memory = object.memory !== undefined && object.memory !== null ? Quantity.fromPartial(object.memory) : undefined;
    message.gpu = object.gpu !== undefined && object.gpu !== null ? Quantity.fromPartial(object.gpu) : undefined;
    message.ephemeralStorage = object.ephemeralStorage !== undefined && object.ephemeralStorage !== null ? Quantity.fromPartial(object.ephemeralStorage) : undefined;
    message.storage = Object.entries(object.storage ?? {}).reduce<{
      [key: string]: Quantity;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Quantity.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
  fromAmino(object: ResourcesMetricAmino): ResourcesMetric {
    const message = createBaseResourcesMetric();
    if (object.cpu !== undefined && object.cpu !== null) {
      message.cpu = Quantity.fromAmino(object.cpu);
    }
    if (object.memory !== undefined && object.memory !== null) {
      message.memory = Quantity.fromAmino(object.memory);
    }
    if (object.gpu !== undefined && object.gpu !== null) {
      message.gpu = Quantity.fromAmino(object.gpu);
    }
    if (object.ephemeral_storage !== undefined && object.ephemeral_storage !== null) {
      message.ephemeralStorage = Quantity.fromAmino(object.ephemeral_storage);
    }
    message.storage = Object.entries(object.storage ?? {}).reduce<{
      [key: string]: Quantity;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Quantity.fromAmino(value);
      }
      return acc;
    }, {});
    return message;
  },
  toAmino(message: ResourcesMetric): ResourcesMetricAmino {
    const obj: any = {};
    obj.cpu = message.cpu ? Quantity.toAmino(message.cpu) : Quantity.toAmino(Quantity.fromPartial({}));
    obj.memory = message.memory ? Quantity.toAmino(message.memory) : Quantity.toAmino(Quantity.fromPartial({}));
    obj.gpu = message.gpu ? Quantity.toAmino(message.gpu) : Quantity.toAmino(Quantity.fromPartial({}));
    obj.ephemeral_storage = message.ephemeralStorage ? Quantity.toAmino(message.ephemeralStorage) : Quantity.toAmino(Quantity.fromPartial({}));
    obj.storage = {};
    if (message.storage) {
      Object.entries(message.storage).forEach(([k, v]) => {
        obj.storage[k] = Quantity.toAmino(v);
      });
    }
    return obj;
  },
  fromAminoMsg(object: ResourcesMetricAminoMsg): ResourcesMetric {
    return ResourcesMetric.fromAmino(object.value);
  },
  fromProtoMsg(message: ResourcesMetricProtoMsg): ResourcesMetric {
    return ResourcesMetric.decode(message.value);
  },
  toProto(message: ResourcesMetric): Uint8Array {
    return ResourcesMetric.encode(message).finish();
  },
  toProtoMsg(message: ResourcesMetric): ResourcesMetricProtoMsg {
    return {
      typeUrl: "/akash.provider.v1.ResourcesMetric",
      value: ResourcesMetric.encode(message).finish()
    };
  }
};
function createBaseLeases(): Leases {
  return {
    active: 0
  };
}
export const Leases = {
  typeUrl: "/akash.provider.v1.Leases",
  encode(message: Leases, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.active !== 0) {
      writer.uint32(8).uint32(message.active);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Leases {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLeases();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.active = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Leases>): Leases {
    const message = createBaseLeases();
    message.active = object.active ?? 0;
    return message;
  },
  fromAmino(object: LeasesAmino): Leases {
    const message = createBaseLeases();
    if (object.active !== undefined && object.active !== null) {
      message.active = object.active;
    }
    return message;
  },
  toAmino(message: Leases): LeasesAmino {
    const obj: any = {};
    obj.active = message.active ?? 0;
    return obj;
  },
  fromAminoMsg(object: LeasesAminoMsg): Leases {
    return Leases.fromAmino(object.value);
  },
  fromProtoMsg(message: LeasesProtoMsg): Leases {
    return Leases.decode(message.value);
  },
  toProto(message: Leases): Uint8Array {
    return Leases.encode(message).finish();
  },
  toProtoMsg(message: Leases): LeasesProtoMsg {
    return {
      typeUrl: "/akash.provider.v1.Leases",
      value: Leases.encode(message).finish()
    };
  }
};
function createBaseReservationsMetric(): ReservationsMetric {
  return {
    count: 0,
    resources: ResourcesMetric.fromPartial({})
  };
}
export const ReservationsMetric = {
  typeUrl: "/akash.provider.v1.ReservationsMetric",
  encode(message: ReservationsMetric, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.count !== 0) {
      writer.uint32(8).uint32(message.count);
    }
    if (message.resources !== undefined) {
      ResourcesMetric.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ReservationsMetric {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReservationsMetric();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.count = reader.uint32();
          break;
        case 2:
          message.resources = ResourcesMetric.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ReservationsMetric>): ReservationsMetric {
    const message = createBaseReservationsMetric();
    message.count = object.count ?? 0;
    message.resources = object.resources !== undefined && object.resources !== null ? ResourcesMetric.fromPartial(object.resources) : undefined;
    return message;
  },
  fromAmino(object: ReservationsMetricAmino): ReservationsMetric {
    const message = createBaseReservationsMetric();
    if (object.count !== undefined && object.count !== null) {
      message.count = object.count;
    }
    if (object.resources !== undefined && object.resources !== null) {
      message.resources = ResourcesMetric.fromAmino(object.resources);
    }
    return message;
  },
  toAmino(message: ReservationsMetric): ReservationsMetricAmino {
    const obj: any = {};
    obj.count = message.count ?? 0;
    obj.resources = message.resources ? ResourcesMetric.toAmino(message.resources) : ResourcesMetric.toAmino(ResourcesMetric.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: ReservationsMetricAminoMsg): ReservationsMetric {
    return ReservationsMetric.fromAmino(object.value);
  },
  fromProtoMsg(message: ReservationsMetricProtoMsg): ReservationsMetric {
    return ReservationsMetric.decode(message.value);
  },
  toProto(message: ReservationsMetric): Uint8Array {
    return ReservationsMetric.encode(message).finish();
  },
  toProtoMsg(message: ReservationsMetric): ReservationsMetricProtoMsg {
    return {
      typeUrl: "/akash.provider.v1.ReservationsMetric",
      value: ReservationsMetric.encode(message).finish()
    };
  }
};
function createBaseReservations(): Reservations {
  return {
    pending: ReservationsMetric.fromPartial({}),
    active: ReservationsMetric.fromPartial({})
  };
}
export const Reservations = {
  typeUrl: "/akash.provider.v1.Reservations",
  encode(message: Reservations, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pending !== undefined) {
      ReservationsMetric.encode(message.pending, writer.uint32(10).fork()).ldelim();
    }
    if (message.active !== undefined) {
      ReservationsMetric.encode(message.active, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Reservations {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReservations();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pending = ReservationsMetric.decode(reader, reader.uint32());
          break;
        case 2:
          message.active = ReservationsMetric.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Reservations>): Reservations {
    const message = createBaseReservations();
    message.pending = object.pending !== undefined && object.pending !== null ? ReservationsMetric.fromPartial(object.pending) : undefined;
    message.active = object.active !== undefined && object.active !== null ? ReservationsMetric.fromPartial(object.active) : undefined;
    return message;
  },
  fromAmino(object: ReservationsAmino): Reservations {
    const message = createBaseReservations();
    if (object.pending !== undefined && object.pending !== null) {
      message.pending = ReservationsMetric.fromAmino(object.pending);
    }
    if (object.active !== undefined && object.active !== null) {
      message.active = ReservationsMetric.fromAmino(object.active);
    }
    return message;
  },
  toAmino(message: Reservations): ReservationsAmino {
    const obj: any = {};
    obj.pending = message.pending ? ReservationsMetric.toAmino(message.pending) : ReservationsMetric.toAmino(ReservationsMetric.fromPartial({}));
    obj.active = message.active ? ReservationsMetric.toAmino(message.active) : ReservationsMetric.toAmino(ReservationsMetric.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: ReservationsAminoMsg): Reservations {
    return Reservations.fromAmino(object.value);
  },
  fromProtoMsg(message: ReservationsProtoMsg): Reservations {
    return Reservations.decode(message.value);
  },
  toProto(message: Reservations): Uint8Array {
    return Reservations.encode(message).finish();
  },
  toProtoMsg(message: Reservations): ReservationsProtoMsg {
    return {
      typeUrl: "/akash.provider.v1.Reservations",
      value: Reservations.encode(message).finish()
    };
  }
};
function createBaseInventory(): Inventory {
  return {
    cluster: Cluster.fromPartial({}),
    reservations: Reservations.fromPartial({})
  };
}
export const Inventory = {
  typeUrl: "/akash.provider.v1.Inventory",
  encode(message: Inventory, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cluster !== undefined) {
      Cluster.encode(message.cluster, writer.uint32(10).fork()).ldelim();
    }
    if (message.reservations !== undefined) {
      Reservations.encode(message.reservations, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Inventory {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInventory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cluster = Cluster.decode(reader, reader.uint32());
          break;
        case 2:
          message.reservations = Reservations.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Inventory>): Inventory {
    const message = createBaseInventory();
    message.cluster = object.cluster !== undefined && object.cluster !== null ? Cluster.fromPartial(object.cluster) : undefined;
    message.reservations = object.reservations !== undefined && object.reservations !== null ? Reservations.fromPartial(object.reservations) : undefined;
    return message;
  },
  fromAmino(object: InventoryAmino): Inventory {
    const message = createBaseInventory();
    if (object.cluster !== undefined && object.cluster !== null) {
      message.cluster = Cluster.fromAmino(object.cluster);
    }
    if (object.reservations !== undefined && object.reservations !== null) {
      message.reservations = Reservations.fromAmino(object.reservations);
    }
    return message;
  },
  toAmino(message: Inventory): InventoryAmino {
    const obj: any = {};
    obj.cluster = message.cluster ? Cluster.toAmino(message.cluster) : Cluster.toAmino(Cluster.fromPartial({}));
    obj.reservations = message.reservations ? Reservations.toAmino(message.reservations) : Reservations.toAmino(Reservations.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: InventoryAminoMsg): Inventory {
    return Inventory.fromAmino(object.value);
  },
  fromProtoMsg(message: InventoryProtoMsg): Inventory {
    return Inventory.decode(message.value);
  },
  toProto(message: Inventory): Uint8Array {
    return Inventory.encode(message).finish();
  },
  toProtoMsg(message: Inventory): InventoryProtoMsg {
    return {
      typeUrl: "/akash.provider.v1.Inventory",
      value: Inventory.encode(message).finish()
    };
  }
};
function createBaseClusterStatus(): ClusterStatus {
  return {
    leases: Leases.fromPartial({}),
    inventory: Inventory.fromPartial({})
  };
}
export const ClusterStatus = {
  typeUrl: "/akash.provider.v1.ClusterStatus",
  encode(message: ClusterStatus, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.leases !== undefined) {
      Leases.encode(message.leases, writer.uint32(10).fork()).ldelim();
    }
    if (message.inventory !== undefined) {
      Inventory.encode(message.inventory, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ClusterStatus {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClusterStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.leases = Leases.decode(reader, reader.uint32());
          break;
        case 2:
          message.inventory = Inventory.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ClusterStatus>): ClusterStatus {
    const message = createBaseClusterStatus();
    message.leases = object.leases !== undefined && object.leases !== null ? Leases.fromPartial(object.leases) : undefined;
    message.inventory = object.inventory !== undefined && object.inventory !== null ? Inventory.fromPartial(object.inventory) : undefined;
    return message;
  },
  fromAmino(object: ClusterStatusAmino): ClusterStatus {
    const message = createBaseClusterStatus();
    if (object.leases !== undefined && object.leases !== null) {
      message.leases = Leases.fromAmino(object.leases);
    }
    if (object.inventory !== undefined && object.inventory !== null) {
      message.inventory = Inventory.fromAmino(object.inventory);
    }
    return message;
  },
  toAmino(message: ClusterStatus): ClusterStatusAmino {
    const obj: any = {};
    obj.leases = message.leases ? Leases.toAmino(message.leases) : Leases.toAmino(Leases.fromPartial({}));
    obj.inventory = message.inventory ? Inventory.toAmino(message.inventory) : Inventory.toAmino(Inventory.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: ClusterStatusAminoMsg): ClusterStatus {
    return ClusterStatus.fromAmino(object.value);
  },
  fromProtoMsg(message: ClusterStatusProtoMsg): ClusterStatus {
    return ClusterStatus.decode(message.value);
  },
  toProto(message: ClusterStatus): Uint8Array {
    return ClusterStatus.encode(message).finish();
  },
  toProtoMsg(message: ClusterStatus): ClusterStatusProtoMsg {
    return {
      typeUrl: "/akash.provider.v1.ClusterStatus",
      value: ClusterStatus.encode(message).finish()
    };
  }
};
function createBaseBidEngineStatus(): BidEngineStatus {
  return {
    orders: 0
  };
}
export const BidEngineStatus = {
  typeUrl: "/akash.provider.v1.BidEngineStatus",
  encode(message: BidEngineStatus, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.orders !== 0) {
      writer.uint32(8).uint32(message.orders);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BidEngineStatus {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBidEngineStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orders = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<BidEngineStatus>): BidEngineStatus {
    const message = createBaseBidEngineStatus();
    message.orders = object.orders ?? 0;
    return message;
  },
  fromAmino(object: BidEngineStatusAmino): BidEngineStatus {
    const message = createBaseBidEngineStatus();
    if (object.orders !== undefined && object.orders !== null) {
      message.orders = object.orders;
    }
    return message;
  },
  toAmino(message: BidEngineStatus): BidEngineStatusAmino {
    const obj: any = {};
    obj.orders = message.orders ?? 0;
    return obj;
  },
  fromAminoMsg(object: BidEngineStatusAminoMsg): BidEngineStatus {
    return BidEngineStatus.fromAmino(object.value);
  },
  fromProtoMsg(message: BidEngineStatusProtoMsg): BidEngineStatus {
    return BidEngineStatus.decode(message.value);
  },
  toProto(message: BidEngineStatus): Uint8Array {
    return BidEngineStatus.encode(message).finish();
  },
  toProtoMsg(message: BidEngineStatus): BidEngineStatusProtoMsg {
    return {
      typeUrl: "/akash.provider.v1.BidEngineStatus",
      value: BidEngineStatus.encode(message).finish()
    };
  }
};
function createBaseManifestStatus(): ManifestStatus {
  return {
    deployments: 0
  };
}
export const ManifestStatus = {
  typeUrl: "/akash.provider.v1.ManifestStatus",
  encode(message: ManifestStatus, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.deployments !== 0) {
      writer.uint32(8).uint32(message.deployments);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ManifestStatus {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseManifestStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deployments = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ManifestStatus>): ManifestStatus {
    const message = createBaseManifestStatus();
    message.deployments = object.deployments ?? 0;
    return message;
  },
  fromAmino(object: ManifestStatusAmino): ManifestStatus {
    const message = createBaseManifestStatus();
    if (object.deployments !== undefined && object.deployments !== null) {
      message.deployments = object.deployments;
    }
    return message;
  },
  toAmino(message: ManifestStatus): ManifestStatusAmino {
    const obj: any = {};
    obj.deployments = message.deployments ?? 0;
    return obj;
  },
  fromAminoMsg(object: ManifestStatusAminoMsg): ManifestStatus {
    return ManifestStatus.fromAmino(object.value);
  },
  fromProtoMsg(message: ManifestStatusProtoMsg): ManifestStatus {
    return ManifestStatus.decode(message.value);
  },
  toProto(message: ManifestStatus): Uint8Array {
    return ManifestStatus.encode(message).finish();
  },
  toProtoMsg(message: ManifestStatus): ManifestStatusProtoMsg {
    return {
      typeUrl: "/akash.provider.v1.ManifestStatus",
      value: ManifestStatus.encode(message).finish()
    };
  }
};
function createBaseStatus(): Status {
  return {
    errors: [],
    cluster: undefined,
    bidEngine: undefined,
    manifest: undefined,
    publicHostnames: [],
    timestamp: new Date()
  };
}
export const Status = {
  typeUrl: "/akash.provider.v1.Status",
  encode(message: Status, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.errors) {
      writer.uint32(10).string(v!);
    }
    if (message.cluster !== undefined) {
      ClusterStatus.encode(message.cluster, writer.uint32(18).fork()).ldelim();
    }
    if (message.bidEngine !== undefined) {
      BidEngineStatus.encode(message.bidEngine, writer.uint32(26).fork()).ldelim();
    }
    if (message.manifest !== undefined) {
      ManifestStatus.encode(message.manifest, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.publicHostnames) {
      writer.uint32(42).string(v!);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Status {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.errors.push(reader.string());
          break;
        case 2:
          message.cluster = ClusterStatus.decode(reader, reader.uint32());
          break;
        case 3:
          message.bidEngine = BidEngineStatus.decode(reader, reader.uint32());
          break;
        case 4:
          message.manifest = ManifestStatus.decode(reader, reader.uint32());
          break;
        case 5:
          message.publicHostnames.push(reader.string());
          break;
        case 6:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Status>): Status {
    const message = createBaseStatus();
    message.errors = object.errors?.map(e => e) || [];
    message.cluster = object.cluster !== undefined && object.cluster !== null ? ClusterStatus.fromPartial(object.cluster) : undefined;
    message.bidEngine = object.bidEngine !== undefined && object.bidEngine !== null ? BidEngineStatus.fromPartial(object.bidEngine) : undefined;
    message.manifest = object.manifest !== undefined && object.manifest !== null ? ManifestStatus.fromPartial(object.manifest) : undefined;
    message.publicHostnames = object.publicHostnames?.map(e => e) || [];
    message.timestamp = object.timestamp ?? undefined;
    return message;
  },
  fromAmino(object: StatusAmino): Status {
    const message = createBaseStatus();
    message.errors = object.errors?.map(e => e) || [];
    if (object.cluster !== undefined && object.cluster !== null) {
      message.cluster = ClusterStatus.fromAmino(object.cluster);
    }
    if (object.bid_engine !== undefined && object.bid_engine !== null) {
      message.bidEngine = BidEngineStatus.fromAmino(object.bid_engine);
    }
    if (object.manifest !== undefined && object.manifest !== null) {
      message.manifest = ManifestStatus.fromAmino(object.manifest);
    }
    message.publicHostnames = object.public_hostnames?.map(e => e) || [];
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = fromTimestamp(Timestamp.fromAmino(object.timestamp));
    }
    return message;
  },
  toAmino(message: Status): StatusAmino {
    const obj: any = {};
    if (message.errors) {
      obj.errors = message.errors.map(e => e);
    } else {
      obj.errors = message.errors;
    }
    obj.cluster = message.cluster ? ClusterStatus.toAmino(message.cluster) : undefined;
    obj.bid_engine = message.bidEngine ? BidEngineStatus.toAmino(message.bidEngine) : undefined;
    obj.manifest = message.manifest ? ManifestStatus.toAmino(message.manifest) : undefined;
    if (message.publicHostnames) {
      obj.public_hostnames = message.publicHostnames.map(e => e);
    } else {
      obj.public_hostnames = message.publicHostnames;
    }
    obj.timestamp = message.timestamp ? Timestamp.toAmino(toTimestamp(message.timestamp)) : new Date();
    return obj;
  },
  fromAminoMsg(object: StatusAminoMsg): Status {
    return Status.fromAmino(object.value);
  },
  fromProtoMsg(message: StatusProtoMsg): Status {
    return Status.decode(message.value);
  },
  toProto(message: Status): Uint8Array {
    return Status.encode(message).finish();
  },
  toProtoMsg(message: Status): StatusProtoMsg {
    return {
      typeUrl: "/akash.provider.v1.Status",
      value: Status.encode(message).finish()
    };
  }
};