/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { messageTypeRegistry } from '../../../typeRegistry';

/** CertificateID stores owner and sequence number */
export interface CertificateID {
  $type: 'akash.cert.v1beta2.CertificateID';
  owner: string;
  serial: string;
}

/** Certificate stores state, certificate and it's public key */
export interface Certificate {
  $type: 'akash.cert.v1beta2.Certificate';
  state: Certificate_State;
  cert: Uint8Array;
  pubkey: Uint8Array;
}

/** State is an enum which refers to state of deployment */
export enum Certificate_State {
  /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
  invalid = 0,
  /** valid - CertificateValid denotes state for deployment active */
  valid = 1,
  /** revoked - CertificateRevoked denotes state for deployment closed */
  revoked = 2,
  UNRECOGNIZED = -1,
}

export function certificate_StateFromJSON(object: any): Certificate_State {
  switch (object) {
    case 0:
    case 'invalid':
      return Certificate_State.invalid;
    case 1:
    case 'valid':
      return Certificate_State.valid;
    case 2:
    case 'revoked':
      return Certificate_State.revoked;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Certificate_State.UNRECOGNIZED;
  }
}

export function certificate_StateToJSON(object: Certificate_State): string {
  switch (object) {
    case Certificate_State.invalid:
      return 'invalid';
    case Certificate_State.valid:
      return 'valid';
    case Certificate_State.revoked:
      return 'revoked';
    case Certificate_State.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

/** CertificateFilter defines filters used to filter certificates */
export interface CertificateFilter {
  $type: 'akash.cert.v1beta2.CertificateFilter';
  owner: string;
  serial: string;
  state: string;
}

/** MsgCreateCertificate defines an SDK message for creating certificate */
export interface MsgCreateCertificate {
  $type: 'akash.cert.v1beta2.MsgCreateCertificate';
  owner: string;
  cert: Uint8Array;
  pubkey: Uint8Array;
}

/** MsgCreateCertificateResponse defines the Msg/CreateCertificate response type. */
export interface MsgCreateCertificateResponse {
  $type: 'akash.cert.v1beta2.MsgCreateCertificateResponse';
}

/** MsgRevokeCertificate defines an SDK message for revoking certificate */
export interface MsgRevokeCertificate {
  $type: 'akash.cert.v1beta2.MsgRevokeCertificate';
  id: CertificateID | undefined;
}

/** MsgRevokeCertificateResponse defines the Msg/RevokeCertificate response type. */
export interface MsgRevokeCertificateResponse {
  $type: 'akash.cert.v1beta2.MsgRevokeCertificateResponse';
}

function createBaseCertificateID(): CertificateID {
  return { $type: 'akash.cert.v1beta2.CertificateID', owner: '', serial: '' };
}

export const CertificateID = {
  $type: 'akash.cert.v1beta2.CertificateID' as const,

  encode(
    message: CertificateID,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.owner !== '') {
      writer.uint32(10).string(message.owner);
    }
    if (message.serial !== '') {
      writer.uint32(18).string(message.serial);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CertificateID {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCertificateID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.owner = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.serial = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CertificateID {
    return {
      $type: CertificateID.$type,
      owner: isSet(object.owner) ? globalThis.String(object.owner) : '',
      serial: isSet(object.serial) ? globalThis.String(object.serial) : '',
    };
  },

  toJSON(message: CertificateID): unknown {
    const obj: any = {};
    if (message.owner !== '') {
      obj.owner = message.owner;
    }
    if (message.serial !== '') {
      obj.serial = message.serial;
    }
    return obj;
  },

  create(base?: DeepPartial<CertificateID>): CertificateID {
    return CertificateID.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CertificateID>): CertificateID {
    const message = createBaseCertificateID();
    message.owner = object.owner ?? '';
    message.serial = object.serial ?? '';
    return message;
  },
};

messageTypeRegistry.set(CertificateID.$type, CertificateID);

function createBaseCertificate(): Certificate {
  return {
    $type: 'akash.cert.v1beta2.Certificate',
    state: 0,
    cert: new Uint8Array(0),
    pubkey: new Uint8Array(0),
  };
}

export const Certificate = {
  $type: 'akash.cert.v1beta2.Certificate' as const,

  encode(
    message: Certificate,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    if (message.cert.length !== 0) {
      writer.uint32(26).bytes(message.cert);
    }
    if (message.pubkey.length !== 0) {
      writer.uint32(34).bytes(message.pubkey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Certificate {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCertificate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 16) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.cert = reader.bytes();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.pubkey = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Certificate {
    return {
      $type: Certificate.$type,
      state: isSet(object.state) ? certificate_StateFromJSON(object.state) : 0,
      cert: isSet(object.cert)
        ? bytesFromBase64(object.cert)
        : new Uint8Array(0),
      pubkey: isSet(object.pubkey)
        ? bytesFromBase64(object.pubkey)
        : new Uint8Array(0),
    };
  },

  toJSON(message: Certificate): unknown {
    const obj: any = {};
    if (message.state !== 0) {
      obj.state = certificate_StateToJSON(message.state);
    }
    if (message.cert.length !== 0) {
      obj.cert = base64FromBytes(message.cert);
    }
    if (message.pubkey.length !== 0) {
      obj.pubkey = base64FromBytes(message.pubkey);
    }
    return obj;
  },

  create(base?: DeepPartial<Certificate>): Certificate {
    return Certificate.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Certificate>): Certificate {
    const message = createBaseCertificate();
    message.state = object.state ?? 0;
    message.cert = object.cert ?? new Uint8Array(0);
    message.pubkey = object.pubkey ?? new Uint8Array(0);
    return message;
  },
};

messageTypeRegistry.set(Certificate.$type, Certificate);

function createBaseCertificateFilter(): CertificateFilter {
  return {
    $type: 'akash.cert.v1beta2.CertificateFilter',
    owner: '',
    serial: '',
    state: '',
  };
}

export const CertificateFilter = {
  $type: 'akash.cert.v1beta2.CertificateFilter' as const,

  encode(
    message: CertificateFilter,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.owner !== '') {
      writer.uint32(10).string(message.owner);
    }
    if (message.serial !== '') {
      writer.uint32(18).string(message.serial);
    }
    if (message.state !== '') {
      writer.uint32(26).string(message.state);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CertificateFilter {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCertificateFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.owner = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.serial = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.state = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CertificateFilter {
    return {
      $type: CertificateFilter.$type,
      owner: isSet(object.owner) ? globalThis.String(object.owner) : '',
      serial: isSet(object.serial) ? globalThis.String(object.serial) : '',
      state: isSet(object.state) ? globalThis.String(object.state) : '',
    };
  },

  toJSON(message: CertificateFilter): unknown {
    const obj: any = {};
    if (message.owner !== '') {
      obj.owner = message.owner;
    }
    if (message.serial !== '') {
      obj.serial = message.serial;
    }
    if (message.state !== '') {
      obj.state = message.state;
    }
    return obj;
  },

  create(base?: DeepPartial<CertificateFilter>): CertificateFilter {
    return CertificateFilter.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CertificateFilter>): CertificateFilter {
    const message = createBaseCertificateFilter();
    message.owner = object.owner ?? '';
    message.serial = object.serial ?? '';
    message.state = object.state ?? '';
    return message;
  },
};

messageTypeRegistry.set(CertificateFilter.$type, CertificateFilter);

function createBaseMsgCreateCertificate(): MsgCreateCertificate {
  return {
    $type: 'akash.cert.v1beta2.MsgCreateCertificate',
    owner: '',
    cert: new Uint8Array(0),
    pubkey: new Uint8Array(0),
  };
}

export const MsgCreateCertificate = {
  $type: 'akash.cert.v1beta2.MsgCreateCertificate' as const,

  encode(
    message: MsgCreateCertificate,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.owner !== '') {
      writer.uint32(10).string(message.owner);
    }
    if (message.cert.length !== 0) {
      writer.uint32(18).bytes(message.cert);
    }
    if (message.pubkey.length !== 0) {
      writer.uint32(26).bytes(message.pubkey);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgCreateCertificate {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateCertificate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.owner = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.cert = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.pubkey = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateCertificate {
    return {
      $type: MsgCreateCertificate.$type,
      owner: isSet(object.owner) ? globalThis.String(object.owner) : '',
      cert: isSet(object.cert)
        ? bytesFromBase64(object.cert)
        : new Uint8Array(0),
      pubkey: isSet(object.pubkey)
        ? bytesFromBase64(object.pubkey)
        : new Uint8Array(0),
    };
  },

  toJSON(message: MsgCreateCertificate): unknown {
    const obj: any = {};
    if (message.owner !== '') {
      obj.owner = message.owner;
    }
    if (message.cert.length !== 0) {
      obj.cert = base64FromBytes(message.cert);
    }
    if (message.pubkey.length !== 0) {
      obj.pubkey = base64FromBytes(message.pubkey);
    }
    return obj;
  },

  create(base?: DeepPartial<MsgCreateCertificate>): MsgCreateCertificate {
    return MsgCreateCertificate.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgCreateCertificate>): MsgCreateCertificate {
    const message = createBaseMsgCreateCertificate();
    message.owner = object.owner ?? '';
    message.cert = object.cert ?? new Uint8Array(0);
    message.pubkey = object.pubkey ?? new Uint8Array(0);
    return message;
  },
};

messageTypeRegistry.set(MsgCreateCertificate.$type, MsgCreateCertificate);

function createBaseMsgCreateCertificateResponse(): MsgCreateCertificateResponse {
  return { $type: 'akash.cert.v1beta2.MsgCreateCertificateResponse' };
}

export const MsgCreateCertificateResponse = {
  $type: 'akash.cert.v1beta2.MsgCreateCertificateResponse' as const,

  encode(
    _: MsgCreateCertificateResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgCreateCertificateResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateCertificateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgCreateCertificateResponse {
    return { $type: MsgCreateCertificateResponse.$type };
  },

  toJSON(_: MsgCreateCertificateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(
    base?: DeepPartial<MsgCreateCertificateResponse>,
  ): MsgCreateCertificateResponse {
    return MsgCreateCertificateResponse.fromPartial(base ?? {});
  },
  fromPartial(
    _: DeepPartial<MsgCreateCertificateResponse>,
  ): MsgCreateCertificateResponse {
    const message = createBaseMsgCreateCertificateResponse();
    return message;
  },
};

messageTypeRegistry.set(
  MsgCreateCertificateResponse.$type,
  MsgCreateCertificateResponse,
);

function createBaseMsgRevokeCertificate(): MsgRevokeCertificate {
  return { $type: 'akash.cert.v1beta2.MsgRevokeCertificate', id: undefined };
}

export const MsgRevokeCertificate = {
  $type: 'akash.cert.v1beta2.MsgRevokeCertificate' as const,

  encode(
    message: MsgRevokeCertificate,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== undefined) {
      CertificateID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgRevokeCertificate {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeCertificate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = CertificateID.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRevokeCertificate {
    return {
      $type: MsgRevokeCertificate.$type,
      id: isSet(object.id) ? CertificateID.fromJSON(object.id) : undefined,
    };
  },

  toJSON(message: MsgRevokeCertificate): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = CertificateID.toJSON(message.id);
    }
    return obj;
  },

  create(base?: DeepPartial<MsgRevokeCertificate>): MsgRevokeCertificate {
    return MsgRevokeCertificate.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgRevokeCertificate>): MsgRevokeCertificate {
    const message = createBaseMsgRevokeCertificate();
    message.id =
      object.id !== undefined && object.id !== null
        ? CertificateID.fromPartial(object.id)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(MsgRevokeCertificate.$type, MsgRevokeCertificate);

function createBaseMsgRevokeCertificateResponse(): MsgRevokeCertificateResponse {
  return { $type: 'akash.cert.v1beta2.MsgRevokeCertificateResponse' };
}

export const MsgRevokeCertificateResponse = {
  $type: 'akash.cert.v1beta2.MsgRevokeCertificateResponse' as const,

  encode(
    _: MsgRevokeCertificateResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgRevokeCertificateResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeCertificateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgRevokeCertificateResponse {
    return { $type: MsgRevokeCertificateResponse.$type };
  },

  toJSON(_: MsgRevokeCertificateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(
    base?: DeepPartial<MsgRevokeCertificateResponse>,
  ): MsgRevokeCertificateResponse {
    return MsgRevokeCertificateResponse.fromPartial(base ?? {});
  },
  fromPartial(
    _: DeepPartial<MsgRevokeCertificateResponse>,
  ): MsgRevokeCertificateResponse {
    const message = createBaseMsgRevokeCertificateResponse();
    return message;
  },
};

messageTypeRegistry.set(
  MsgRevokeCertificateResponse.$type,
  MsgRevokeCertificateResponse,
);

/** Msg defines the provider Msg service */
export interface Msg {
  /** CreateCertificate defines a method to create new certificate given proper inputs. */
  CreateCertificate(
    request: MsgCreateCertificate,
  ): Promise<MsgCreateCertificateResponse>;
  /** RevokeCertificate defines a method to revoke the certificate */
  RevokeCertificate(
    request: MsgRevokeCertificate,
  ): Promise<MsgRevokeCertificateResponse>;
}

export const MsgServiceName = 'akash.cert.v1beta2.Msg';
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceName;
    this.rpc = rpc;
    this.CreateCertificate = this.CreateCertificate.bind(this);
    this.RevokeCertificate = this.RevokeCertificate.bind(this);
  }
  CreateCertificate(
    request: MsgCreateCertificate,
  ): Promise<MsgCreateCertificateResponse> {
    const data = MsgCreateCertificate.encode(request).finish();
    const promise = this.rpc.request(this.service, 'CreateCertificate', data);
    return promise.then((data) =>
      MsgCreateCertificateResponse.decode(_m0.Reader.create(data)),
    );
  }

  RevokeCertificate(
    request: MsgRevokeCertificate,
  ): Promise<MsgRevokeCertificateResponse> {
    const data = MsgRevokeCertificate.encode(request).finish();
    const promise = this.rpc.request(this.service, 'RevokeCertificate', data);
    return promise.then((data) =>
      MsgRevokeCertificateResponse.decode(_m0.Reader.create(data)),
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array,
  ): Promise<Uint8Array>;
}

function bytesFromBase64(b64: string): Uint8Array {
  if ((globalThis as any).Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, 'base64'));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if ((globalThis as any).Buffer) {
    return globalThis.Buffer.from(arr).toString('base64');
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(''));
  }
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
    ? string | number | Long
    : T extends globalThis.Array<infer U>
      ? globalThis.Array<DeepPartial<U>>
      : T extends ReadonlyArray<infer U>
        ? ReadonlyArray<DeepPartial<U>>
        : T extends {}
          ? { [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]> }
          : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
