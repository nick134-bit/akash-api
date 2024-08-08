import { Resources, ResourcesAmino, ResourcesSDKType } from "../../base/v1beta3/resources";
import { ServiceExpose, ServiceExposeAmino, ServiceExposeSDKType } from "./serviceexpose";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** StorageParams */
export interface StorageParams {
  name: string;
  mount: string;
  readOnly: boolean;
}
export interface StorageParamsProtoMsg {
  typeUrl: "/akash.manifest.v2beta2.StorageParams";
  value: Uint8Array;
}
/** StorageParams */
export interface StorageParamsAmino {
  name: string;
  mount: string;
  read_only: boolean;
}
export interface StorageParamsAminoMsg {
  type: "/akash.manifest.v2beta2.StorageParams";
  value: StorageParamsAmino;
}
/** StorageParams */
export interface StorageParamsSDKType {
  name: string;
  mount: string;
  read_only: boolean;
}
/** ServiceParams */
export interface ServiceParams {
  storage: StorageParams[];
}
export interface ServiceParamsProtoMsg {
  typeUrl: "/akash.manifest.v2beta2.ServiceParams";
  value: Uint8Array;
}
/** ServiceParams */
export interface ServiceParamsAmino {
  storage: StorageParamsAmino[];
}
export interface ServiceParamsAminoMsg {
  type: "/akash.manifest.v2beta2.ServiceParams";
  value: ServiceParamsAmino;
}
/** ServiceParams */
export interface ServiceParamsSDKType {
  storage: StorageParamsSDKType[];
}
/** Credentials to fetch image from registry */
export interface ServiceImageCredentials {
  host: string;
  email: string;
  username: string;
  password: string;
}
export interface ServiceImageCredentialsProtoMsg {
  typeUrl: "/akash.manifest.v2beta2.ServiceImageCredentials";
  value: Uint8Array;
}
/** Credentials to fetch image from registry */
export interface ServiceImageCredentialsAmino {
  host: string;
  email: string;
  username: string;
  password: string;
}
export interface ServiceImageCredentialsAminoMsg {
  type: "/akash.manifest.v2beta2.ServiceImageCredentials";
  value: ServiceImageCredentialsAmino;
}
/** Credentials to fetch image from registry */
export interface ServiceImageCredentialsSDKType {
  host: string;
  email: string;
  username: string;
  password: string;
}
/** Service stores name, image, args, env, unit, count and expose list of service */
export interface Service {
  name: string;
  image: string;
  command: string[];
  args: string[];
  env?: string[];
  resources: Resources | undefined;
  count: number;
  expose: ServiceExpose[];
  params?: ServiceParams | undefined;
  credentials?: ServiceImageCredentials | undefined;
}
export interface ServiceProtoMsg {
  typeUrl: "/akash.manifest.v2beta2.Service";
  value: Uint8Array;
}
/** Service stores name, image, args, env, unit, count and expose list of service */
export interface ServiceAmino {
  name: string;
  image: string;
  command: string[];
  args: string[];
  env?: string[];
  resources: ResourcesAmino | undefined;
  count: number;
  expose: ServiceExposeAmino[];
  params?: ServiceParamsAmino | undefined;
  credentials?: ServiceImageCredentialsAmino | undefined;
}
export interface ServiceAminoMsg {
  type: "/akash.manifest.v2beta2.Service";
  value: ServiceAmino;
}
/** Service stores name, image, args, env, unit, count and expose list of service */
export interface ServiceSDKType {
  name: string;
  image: string;
  command: string[];
  args: string[];
  env?: string[];
  resources: ResourcesSDKType | undefined;
  count: number;
  expose: ServiceExposeSDKType[];
  params?: ServiceParamsSDKType | undefined;
  credentials?: ServiceImageCredentialsSDKType | undefined;
}
function createBaseStorageParams(): StorageParams {
  return {
    name: "",
    mount: "",
    readOnly: false
  };
}
export const StorageParams = {
  typeUrl: "/akash.manifest.v2beta2.StorageParams",
  encode(message: StorageParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.mount !== "") {
      writer.uint32(18).string(message.mount);
    }
    if (message.readOnly === true) {
      writer.uint32(24).bool(message.readOnly);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StorageParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStorageParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.mount = reader.string();
          break;
        case 3:
          message.readOnly = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<StorageParams>): StorageParams {
    const message = createBaseStorageParams();
    message.name = object.name ?? "";
    message.mount = object.mount ?? "";
    message.readOnly = object.readOnly ?? false;
    return message;
  },
  fromAmino(object: StorageParamsAmino): StorageParams {
    const message = createBaseStorageParams();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.mount !== undefined && object.mount !== null) {
      message.mount = object.mount;
    }
    if (object.read_only !== undefined && object.read_only !== null) {
      message.readOnly = object.read_only;
    }
    return message;
  },
  toAmino(message: StorageParams): StorageParamsAmino {
    const obj: any = {};
    obj.name = message.name ?? "";
    obj.mount = message.mount ?? "";
    obj.read_only = message.readOnly ?? false;
    return obj;
  },
  fromAminoMsg(object: StorageParamsAminoMsg): StorageParams {
    return StorageParams.fromAmino(object.value);
  },
  fromProtoMsg(message: StorageParamsProtoMsg): StorageParams {
    return StorageParams.decode(message.value);
  },
  toProto(message: StorageParams): Uint8Array {
    return StorageParams.encode(message).finish();
  },
  toProtoMsg(message: StorageParams): StorageParamsProtoMsg {
    return {
      typeUrl: "/akash.manifest.v2beta2.StorageParams",
      value: StorageParams.encode(message).finish()
    };
  }
};
function createBaseServiceParams(): ServiceParams {
  return {
    storage: []
  };
}
export const ServiceParams = {
  typeUrl: "/akash.manifest.v2beta2.ServiceParams",
  encode(message: ServiceParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.storage) {
      StorageParams.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ServiceParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storage.push(StorageParams.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ServiceParams>): ServiceParams {
    const message = createBaseServiceParams();
    message.storage = object.storage?.map(e => StorageParams.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ServiceParamsAmino): ServiceParams {
    const message = createBaseServiceParams();
    message.storage = object.storage?.map(e => StorageParams.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ServiceParams): ServiceParamsAmino {
    const obj: any = {};
    if (message.storage) {
      obj.storage = message.storage.map(e => e ? StorageParams.toAmino(e) : undefined);
    } else {
      obj.storage = message.storage;
    }
    return obj;
  },
  fromAminoMsg(object: ServiceParamsAminoMsg): ServiceParams {
    return ServiceParams.fromAmino(object.value);
  },
  fromProtoMsg(message: ServiceParamsProtoMsg): ServiceParams {
    return ServiceParams.decode(message.value);
  },
  toProto(message: ServiceParams): Uint8Array {
    return ServiceParams.encode(message).finish();
  },
  toProtoMsg(message: ServiceParams): ServiceParamsProtoMsg {
    return {
      typeUrl: "/akash.manifest.v2beta2.ServiceParams",
      value: ServiceParams.encode(message).finish()
    };
  }
};
function createBaseServiceImageCredentials(): ServiceImageCredentials {
  return {
    host: "",
    email: "",
    username: "",
    password: ""
  };
}
export const ServiceImageCredentials = {
  typeUrl: "/akash.manifest.v2beta2.ServiceImageCredentials",
  encode(message: ServiceImageCredentials, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.host !== "") {
      writer.uint32(10).string(message.host);
    }
    if (message.email !== "") {
      writer.uint32(18).string(message.email);
    }
    if (message.username !== "") {
      writer.uint32(26).string(message.username);
    }
    if (message.password !== "") {
      writer.uint32(34).string(message.password);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ServiceImageCredentials {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceImageCredentials();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.host = reader.string();
          break;
        case 2:
          message.email = reader.string();
          break;
        case 3:
          message.username = reader.string();
          break;
        case 4:
          message.password = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ServiceImageCredentials>): ServiceImageCredentials {
    const message = createBaseServiceImageCredentials();
    message.host = object.host ?? "";
    message.email = object.email ?? "";
    message.username = object.username ?? "";
    message.password = object.password ?? "";
    return message;
  },
  fromAmino(object: ServiceImageCredentialsAmino): ServiceImageCredentials {
    const message = createBaseServiceImageCredentials();
    if (object.host !== undefined && object.host !== null) {
      message.host = object.host;
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = object.email;
    }
    if (object.username !== undefined && object.username !== null) {
      message.username = object.username;
    }
    if (object.password !== undefined && object.password !== null) {
      message.password = object.password;
    }
    return message;
  },
  toAmino(message: ServiceImageCredentials): ServiceImageCredentialsAmino {
    const obj: any = {};
    obj.host = message.host ?? "";
    obj.email = message.email ?? "";
    obj.username = message.username ?? "";
    obj.password = message.password ?? "";
    return obj;
  },
  fromAminoMsg(object: ServiceImageCredentialsAminoMsg): ServiceImageCredentials {
    return ServiceImageCredentials.fromAmino(object.value);
  },
  fromProtoMsg(message: ServiceImageCredentialsProtoMsg): ServiceImageCredentials {
    return ServiceImageCredentials.decode(message.value);
  },
  toProto(message: ServiceImageCredentials): Uint8Array {
    return ServiceImageCredentials.encode(message).finish();
  },
  toProtoMsg(message: ServiceImageCredentials): ServiceImageCredentialsProtoMsg {
    return {
      typeUrl: "/akash.manifest.v2beta2.ServiceImageCredentials",
      value: ServiceImageCredentials.encode(message).finish()
    };
  }
};
function createBaseService(): Service {
  return {
    name: "",
    image: "",
    command: [],
    args: [],
    env: [],
    resources: Resources.fromPartial({}),
    count: 0,
    expose: [],
    params: undefined,
    credentials: undefined
  };
}
export const Service = {
  typeUrl: "/akash.manifest.v2beta2.Service",
  encode(message: Service, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.image !== "") {
      writer.uint32(18).string(message.image);
    }
    for (const v of message.command) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.args) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.env) {
      writer.uint32(42).string(v!);
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(50).fork()).ldelim();
    }
    if (message.count !== 0) {
      writer.uint32(56).uint32(message.count);
    }
    for (const v of message.expose) {
      ServiceExpose.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.params !== undefined) {
      ServiceParams.encode(message.params, writer.uint32(74).fork()).ldelim();
    }
    if (message.credentials !== undefined) {
      ServiceImageCredentials.encode(message.credentials, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Service {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseService();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.image = reader.string();
          break;
        case 3:
          message.command.push(reader.string());
          break;
        case 4:
          message.args.push(reader.string());
          break;
        case 5:
          message.env.push(reader.string());
          break;
        case 6:
          message.resources = Resources.decode(reader, reader.uint32());
          break;
        case 7:
          message.count = reader.uint32();
          break;
        case 8:
          message.expose.push(ServiceExpose.decode(reader, reader.uint32()));
          break;
        case 9:
          message.params = ServiceParams.decode(reader, reader.uint32());
          break;
        case 10:
          message.credentials = ServiceImageCredentials.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Service>): Service {
    const message = createBaseService();
    message.name = object.name ?? "";
    message.image = object.image ?? "";
    message.command = object.command?.map(e => e) || [];
    message.args = object.args?.map(e => e) || [];
    message.env = object.env?.map(e => e) || [];
    message.resources = object.resources !== undefined && object.resources !== null ? Resources.fromPartial(object.resources) : undefined;
    message.count = object.count ?? 0;
    message.expose = object.expose?.map(e => ServiceExpose.fromPartial(e)) || [];
    message.params = object.params !== undefined && object.params !== null ? ServiceParams.fromPartial(object.params) : undefined;
    message.credentials = object.credentials !== undefined && object.credentials !== null ? ServiceImageCredentials.fromPartial(object.credentials) : undefined;
    return message;
  },
  fromAmino(object: ServiceAmino): Service {
    const message = createBaseService();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.image !== undefined && object.image !== null) {
      message.image = object.image;
    }
    message.command = object.command?.map(e => e) || [];
    message.args = object.args?.map(e => e) || [];
    message.env = object.env?.map(e => e) || [];
    if (object.resources !== undefined && object.resources !== null) {
      message.resources = Resources.fromAmino(object.resources);
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = object.count;
    }
    message.expose = object.expose?.map(e => ServiceExpose.fromAmino(e)) || [];
    if (object.params !== undefined && object.params !== null) {
      message.params = ServiceParams.fromAmino(object.params);
    }
    if (object.credentials !== undefined && object.credentials !== null) {
      message.credentials = ServiceImageCredentials.fromAmino(object.credentials);
    }
    return message;
  },
  toAmino(message: Service): ServiceAmino {
    const obj: any = {};
    obj.name = message.name ?? "";
    obj.image = message.image ?? "";
    if (message.command) {
      obj.command = message.command.map(e => e);
    } else {
      obj.command = message.command;
    }
    if (message.args) {
      obj.args = message.args.map(e => e);
    } else {
      obj.args = message.args;
    }
    if (message.env) {
      obj.env = message.env.map(e => e);
    } else {
      obj.env = message.env;
    }
    obj.resources = message.resources ? Resources.toAmino(message.resources) : Resources.toAmino(Resources.fromPartial({}));
    obj.count = message.count ?? 0;
    if (message.expose) {
      obj.expose = message.expose.map(e => e ? ServiceExpose.toAmino(e) : undefined);
    } else {
      obj.expose = message.expose;
    }
    obj.params = message.params ? ServiceParams.toAmino(message.params) : ServiceParams.toAmino(ServiceParams.fromPartial({}));
    obj.credentials = message.credentials ? ServiceImageCredentials.toAmino(message.credentials) : ServiceImageCredentials.toAmino(ServiceImageCredentials.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: ServiceAminoMsg): Service {
    return Service.fromAmino(object.value);
  },
  fromProtoMsg(message: ServiceProtoMsg): Service {
    return Service.decode(message.value);
  },
  toProto(message: Service): Uint8Array {
    return Service.encode(message).finish();
  },
  toProtoMsg(message: Service): ServiceProtoMsg {
    return {
      typeUrl: "/akash.manifest.v2beta2.Service",
      value: Service.encode(message).finish()
    };
  }
};