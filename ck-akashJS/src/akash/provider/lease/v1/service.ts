import { LeaseID, LeaseIDAmino, LeaseIDSDKType } from "../../../market/v1beta4/lease";
import { Group, GroupAmino, GroupSDKType } from "../../../manifest/v2beta2/group";
import { Long, isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { JsonSafe } from "../../../../json-safe";
/** LeaseServiceStatus */
export interface LeaseServiceStatus {
  available: number;
  total: number;
  uris: string[];
  observedGeneration: Long;
  replicas: number;
  updatedReplicas: number;
  readyReplicas: number;
  availableReplicas: number;
}
export interface LeaseServiceStatusProtoMsg {
  typeUrl: "/akash.provider.lease.v1.LeaseServiceStatus";
  value: Uint8Array;
}
/** LeaseServiceStatus */
export interface LeaseServiceStatusAmino {
  available?: number;
  total?: number;
  uris?: string[];
  observed_generation?: string;
  replicas?: number;
  updated_replicas?: number;
  ready_replicas?: number;
  available_replicas?: number;
}
export interface LeaseServiceStatusAminoMsg {
  type: "/akash.provider.lease.v1.LeaseServiceStatus";
  value: LeaseServiceStatusAmino;
}
/** LeaseServiceStatus */
export interface LeaseServiceStatusSDKType {
  available: number;
  total: number;
  uris: string[];
  observed_generation: Long;
  replicas: number;
  updated_replicas: number;
  ready_replicas: number;
  available_replicas: number;
}
/** LeaseIPStatus */
export interface LeaseIPStatus {
  port: number;
  externalPort: number;
  protocol: string;
  ip: string;
}
export interface LeaseIPStatusProtoMsg {
  typeUrl: "/akash.provider.lease.v1.LeaseIPStatus";
  value: Uint8Array;
}
/** LeaseIPStatus */
export interface LeaseIPStatusAmino {
  port: number;
  external_port: number;
  protocol: string;
  ip: string;
}
export interface LeaseIPStatusAminoMsg {
  type: "/akash.provider.lease.v1.LeaseIPStatus";
  value: LeaseIPStatusAmino;
}
/** LeaseIPStatus */
export interface LeaseIPStatusSDKType {
  port: number;
  external_port: number;
  protocol: string;
  ip: string;
}
/** ForwarderPortStatus */
export interface ForwarderPortStatus {
  host: string;
  port: number;
  externalPort: number;
  proto: string;
  name: string;
}
export interface ForwarderPortStatusProtoMsg {
  typeUrl: "/akash.provider.lease.v1.ForwarderPortStatus";
  value: Uint8Array;
}
/** ForwarderPortStatus */
export interface ForwarderPortStatusAmino {
  host: string;
  port: number;
  external_port: number;
  proto: string;
  name: string;
}
export interface ForwarderPortStatusAminoMsg {
  type: "/akash.provider.lease.v1.ForwarderPortStatus";
  value: ForwarderPortStatusAmino;
}
/** ForwarderPortStatus */
export interface ForwarderPortStatusSDKType {
  host: string;
  port: number;
  external_port: number;
  proto: string;
  name: string;
}
/** ServiceStatus */
export interface ServiceStatus {
  name: string;
  status: LeaseServiceStatus | undefined;
  ports: ForwarderPortStatus[];
  ips: LeaseIPStatus[];
}
export interface ServiceStatusProtoMsg {
  typeUrl: "/akash.provider.lease.v1.ServiceStatus";
  value: Uint8Array;
}
/** ServiceStatus */
export interface ServiceStatusAmino {
  name: string;
  status: LeaseServiceStatusAmino | undefined;
  ports: ForwarderPortStatusAmino[];
  ips: LeaseIPStatusAmino[];
}
export interface ServiceStatusAminoMsg {
  type: "/akash.provider.lease.v1.ServiceStatus";
  value: ServiceStatusAmino;
}
/** ServiceStatus */
export interface ServiceStatusSDKType {
  name: string;
  status: LeaseServiceStatusSDKType | undefined;
  ports: ForwarderPortStatusSDKType[];
  ips: LeaseIPStatusSDKType[];
}
/** SendManifestRequest is request type for the SendManifest Providers RPC method */
export interface SendManifestRequest {
  leaseId: LeaseID | undefined;
  manifest: Group[];
}
export interface SendManifestRequestProtoMsg {
  typeUrl: "/akash.provider.lease.v1.SendManifestRequest";
  value: Uint8Array;
}
/** SendManifestRequest is request type for the SendManifest Providers RPC method */
export interface SendManifestRequestAmino {
  lease_id: LeaseIDAmino | undefined;
  manifest: GroupAmino[];
}
export interface SendManifestRequestAminoMsg {
  type: "/akash.provider.lease.v1.SendManifestRequest";
  value: SendManifestRequestAmino;
}
/** SendManifestRequest is request type for the SendManifest Providers RPC method */
export interface SendManifestRequestSDKType {
  lease_id: LeaseIDSDKType | undefined;
  manifest: GroupSDKType[];
}
/** SendManifestResponse is response type for the SendManifest Providers RPC method */
export interface SendManifestResponse {}
export interface SendManifestResponseProtoMsg {
  typeUrl: "/akash.provider.lease.v1.SendManifestResponse";
  value: Uint8Array;
}
/** SendManifestResponse is response type for the SendManifest Providers RPC method */
export interface SendManifestResponseAmino {}
export interface SendManifestResponseAminoMsg {
  type: "/akash.provider.lease.v1.SendManifestResponse";
  value: SendManifestResponseAmino;
}
/** SendManifestResponse is response type for the SendManifest Providers RPC method */
export interface SendManifestResponseSDKType {}
/** ServiceLogsRequest */
export interface ServiceLogsRequest {
  leaseId: LeaseID | undefined;
  services: string[];
}
export interface ServiceLogsRequestProtoMsg {
  typeUrl: "/akash.provider.lease.v1.ServiceLogsRequest";
  value: Uint8Array;
}
/** ServiceLogsRequest */
export interface ServiceLogsRequestAmino {
  lease_id: LeaseIDAmino | undefined;
  services: string[];
}
export interface ServiceLogsRequestAminoMsg {
  type: "/akash.provider.lease.v1.ServiceLogsRequest";
  value: ServiceLogsRequestAmino;
}
/** ServiceLogsRequest */
export interface ServiceLogsRequestSDKType {
  lease_id: LeaseIDSDKType | undefined;
  services: string[];
}
/** ServiceLogs */
export interface ServiceLogs {
  name: string;
  logs: Uint8Array;
}
export interface ServiceLogsProtoMsg {
  typeUrl: "/akash.provider.lease.v1.ServiceLogs";
  value: Uint8Array;
}
/** ServiceLogs */
export interface ServiceLogsAmino {
  name: string;
  logs: string;
}
export interface ServiceLogsAminoMsg {
  type: "/akash.provider.lease.v1.ServiceLogs";
  value: ServiceLogsAmino;
}
/** ServiceLogs */
export interface ServiceLogsSDKType {
  name: string;
  logs: Uint8Array;
}
/** ServiceLogsResponse */
export interface ServiceLogsResponse {
  services: ServiceLogs[];
}
export interface ServiceLogsResponseProtoMsg {
  typeUrl: "/akash.provider.lease.v1.ServiceLogsResponse";
  value: Uint8Array;
}
/** ServiceLogsResponse */
export interface ServiceLogsResponseAmino {
  services: ServiceLogsAmino[];
}
export interface ServiceLogsResponseAminoMsg {
  type: "/akash.provider.lease.v1.ServiceLogsResponse";
  value: ServiceLogsResponseAmino;
}
/** ServiceLogsResponse */
export interface ServiceLogsResponseSDKType {
  services: ServiceLogsSDKType[];
}
/** ShellRequest */
export interface ShellRequest {
  leaseId: LeaseID | undefined;
}
export interface ShellRequestProtoMsg {
  typeUrl: "/akash.provider.lease.v1.ShellRequest";
  value: Uint8Array;
}
/** ShellRequest */
export interface ShellRequestAmino {
  lease_id: LeaseIDAmino | undefined;
}
export interface ShellRequestAminoMsg {
  type: "/akash.provider.lease.v1.ShellRequest";
  value: ShellRequestAmino;
}
/** ShellRequest */
export interface ShellRequestSDKType {
  lease_id: LeaseIDSDKType | undefined;
}
/** ServiceStatusRequest */
export interface ServiceStatusRequest {
  leaseId: LeaseID | undefined;
  services: string[];
}
export interface ServiceStatusRequestProtoMsg {
  typeUrl: "/akash.provider.lease.v1.ServiceStatusRequest";
  value: Uint8Array;
}
/** ServiceStatusRequest */
export interface ServiceStatusRequestAmino {
  lease_id: LeaseIDAmino | undefined;
  services: string[];
}
export interface ServiceStatusRequestAminoMsg {
  type: "/akash.provider.lease.v1.ServiceStatusRequest";
  value: ServiceStatusRequestAmino;
}
/** ServiceStatusRequest */
export interface ServiceStatusRequestSDKType {
  lease_id: LeaseIDSDKType | undefined;
  services: string[];
}
/** ServiceStatusResponse */
export interface ServiceStatusResponse {
  services: ServiceStatus[];
}
export interface ServiceStatusResponseProtoMsg {
  typeUrl: "/akash.provider.lease.v1.ServiceStatusResponse";
  value: Uint8Array;
}
/** ServiceStatusResponse */
export interface ServiceStatusResponseAmino {
  services: ServiceStatusAmino[];
}
export interface ServiceStatusResponseAminoMsg {
  type: "/akash.provider.lease.v1.ServiceStatusResponse";
  value: ServiceStatusResponseAmino;
}
/** ServiceStatusResponse */
export interface ServiceStatusResponseSDKType {
  services: ServiceStatusSDKType[];
}
function createBaseLeaseServiceStatus(): LeaseServiceStatus {
  return {
    available: 0,
    total: 0,
    uris: [],
    observedGeneration: Long.ZERO,
    replicas: 0,
    updatedReplicas: 0,
    readyReplicas: 0,
    availableReplicas: 0
  };
}
export const LeaseServiceStatus = {
  typeUrl: "/akash.provider.lease.v1.LeaseServiceStatus",
  encode(message: LeaseServiceStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.available !== 0) {
      writer.uint32(8).int32(message.available);
    }
    if (message.total !== 0) {
      writer.uint32(16).int32(message.total);
    }
    for (const v of message.uris) {
      writer.uint32(26).string(v!);
    }
    if (!message.observedGeneration.isZero()) {
      writer.uint32(32).int64(message.observedGeneration);
    }
    if (message.replicas !== 0) {
      writer.uint32(40).int32(message.replicas);
    }
    if (message.updatedReplicas !== 0) {
      writer.uint32(48).int32(message.updatedReplicas);
    }
    if (message.readyReplicas !== 0) {
      writer.uint32(56).int32(message.readyReplicas);
    }
    if (message.availableReplicas !== 0) {
      writer.uint32(64).int32(message.availableReplicas);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): LeaseServiceStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLeaseServiceStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.available = reader.int32();
          break;
        case 2:
          message.total = reader.int32();
          break;
        case 3:
          message.uris.push(reader.string());
          break;
        case 4:
          message.observedGeneration = reader.int64() as Long;
          break;
        case 5:
          message.replicas = reader.int32();
          break;
        case 6:
          message.updatedReplicas = reader.int32();
          break;
        case 7:
          message.readyReplicas = reader.int32();
          break;
        case 8:
          message.availableReplicas = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LeaseServiceStatus {
    return {
      available: isSet(object.available) ? Number(object.available) : 0,
      total: isSet(object.total) ? Number(object.total) : 0,
      uris: Array.isArray(object?.uris) ? object.uris.map((e: any) => String(e)) : [],
      observedGeneration: isSet(object.observedGeneration) ? Long.fromValue(object.observedGeneration) : Long.ZERO,
      replicas: isSet(object.replicas) ? Number(object.replicas) : 0,
      updatedReplicas: isSet(object.updatedReplicas) ? Number(object.updatedReplicas) : 0,
      readyReplicas: isSet(object.readyReplicas) ? Number(object.readyReplicas) : 0,
      availableReplicas: isSet(object.availableReplicas) ? Number(object.availableReplicas) : 0
    };
  },
  toJSON(message: LeaseServiceStatus): JsonSafe<LeaseServiceStatus> {
    const obj: any = {};
    message.available !== undefined && (obj.available = Math.round(message.available));
    message.total !== undefined && (obj.total = Math.round(message.total));
    if (message.uris) {
      obj.uris = message.uris.map(e => e);
    } else {
      obj.uris = [];
    }
    message.observedGeneration !== undefined && (obj.observedGeneration = (message.observedGeneration || Long.ZERO).toString());
    message.replicas !== undefined && (obj.replicas = Math.round(message.replicas));
    message.updatedReplicas !== undefined && (obj.updatedReplicas = Math.round(message.updatedReplicas));
    message.readyReplicas !== undefined && (obj.readyReplicas = Math.round(message.readyReplicas));
    message.availableReplicas !== undefined && (obj.availableReplicas = Math.round(message.availableReplicas));
    return obj;
  },
  fromPartial(object: Partial<LeaseServiceStatus>): LeaseServiceStatus {
    const message = createBaseLeaseServiceStatus();
    message.available = object.available ?? 0;
    message.total = object.total ?? 0;
    message.uris = object.uris?.map(e => e) || [];
    message.observedGeneration = object.observedGeneration !== undefined && object.observedGeneration !== null ? Long.fromValue(object.observedGeneration) : Long.ZERO;
    message.replicas = object.replicas ?? 0;
    message.updatedReplicas = object.updatedReplicas ?? 0;
    message.readyReplicas = object.readyReplicas ?? 0;
    message.availableReplicas = object.availableReplicas ?? 0;
    return message;
  },
  fromAmino(object: LeaseServiceStatusAmino): LeaseServiceStatus {
    const message = createBaseLeaseServiceStatus();
    if (object.available !== undefined && object.available !== null) {
      message.available = object.available;
    }
    if (object.total !== undefined && object.total !== null) {
      message.total = object.total;
    }
    message.uris = object.uris?.map(e => e) || [];
    if (object.observed_generation !== undefined && object.observed_generation !== null) {
      message.observedGeneration = Long.fromString(object.observed_generation);
    }
    if (object.replicas !== undefined && object.replicas !== null) {
      message.replicas = object.replicas;
    }
    if (object.updated_replicas !== undefined && object.updated_replicas !== null) {
      message.updatedReplicas = object.updated_replicas;
    }
    if (object.ready_replicas !== undefined && object.ready_replicas !== null) {
      message.readyReplicas = object.ready_replicas;
    }
    if (object.available_replicas !== undefined && object.available_replicas !== null) {
      message.availableReplicas = object.available_replicas;
    }
    return message;
  },
  toAmino(message: LeaseServiceStatus): LeaseServiceStatusAmino {
    const obj: any = {};
    obj.available = message.available === 0 ? undefined : message.available;
    obj.total = message.total === 0 ? undefined : message.total;
    if (message.uris) {
      obj.uris = message.uris.map(e => e);
    } else {
      obj.uris = message.uris;
    }
    obj.observed_generation = !message.observedGeneration.isZero() ? message.observedGeneration.toString() : undefined;
    obj.replicas = message.replicas === 0 ? undefined : message.replicas;
    obj.updated_replicas = message.updatedReplicas === 0 ? undefined : message.updatedReplicas;
    obj.ready_replicas = message.readyReplicas === 0 ? undefined : message.readyReplicas;
    obj.available_replicas = message.availableReplicas === 0 ? undefined : message.availableReplicas;
    return obj;
  },
  fromAminoMsg(object: LeaseServiceStatusAminoMsg): LeaseServiceStatus {
    return LeaseServiceStatus.fromAmino(object.value);
  },
  fromProtoMsg(message: LeaseServiceStatusProtoMsg): LeaseServiceStatus {
    return LeaseServiceStatus.decode(message.value);
  },
  toProto(message: LeaseServiceStatus): Uint8Array {
    return LeaseServiceStatus.encode(message).finish();
  },
  toProtoMsg(message: LeaseServiceStatus): LeaseServiceStatusProtoMsg {
    return {
      typeUrl: "/akash.provider.lease.v1.LeaseServiceStatus",
      value: LeaseServiceStatus.encode(message).finish()
    };
  }
};
function createBaseLeaseIPStatus(): LeaseIPStatus {
  return {
    port: 0,
    externalPort: 0,
    protocol: "",
    ip: ""
  };
}
export const LeaseIPStatus = {
  typeUrl: "/akash.provider.lease.v1.LeaseIPStatus",
  encode(message: LeaseIPStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.port !== 0) {
      writer.uint32(8).uint32(message.port);
    }
    if (message.externalPort !== 0) {
      writer.uint32(16).uint32(message.externalPort);
    }
    if (message.protocol !== "") {
      writer.uint32(26).string(message.protocol);
    }
    if (message.ip !== "") {
      writer.uint32(34).string(message.ip);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): LeaseIPStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLeaseIPStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.port = reader.uint32();
          break;
        case 2:
          message.externalPort = reader.uint32();
          break;
        case 3:
          message.protocol = reader.string();
          break;
        case 4:
          message.ip = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LeaseIPStatus {
    return {
      port: isSet(object.port) ? Number(object.port) : 0,
      externalPort: isSet(object.externalPort) ? Number(object.externalPort) : 0,
      protocol: isSet(object.protocol) ? String(object.protocol) : "",
      ip: isSet(object.ip) ? String(object.ip) : ""
    };
  },
  toJSON(message: LeaseIPStatus): JsonSafe<LeaseIPStatus> {
    const obj: any = {};
    message.port !== undefined && (obj.port = Math.round(message.port));
    message.externalPort !== undefined && (obj.externalPort = Math.round(message.externalPort));
    message.protocol !== undefined && (obj.protocol = message.protocol);
    message.ip !== undefined && (obj.ip = message.ip);
    return obj;
  },
  fromPartial(object: Partial<LeaseIPStatus>): LeaseIPStatus {
    const message = createBaseLeaseIPStatus();
    message.port = object.port ?? 0;
    message.externalPort = object.externalPort ?? 0;
    message.protocol = object.protocol ?? "";
    message.ip = object.ip ?? "";
    return message;
  },
  fromAmino(object: LeaseIPStatusAmino): LeaseIPStatus {
    const message = createBaseLeaseIPStatus();
    if (object.port !== undefined && object.port !== null) {
      message.port = object.port;
    }
    if (object.external_port !== undefined && object.external_port !== null) {
      message.externalPort = object.external_port;
    }
    if (object.protocol !== undefined && object.protocol !== null) {
      message.protocol = object.protocol;
    }
    if (object.ip !== undefined && object.ip !== null) {
      message.ip = object.ip;
    }
    return message;
  },
  toAmino(message: LeaseIPStatus): LeaseIPStatusAmino {
    const obj: any = {};
    obj.port = message.port ?? 0;
    obj.external_port = message.externalPort ?? 0;
    obj.protocol = message.protocol ?? "";
    obj.ip = message.ip ?? "";
    return obj;
  },
  fromAminoMsg(object: LeaseIPStatusAminoMsg): LeaseIPStatus {
    return LeaseIPStatus.fromAmino(object.value);
  },
  fromProtoMsg(message: LeaseIPStatusProtoMsg): LeaseIPStatus {
    return LeaseIPStatus.decode(message.value);
  },
  toProto(message: LeaseIPStatus): Uint8Array {
    return LeaseIPStatus.encode(message).finish();
  },
  toProtoMsg(message: LeaseIPStatus): LeaseIPStatusProtoMsg {
    return {
      typeUrl: "/akash.provider.lease.v1.LeaseIPStatus",
      value: LeaseIPStatus.encode(message).finish()
    };
  }
};
function createBaseForwarderPortStatus(): ForwarderPortStatus {
  return {
    host: "",
    port: 0,
    externalPort: 0,
    proto: "",
    name: ""
  };
}
export const ForwarderPortStatus = {
  typeUrl: "/akash.provider.lease.v1.ForwarderPortStatus",
  encode(message: ForwarderPortStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.host !== "") {
      writer.uint32(10).string(message.host);
    }
    if (message.port !== 0) {
      writer.uint32(16).uint32(message.port);
    }
    if (message.externalPort !== 0) {
      writer.uint32(24).uint32(message.externalPort);
    }
    if (message.proto !== "") {
      writer.uint32(34).string(message.proto);
    }
    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ForwarderPortStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseForwarderPortStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.host = reader.string();
          break;
        case 2:
          message.port = reader.uint32();
          break;
        case 3:
          message.externalPort = reader.uint32();
          break;
        case 4:
          message.proto = reader.string();
          break;
        case 5:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ForwarderPortStatus {
    return {
      host: isSet(object.host) ? String(object.host) : "",
      port: isSet(object.port) ? Number(object.port) : 0,
      externalPort: isSet(object.externalPort) ? Number(object.externalPort) : 0,
      proto: isSet(object.proto) ? String(object.proto) : "",
      name: isSet(object.name) ? String(object.name) : ""
    };
  },
  toJSON(message: ForwarderPortStatus): JsonSafe<ForwarderPortStatus> {
    const obj: any = {};
    message.host !== undefined && (obj.host = message.host);
    message.port !== undefined && (obj.port = Math.round(message.port));
    message.externalPort !== undefined && (obj.externalPort = Math.round(message.externalPort));
    message.proto !== undefined && (obj.proto = message.proto);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },
  fromPartial(object: Partial<ForwarderPortStatus>): ForwarderPortStatus {
    const message = createBaseForwarderPortStatus();
    message.host = object.host ?? "";
    message.port = object.port ?? 0;
    message.externalPort = object.externalPort ?? 0;
    message.proto = object.proto ?? "";
    message.name = object.name ?? "";
    return message;
  },
  fromAmino(object: ForwarderPortStatusAmino): ForwarderPortStatus {
    const message = createBaseForwarderPortStatus();
    if (object.host !== undefined && object.host !== null) {
      message.host = object.host;
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = object.port;
    }
    if (object.external_port !== undefined && object.external_port !== null) {
      message.externalPort = object.external_port;
    }
    if (object.proto !== undefined && object.proto !== null) {
      message.proto = object.proto;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: ForwarderPortStatus): ForwarderPortStatusAmino {
    const obj: any = {};
    obj.host = message.host ?? "";
    obj.port = message.port ?? 0;
    obj.external_port = message.externalPort ?? 0;
    obj.proto = message.proto ?? "";
    obj.name = message.name ?? "";
    return obj;
  },
  fromAminoMsg(object: ForwarderPortStatusAminoMsg): ForwarderPortStatus {
    return ForwarderPortStatus.fromAmino(object.value);
  },
  fromProtoMsg(message: ForwarderPortStatusProtoMsg): ForwarderPortStatus {
    return ForwarderPortStatus.decode(message.value);
  },
  toProto(message: ForwarderPortStatus): Uint8Array {
    return ForwarderPortStatus.encode(message).finish();
  },
  toProtoMsg(message: ForwarderPortStatus): ForwarderPortStatusProtoMsg {
    return {
      typeUrl: "/akash.provider.lease.v1.ForwarderPortStatus",
      value: ForwarderPortStatus.encode(message).finish()
    };
  }
};
function createBaseServiceStatus(): ServiceStatus {
  return {
    name: "",
    status: LeaseServiceStatus.fromPartial({}),
    ports: [],
    ips: []
  };
}
export const ServiceStatus = {
  typeUrl: "/akash.provider.lease.v1.ServiceStatus",
  encode(message: ServiceStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.status !== undefined) {
      LeaseServiceStatus.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.ports) {
      ForwarderPortStatus.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.ips) {
      LeaseIPStatus.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ServiceStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.status = LeaseServiceStatus.decode(reader, reader.uint32());
          break;
        case 3:
          message.ports.push(ForwarderPortStatus.decode(reader, reader.uint32()));
          break;
        case 4:
          message.ips.push(LeaseIPStatus.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ServiceStatus {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      status: isSet(object.status) ? LeaseServiceStatus.fromJSON(object.status) : undefined,
      ports: Array.isArray(object?.ports) ? object.ports.map((e: any) => ForwarderPortStatus.fromJSON(e)) : [],
      ips: Array.isArray(object?.ips) ? object.ips.map((e: any) => LeaseIPStatus.fromJSON(e)) : []
    };
  },
  toJSON(message: ServiceStatus): JsonSafe<ServiceStatus> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.status !== undefined && (obj.status = message.status ? LeaseServiceStatus.toJSON(message.status) : undefined);
    if (message.ports) {
      obj.ports = message.ports.map(e => e ? ForwarderPortStatus.toJSON(e) : undefined);
    } else {
      obj.ports = [];
    }
    if (message.ips) {
      obj.ips = message.ips.map(e => e ? LeaseIPStatus.toJSON(e) : undefined);
    } else {
      obj.ips = [];
    }
    return obj;
  },
  fromPartial(object: Partial<ServiceStatus>): ServiceStatus {
    const message = createBaseServiceStatus();
    message.name = object.name ?? "";
    message.status = object.status !== undefined && object.status !== null ? LeaseServiceStatus.fromPartial(object.status) : undefined;
    message.ports = object.ports?.map(e => ForwarderPortStatus.fromPartial(e)) || [];
    message.ips = object.ips?.map(e => LeaseIPStatus.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ServiceStatusAmino): ServiceStatus {
    const message = createBaseServiceStatus();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = LeaseServiceStatus.fromAmino(object.status);
    }
    message.ports = object.ports?.map(e => ForwarderPortStatus.fromAmino(e)) || [];
    message.ips = object.ips?.map(e => LeaseIPStatus.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ServiceStatus): ServiceStatusAmino {
    const obj: any = {};
    obj.name = message.name ?? "";
    obj.status = message.status ? LeaseServiceStatus.toAmino(message.status) : LeaseServiceStatus.toAmino(LeaseServiceStatus.fromPartial({}));
    if (message.ports) {
      obj.ports = message.ports.map(e => e ? ForwarderPortStatus.toAmino(e) : undefined);
    } else {
      obj.ports = message.ports;
    }
    if (message.ips) {
      obj.ips = message.ips.map(e => e ? LeaseIPStatus.toAmino(e) : undefined);
    } else {
      obj.ips = message.ips;
    }
    return obj;
  },
  fromAminoMsg(object: ServiceStatusAminoMsg): ServiceStatus {
    return ServiceStatus.fromAmino(object.value);
  },
  fromProtoMsg(message: ServiceStatusProtoMsg): ServiceStatus {
    return ServiceStatus.decode(message.value);
  },
  toProto(message: ServiceStatus): Uint8Array {
    return ServiceStatus.encode(message).finish();
  },
  toProtoMsg(message: ServiceStatus): ServiceStatusProtoMsg {
    return {
      typeUrl: "/akash.provider.lease.v1.ServiceStatus",
      value: ServiceStatus.encode(message).finish()
    };
  }
};
function createBaseSendManifestRequest(): SendManifestRequest {
  return {
    leaseId: LeaseID.fromPartial({}),
    manifest: []
  };
}
export const SendManifestRequest = {
  typeUrl: "/akash.provider.lease.v1.SendManifestRequest",
  encode(message: SendManifestRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.leaseId !== undefined) {
      LeaseID.encode(message.leaseId, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.manifest) {
      Group.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): SendManifestRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendManifestRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.leaseId = LeaseID.decode(reader, reader.uint32());
          break;
        case 2:
          message.manifest.push(Group.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SendManifestRequest {
    return {
      leaseId: isSet(object.leaseId) ? LeaseID.fromJSON(object.leaseId) : undefined,
      manifest: Array.isArray(object?.manifest) ? object.manifest.map((e: any) => Group.fromJSON(e)) : []
    };
  },
  toJSON(message: SendManifestRequest): JsonSafe<SendManifestRequest> {
    const obj: any = {};
    message.leaseId !== undefined && (obj.leaseId = message.leaseId ? LeaseID.toJSON(message.leaseId) : undefined);
    if (message.manifest) {
      obj.manifest = message.manifest.map(e => e ? Group.toJSON(e) : undefined);
    } else {
      obj.manifest = [];
    }
    return obj;
  },
  fromPartial(object: Partial<SendManifestRequest>): SendManifestRequest {
    const message = createBaseSendManifestRequest();
    message.leaseId = object.leaseId !== undefined && object.leaseId !== null ? LeaseID.fromPartial(object.leaseId) : undefined;
    message.manifest = object.manifest?.map(e => Group.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: SendManifestRequestAmino): SendManifestRequest {
    const message = createBaseSendManifestRequest();
    if (object.lease_id !== undefined && object.lease_id !== null) {
      message.leaseId = LeaseID.fromAmino(object.lease_id);
    }
    message.manifest = object.manifest?.map(e => Group.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: SendManifestRequest): SendManifestRequestAmino {
    const obj: any = {};
    obj.lease_id = message.leaseId ? LeaseID.toAmino(message.leaseId) : LeaseID.toAmino(LeaseID.fromPartial({}));
    if (message.manifest) {
      obj.manifest = message.manifest.map(e => e ? Group.toAmino(e) : undefined);
    } else {
      obj.manifest = message.manifest;
    }
    return obj;
  },
  fromAminoMsg(object: SendManifestRequestAminoMsg): SendManifestRequest {
    return SendManifestRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: SendManifestRequestProtoMsg): SendManifestRequest {
    return SendManifestRequest.decode(message.value);
  },
  toProto(message: SendManifestRequest): Uint8Array {
    return SendManifestRequest.encode(message).finish();
  },
  toProtoMsg(message: SendManifestRequest): SendManifestRequestProtoMsg {
    return {
      typeUrl: "/akash.provider.lease.v1.SendManifestRequest",
      value: SendManifestRequest.encode(message).finish()
    };
  }
};
function createBaseSendManifestResponse(): SendManifestResponse {
  return {};
}
export const SendManifestResponse = {
  typeUrl: "/akash.provider.lease.v1.SendManifestResponse",
  encode(_: SendManifestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): SendManifestResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendManifestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): SendManifestResponse {
    return {};
  },
  toJSON(_: SendManifestResponse): JsonSafe<SendManifestResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<SendManifestResponse>): SendManifestResponse {
    const message = createBaseSendManifestResponse();
    return message;
  },
  fromAmino(_: SendManifestResponseAmino): SendManifestResponse {
    const message = createBaseSendManifestResponse();
    return message;
  },
  toAmino(_: SendManifestResponse): SendManifestResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: SendManifestResponseAminoMsg): SendManifestResponse {
    return SendManifestResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: SendManifestResponseProtoMsg): SendManifestResponse {
    return SendManifestResponse.decode(message.value);
  },
  toProto(message: SendManifestResponse): Uint8Array {
    return SendManifestResponse.encode(message).finish();
  },
  toProtoMsg(message: SendManifestResponse): SendManifestResponseProtoMsg {
    return {
      typeUrl: "/akash.provider.lease.v1.SendManifestResponse",
      value: SendManifestResponse.encode(message).finish()
    };
  }
};
function createBaseServiceLogsRequest(): ServiceLogsRequest {
  return {
    leaseId: LeaseID.fromPartial({}),
    services: []
  };
}
export const ServiceLogsRequest = {
  typeUrl: "/akash.provider.lease.v1.ServiceLogsRequest",
  encode(message: ServiceLogsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.leaseId !== undefined) {
      LeaseID.encode(message.leaseId, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.services) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ServiceLogsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceLogsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.leaseId = LeaseID.decode(reader, reader.uint32());
          break;
        case 2:
          message.services.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ServiceLogsRequest {
    return {
      leaseId: isSet(object.leaseId) ? LeaseID.fromJSON(object.leaseId) : undefined,
      services: Array.isArray(object?.services) ? object.services.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: ServiceLogsRequest): JsonSafe<ServiceLogsRequest> {
    const obj: any = {};
    message.leaseId !== undefined && (obj.leaseId = message.leaseId ? LeaseID.toJSON(message.leaseId) : undefined);
    if (message.services) {
      obj.services = message.services.map(e => e);
    } else {
      obj.services = [];
    }
    return obj;
  },
  fromPartial(object: Partial<ServiceLogsRequest>): ServiceLogsRequest {
    const message = createBaseServiceLogsRequest();
    message.leaseId = object.leaseId !== undefined && object.leaseId !== null ? LeaseID.fromPartial(object.leaseId) : undefined;
    message.services = object.services?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ServiceLogsRequestAmino): ServiceLogsRequest {
    const message = createBaseServiceLogsRequest();
    if (object.lease_id !== undefined && object.lease_id !== null) {
      message.leaseId = LeaseID.fromAmino(object.lease_id);
    }
    message.services = object.services?.map(e => e) || [];
    return message;
  },
  toAmino(message: ServiceLogsRequest): ServiceLogsRequestAmino {
    const obj: any = {};
    obj.lease_id = message.leaseId ? LeaseID.toAmino(message.leaseId) : LeaseID.toAmino(LeaseID.fromPartial({}));
    if (message.services) {
      obj.services = message.services.map(e => e);
    } else {
      obj.services = message.services;
    }
    return obj;
  },
  fromAminoMsg(object: ServiceLogsRequestAminoMsg): ServiceLogsRequest {
    return ServiceLogsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ServiceLogsRequestProtoMsg): ServiceLogsRequest {
    return ServiceLogsRequest.decode(message.value);
  },
  toProto(message: ServiceLogsRequest): Uint8Array {
    return ServiceLogsRequest.encode(message).finish();
  },
  toProtoMsg(message: ServiceLogsRequest): ServiceLogsRequestProtoMsg {
    return {
      typeUrl: "/akash.provider.lease.v1.ServiceLogsRequest",
      value: ServiceLogsRequest.encode(message).finish()
    };
  }
};
function createBaseServiceLogs(): ServiceLogs {
  return {
    name: "",
    logs: new Uint8Array()
  };
}
export const ServiceLogs = {
  typeUrl: "/akash.provider.lease.v1.ServiceLogs",
  encode(message: ServiceLogs, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.logs.length !== 0) {
      writer.uint32(18).bytes(message.logs);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ServiceLogs {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceLogs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.logs = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ServiceLogs {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      logs: isSet(object.logs) ? bytesFromBase64(object.logs) : new Uint8Array()
    };
  },
  toJSON(message: ServiceLogs): JsonSafe<ServiceLogs> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.logs !== undefined && (obj.logs = base64FromBytes(message.logs !== undefined ? message.logs : new Uint8Array()));
    return obj;
  },
  fromPartial(object: Partial<ServiceLogs>): ServiceLogs {
    const message = createBaseServiceLogs();
    message.name = object.name ?? "";
    message.logs = object.logs ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ServiceLogsAmino): ServiceLogs {
    const message = createBaseServiceLogs();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.logs !== undefined && object.logs !== null) {
      message.logs = bytesFromBase64(object.logs);
    }
    return message;
  },
  toAmino(message: ServiceLogs): ServiceLogsAmino {
    const obj: any = {};
    obj.name = message.name ?? "";
    obj.logs = message.logs ? base64FromBytes(message.logs) : "";
    return obj;
  },
  fromAminoMsg(object: ServiceLogsAminoMsg): ServiceLogs {
    return ServiceLogs.fromAmino(object.value);
  },
  fromProtoMsg(message: ServiceLogsProtoMsg): ServiceLogs {
    return ServiceLogs.decode(message.value);
  },
  toProto(message: ServiceLogs): Uint8Array {
    return ServiceLogs.encode(message).finish();
  },
  toProtoMsg(message: ServiceLogs): ServiceLogsProtoMsg {
    return {
      typeUrl: "/akash.provider.lease.v1.ServiceLogs",
      value: ServiceLogs.encode(message).finish()
    };
  }
};
function createBaseServiceLogsResponse(): ServiceLogsResponse {
  return {
    services: []
  };
}
export const ServiceLogsResponse = {
  typeUrl: "/akash.provider.lease.v1.ServiceLogsResponse",
  encode(message: ServiceLogsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.services) {
      ServiceLogs.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ServiceLogsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceLogsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.services.push(ServiceLogs.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ServiceLogsResponse {
    return {
      services: Array.isArray(object?.services) ? object.services.map((e: any) => ServiceLogs.fromJSON(e)) : []
    };
  },
  toJSON(message: ServiceLogsResponse): JsonSafe<ServiceLogsResponse> {
    const obj: any = {};
    if (message.services) {
      obj.services = message.services.map(e => e ? ServiceLogs.toJSON(e) : undefined);
    } else {
      obj.services = [];
    }
    return obj;
  },
  fromPartial(object: Partial<ServiceLogsResponse>): ServiceLogsResponse {
    const message = createBaseServiceLogsResponse();
    message.services = object.services?.map(e => ServiceLogs.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ServiceLogsResponseAmino): ServiceLogsResponse {
    const message = createBaseServiceLogsResponse();
    message.services = object.services?.map(e => ServiceLogs.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ServiceLogsResponse): ServiceLogsResponseAmino {
    const obj: any = {};
    if (message.services) {
      obj.services = message.services.map(e => e ? ServiceLogs.toAmino(e) : undefined);
    } else {
      obj.services = message.services;
    }
    return obj;
  },
  fromAminoMsg(object: ServiceLogsResponseAminoMsg): ServiceLogsResponse {
    return ServiceLogsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ServiceLogsResponseProtoMsg): ServiceLogsResponse {
    return ServiceLogsResponse.decode(message.value);
  },
  toProto(message: ServiceLogsResponse): Uint8Array {
    return ServiceLogsResponse.encode(message).finish();
  },
  toProtoMsg(message: ServiceLogsResponse): ServiceLogsResponseProtoMsg {
    return {
      typeUrl: "/akash.provider.lease.v1.ServiceLogsResponse",
      value: ServiceLogsResponse.encode(message).finish()
    };
  }
};
function createBaseShellRequest(): ShellRequest {
  return {
    leaseId: LeaseID.fromPartial({})
  };
}
export const ShellRequest = {
  typeUrl: "/akash.provider.lease.v1.ShellRequest",
  encode(message: ShellRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.leaseId !== undefined) {
      LeaseID.encode(message.leaseId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ShellRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShellRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.leaseId = LeaseID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ShellRequest {
    return {
      leaseId: isSet(object.leaseId) ? LeaseID.fromJSON(object.leaseId) : undefined
    };
  },
  toJSON(message: ShellRequest): JsonSafe<ShellRequest> {
    const obj: any = {};
    message.leaseId !== undefined && (obj.leaseId = message.leaseId ? LeaseID.toJSON(message.leaseId) : undefined);
    return obj;
  },
  fromPartial(object: Partial<ShellRequest>): ShellRequest {
    const message = createBaseShellRequest();
    message.leaseId = object.leaseId !== undefined && object.leaseId !== null ? LeaseID.fromPartial(object.leaseId) : undefined;
    return message;
  },
  fromAmino(object: ShellRequestAmino): ShellRequest {
    const message = createBaseShellRequest();
    if (object.lease_id !== undefined && object.lease_id !== null) {
      message.leaseId = LeaseID.fromAmino(object.lease_id);
    }
    return message;
  },
  toAmino(message: ShellRequest): ShellRequestAmino {
    const obj: any = {};
    obj.lease_id = message.leaseId ? LeaseID.toAmino(message.leaseId) : LeaseID.toAmino(LeaseID.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: ShellRequestAminoMsg): ShellRequest {
    return ShellRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ShellRequestProtoMsg): ShellRequest {
    return ShellRequest.decode(message.value);
  },
  toProto(message: ShellRequest): Uint8Array {
    return ShellRequest.encode(message).finish();
  },
  toProtoMsg(message: ShellRequest): ShellRequestProtoMsg {
    return {
      typeUrl: "/akash.provider.lease.v1.ShellRequest",
      value: ShellRequest.encode(message).finish()
    };
  }
};
function createBaseServiceStatusRequest(): ServiceStatusRequest {
  return {
    leaseId: LeaseID.fromPartial({}),
    services: []
  };
}
export const ServiceStatusRequest = {
  typeUrl: "/akash.provider.lease.v1.ServiceStatusRequest",
  encode(message: ServiceStatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.leaseId !== undefined) {
      LeaseID.encode(message.leaseId, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.services) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ServiceStatusRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceStatusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.leaseId = LeaseID.decode(reader, reader.uint32());
          break;
        case 2:
          message.services.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ServiceStatusRequest {
    return {
      leaseId: isSet(object.leaseId) ? LeaseID.fromJSON(object.leaseId) : undefined,
      services: Array.isArray(object?.services) ? object.services.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: ServiceStatusRequest): JsonSafe<ServiceStatusRequest> {
    const obj: any = {};
    message.leaseId !== undefined && (obj.leaseId = message.leaseId ? LeaseID.toJSON(message.leaseId) : undefined);
    if (message.services) {
      obj.services = message.services.map(e => e);
    } else {
      obj.services = [];
    }
    return obj;
  },
  fromPartial(object: Partial<ServiceStatusRequest>): ServiceStatusRequest {
    const message = createBaseServiceStatusRequest();
    message.leaseId = object.leaseId !== undefined && object.leaseId !== null ? LeaseID.fromPartial(object.leaseId) : undefined;
    message.services = object.services?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ServiceStatusRequestAmino): ServiceStatusRequest {
    const message = createBaseServiceStatusRequest();
    if (object.lease_id !== undefined && object.lease_id !== null) {
      message.leaseId = LeaseID.fromAmino(object.lease_id);
    }
    message.services = object.services?.map(e => e) || [];
    return message;
  },
  toAmino(message: ServiceStatusRequest): ServiceStatusRequestAmino {
    const obj: any = {};
    obj.lease_id = message.leaseId ? LeaseID.toAmino(message.leaseId) : LeaseID.toAmino(LeaseID.fromPartial({}));
    if (message.services) {
      obj.services = message.services.map(e => e);
    } else {
      obj.services = message.services;
    }
    return obj;
  },
  fromAminoMsg(object: ServiceStatusRequestAminoMsg): ServiceStatusRequest {
    return ServiceStatusRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ServiceStatusRequestProtoMsg): ServiceStatusRequest {
    return ServiceStatusRequest.decode(message.value);
  },
  toProto(message: ServiceStatusRequest): Uint8Array {
    return ServiceStatusRequest.encode(message).finish();
  },
  toProtoMsg(message: ServiceStatusRequest): ServiceStatusRequestProtoMsg {
    return {
      typeUrl: "/akash.provider.lease.v1.ServiceStatusRequest",
      value: ServiceStatusRequest.encode(message).finish()
    };
  }
};
function createBaseServiceStatusResponse(): ServiceStatusResponse {
  return {
    services: []
  };
}
export const ServiceStatusResponse = {
  typeUrl: "/akash.provider.lease.v1.ServiceStatusResponse",
  encode(message: ServiceStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.services) {
      ServiceStatus.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ServiceStatusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.services.push(ServiceStatus.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ServiceStatusResponse {
    return {
      services: Array.isArray(object?.services) ? object.services.map((e: any) => ServiceStatus.fromJSON(e)) : []
    };
  },
  toJSON(message: ServiceStatusResponse): JsonSafe<ServiceStatusResponse> {
    const obj: any = {};
    if (message.services) {
      obj.services = message.services.map(e => e ? ServiceStatus.toJSON(e) : undefined);
    } else {
      obj.services = [];
    }
    return obj;
  },
  fromPartial(object: Partial<ServiceStatusResponse>): ServiceStatusResponse {
    const message = createBaseServiceStatusResponse();
    message.services = object.services?.map(e => ServiceStatus.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ServiceStatusResponseAmino): ServiceStatusResponse {
    const message = createBaseServiceStatusResponse();
    message.services = object.services?.map(e => ServiceStatus.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ServiceStatusResponse): ServiceStatusResponseAmino {
    const obj: any = {};
    if (message.services) {
      obj.services = message.services.map(e => e ? ServiceStatus.toAmino(e) : undefined);
    } else {
      obj.services = message.services;
    }
    return obj;
  },
  fromAminoMsg(object: ServiceStatusResponseAminoMsg): ServiceStatusResponse {
    return ServiceStatusResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ServiceStatusResponseProtoMsg): ServiceStatusResponse {
    return ServiceStatusResponse.decode(message.value);
  },
  toProto(message: ServiceStatusResponse): Uint8Array {
    return ServiceStatusResponse.encode(message).finish();
  },
  toProtoMsg(message: ServiceStatusResponse): ServiceStatusResponseProtoMsg {
    return {
      typeUrl: "/akash.provider.lease.v1.ServiceStatusResponse",
      value: ServiceStatusResponse.encode(message).finish()
    };
  }
};