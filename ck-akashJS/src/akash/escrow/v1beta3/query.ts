import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Account, AccountAmino, AccountSDKType, FractionalPayment, FractionalPaymentAmino, FractionalPaymentSDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
/** QueryAccountRequest is request type for the Query/Account RPC method */
export interface QueryAccountsRequest {
  scope: string;
  xid: string;
  owner: string;
  state: string;
  pagination?: PageRequest | undefined;
}
export interface QueryAccountsRequestProtoMsg {
  typeUrl: "/akash.escrow.v1beta3.QueryAccountsRequest";
  value: Uint8Array;
}
/** QueryAccountRequest is request type for the Query/Account RPC method */
export interface QueryAccountsRequestAmino {
  scope?: string;
  xid?: string;
  owner?: string;
  state?: string;
  pagination?: PageRequestAmino | undefined;
}
export interface QueryAccountsRequestAminoMsg {
  type: "/akash.escrow.v1beta3.QueryAccountsRequest";
  value: QueryAccountsRequestAmino;
}
/** QueryAccountRequest is request type for the Query/Account RPC method */
export interface QueryAccountsRequestSDKType {
  scope: string;
  xid: string;
  owner: string;
  state: string;
  pagination?: PageRequestSDKType | undefined;
}
/** QueryProvidersResponse is response type for the Query/Providers RPC method */
export interface QueryAccountsResponse {
  accounts: Account[];
  pagination?: PageResponse | undefined;
}
export interface QueryAccountsResponseProtoMsg {
  typeUrl: "/akash.escrow.v1beta3.QueryAccountsResponse";
  value: Uint8Array;
}
/** QueryProvidersResponse is response type for the Query/Providers RPC method */
export interface QueryAccountsResponseAmino {
  accounts?: AccountAmino[];
  pagination?: PageResponseAmino | undefined;
}
export interface QueryAccountsResponseAminoMsg {
  type: "/akash.escrow.v1beta3.QueryAccountsResponse";
  value: QueryAccountsResponseAmino;
}
/** QueryProvidersResponse is response type for the Query/Providers RPC method */
export interface QueryAccountsResponseSDKType {
  accounts: AccountSDKType[];
  pagination?: PageResponseSDKType | undefined;
}
/** QueryPaymentRequest is request type for the Query/Payment RPC method */
export interface QueryPaymentsRequest {
  scope: string;
  xid: string;
  id: string;
  owner: string;
  state: string;
  pagination?: PageRequest | undefined;
}
export interface QueryPaymentsRequestProtoMsg {
  typeUrl: "/akash.escrow.v1beta3.QueryPaymentsRequest";
  value: Uint8Array;
}
/** QueryPaymentRequest is request type for the Query/Payment RPC method */
export interface QueryPaymentsRequestAmino {
  scope?: string;
  xid?: string;
  id?: string;
  owner?: string;
  state?: string;
  pagination?: PageRequestAmino | undefined;
}
export interface QueryPaymentsRequestAminoMsg {
  type: "/akash.escrow.v1beta3.QueryPaymentsRequest";
  value: QueryPaymentsRequestAmino;
}
/** QueryPaymentRequest is request type for the Query/Payment RPC method */
export interface QueryPaymentsRequestSDKType {
  scope: string;
  xid: string;
  id: string;
  owner: string;
  state: string;
  pagination?: PageRequestSDKType | undefined;
}
/** QueryProvidersResponse is response type for the Query/Providers RPC method */
export interface QueryPaymentsResponse {
  payments: FractionalPayment[];
  pagination?: PageResponse | undefined;
}
export interface QueryPaymentsResponseProtoMsg {
  typeUrl: "/akash.escrow.v1beta3.QueryPaymentsResponse";
  value: Uint8Array;
}
/** QueryProvidersResponse is response type for the Query/Providers RPC method */
export interface QueryPaymentsResponseAmino {
  payments?: FractionalPaymentAmino[];
  pagination?: PageResponseAmino | undefined;
}
export interface QueryPaymentsResponseAminoMsg {
  type: "/akash.escrow.v1beta3.QueryPaymentsResponse";
  value: QueryPaymentsResponseAmino;
}
/** QueryProvidersResponse is response type for the Query/Providers RPC method */
export interface QueryPaymentsResponseSDKType {
  payments: FractionalPaymentSDKType[];
  pagination?: PageResponseSDKType | undefined;
}
function createBaseQueryAccountsRequest(): QueryAccountsRequest {
  return {
    scope: "",
    xid: "",
    owner: "",
    state: "",
    pagination: undefined
  };
}
export const QueryAccountsRequest = {
  typeUrl: "/akash.escrow.v1beta3.QueryAccountsRequest",
  encode(message: QueryAccountsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.scope !== "") {
      writer.uint32(10).string(message.scope);
    }
    if (message.xid !== "") {
      writer.uint32(18).string(message.xid);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.state !== "") {
      writer.uint32(34).string(message.state);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scope = reader.string();
          break;
        case 2:
          message.xid = reader.string();
          break;
        case 3:
          message.owner = reader.string();
          break;
        case 4:
          message.state = reader.string();
          break;
        case 5:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAccountsRequest {
    return {
      scope: isSet(object.scope) ? String(object.scope) : "",
      xid: isSet(object.xid) ? String(object.xid) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      state: isSet(object.state) ? String(object.state) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAccountsRequest): JsonSafe<QueryAccountsRequest> {
    const obj: any = {};
    message.scope !== undefined && (obj.scope = message.scope);
    message.xid !== undefined && (obj.xid = message.xid);
    message.owner !== undefined && (obj.owner = message.owner);
    message.state !== undefined && (obj.state = message.state);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAccountsRequest>): QueryAccountsRequest {
    const message = createBaseQueryAccountsRequest();
    message.scope = object.scope ?? "";
    message.xid = object.xid ?? "";
    message.owner = object.owner ?? "";
    message.state = object.state ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAccountsRequestAmino): QueryAccountsRequest {
    const message = createBaseQueryAccountsRequest();
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = object.scope;
    }
    if (object.xid !== undefined && object.xid !== null) {
      message.xid = object.xid;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAccountsRequest): QueryAccountsRequestAmino {
    const obj: any = {};
    obj.scope = message.scope === "" ? undefined : message.scope;
    obj.xid = message.xid === "" ? undefined : message.xid;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.state = message.state === "" ? undefined : message.state;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAccountsRequestAminoMsg): QueryAccountsRequest {
    return QueryAccountsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAccountsRequestProtoMsg): QueryAccountsRequest {
    return QueryAccountsRequest.decode(message.value);
  },
  toProto(message: QueryAccountsRequest): Uint8Array {
    return QueryAccountsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountsRequest): QueryAccountsRequestProtoMsg {
    return {
      typeUrl: "/akash.escrow.v1beta3.QueryAccountsRequest",
      value: QueryAccountsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAccountsResponse(): QueryAccountsResponse {
  return {
    accounts: [],
    pagination: undefined
  };
}
export const QueryAccountsResponse = {
  typeUrl: "/akash.escrow.v1beta3.QueryAccountsResponse",
  encode(message: QueryAccountsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accounts) {
      Account.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accounts.push(Account.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAccountsResponse {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => Account.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAccountsResponse): JsonSafe<QueryAccountsResponse> {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e ? Account.toJSON(e) : undefined);
    } else {
      obj.accounts = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAccountsResponse>): QueryAccountsResponse {
    const message = createBaseQueryAccountsResponse();
    message.accounts = object.accounts?.map(e => Account.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAccountsResponseAmino): QueryAccountsResponse {
    const message = createBaseQueryAccountsResponse();
    message.accounts = object.accounts?.map(e => Account.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAccountsResponse): QueryAccountsResponseAmino {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e ? Account.toAmino(e) : undefined);
    } else {
      obj.accounts = message.accounts;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAccountsResponseAminoMsg): QueryAccountsResponse {
    return QueryAccountsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAccountsResponseProtoMsg): QueryAccountsResponse {
    return QueryAccountsResponse.decode(message.value);
  },
  toProto(message: QueryAccountsResponse): Uint8Array {
    return QueryAccountsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountsResponse): QueryAccountsResponseProtoMsg {
    return {
      typeUrl: "/akash.escrow.v1beta3.QueryAccountsResponse",
      value: QueryAccountsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPaymentsRequest(): QueryPaymentsRequest {
  return {
    scope: "",
    xid: "",
    id: "",
    owner: "",
    state: "",
    pagination: undefined
  };
}
export const QueryPaymentsRequest = {
  typeUrl: "/akash.escrow.v1beta3.QueryPaymentsRequest",
  encode(message: QueryPaymentsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.scope !== "") {
      writer.uint32(10).string(message.scope);
    }
    if (message.xid !== "") {
      writer.uint32(18).string(message.xid);
    }
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }
    if (message.state !== "") {
      writer.uint32(42).string(message.state);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPaymentsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPaymentsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scope = reader.string();
          break;
        case 2:
          message.xid = reader.string();
          break;
        case 3:
          message.id = reader.string();
          break;
        case 4:
          message.owner = reader.string();
          break;
        case 5:
          message.state = reader.string();
          break;
        case 6:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPaymentsRequest {
    return {
      scope: isSet(object.scope) ? String(object.scope) : "",
      xid: isSet(object.xid) ? String(object.xid) : "",
      id: isSet(object.id) ? String(object.id) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      state: isSet(object.state) ? String(object.state) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryPaymentsRequest): JsonSafe<QueryPaymentsRequest> {
    const obj: any = {};
    message.scope !== undefined && (obj.scope = message.scope);
    message.xid !== undefined && (obj.xid = message.xid);
    message.id !== undefined && (obj.id = message.id);
    message.owner !== undefined && (obj.owner = message.owner);
    message.state !== undefined && (obj.state = message.state);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryPaymentsRequest>): QueryPaymentsRequest {
    const message = createBaseQueryPaymentsRequest();
    message.scope = object.scope ?? "";
    message.xid = object.xid ?? "";
    message.id = object.id ?? "";
    message.owner = object.owner ?? "";
    message.state = object.state ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPaymentsRequestAmino): QueryPaymentsRequest {
    const message = createBaseQueryPaymentsRequest();
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = object.scope;
    }
    if (object.xid !== undefined && object.xid !== null) {
      message.xid = object.xid;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPaymentsRequest): QueryPaymentsRequestAmino {
    const obj: any = {};
    obj.scope = message.scope === "" ? undefined : message.scope;
    obj.xid = message.xid === "" ? undefined : message.xid;
    obj.id = message.id === "" ? undefined : message.id;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.state = message.state === "" ? undefined : message.state;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPaymentsRequestAminoMsg): QueryPaymentsRequest {
    return QueryPaymentsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPaymentsRequestProtoMsg): QueryPaymentsRequest {
    return QueryPaymentsRequest.decode(message.value);
  },
  toProto(message: QueryPaymentsRequest): Uint8Array {
    return QueryPaymentsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPaymentsRequest): QueryPaymentsRequestProtoMsg {
    return {
      typeUrl: "/akash.escrow.v1beta3.QueryPaymentsRequest",
      value: QueryPaymentsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPaymentsResponse(): QueryPaymentsResponse {
  return {
    payments: [],
    pagination: undefined
  };
}
export const QueryPaymentsResponse = {
  typeUrl: "/akash.escrow.v1beta3.QueryPaymentsResponse",
  encode(message: QueryPaymentsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.payments) {
      FractionalPayment.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPaymentsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPaymentsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payments.push(FractionalPayment.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPaymentsResponse {
    return {
      payments: Array.isArray(object?.payments) ? object.payments.map((e: any) => FractionalPayment.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryPaymentsResponse): JsonSafe<QueryPaymentsResponse> {
    const obj: any = {};
    if (message.payments) {
      obj.payments = message.payments.map(e => e ? FractionalPayment.toJSON(e) : undefined);
    } else {
      obj.payments = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryPaymentsResponse>): QueryPaymentsResponse {
    const message = createBaseQueryPaymentsResponse();
    message.payments = object.payments?.map(e => FractionalPayment.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPaymentsResponseAmino): QueryPaymentsResponse {
    const message = createBaseQueryPaymentsResponse();
    message.payments = object.payments?.map(e => FractionalPayment.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPaymentsResponse): QueryPaymentsResponseAmino {
    const obj: any = {};
    if (message.payments) {
      obj.payments = message.payments.map(e => e ? FractionalPayment.toAmino(e) : undefined);
    } else {
      obj.payments = message.payments;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPaymentsResponseAminoMsg): QueryPaymentsResponse {
    return QueryPaymentsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPaymentsResponseProtoMsg): QueryPaymentsResponse {
    return QueryPaymentsResponse.decode(message.value);
  },
  toProto(message: QueryPaymentsResponse): Uint8Array {
    return QueryPaymentsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPaymentsResponse): QueryPaymentsResponseProtoMsg {
    return {
      typeUrl: "/akash.escrow.v1beta3.QueryPaymentsResponse",
      value: QueryPaymentsResponse.encode(message).finish()
    };
  }
};