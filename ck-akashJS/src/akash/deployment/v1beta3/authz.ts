import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
/**
 * DepositDeploymentAuthorization allows the grantee to deposit up to spend_limit coins from
 * the granter's account for a deployment.
 */
export interface DepositDeploymentAuthorization {
  $typeUrl?: "/akash.deployment.v1beta3.DepositDeploymentAuthorization";
  /**
   * SpendLimit is the amount the grantee is authorized to spend from the granter's account for
   * the purpose of deployment.
   */
  spendLimit: Coin | undefined;
}
export interface DepositDeploymentAuthorizationProtoMsg {
  typeUrl: "/akash.deployment.v1beta3.DepositDeploymentAuthorization";
  value: Uint8Array;
}
/**
 * DepositDeploymentAuthorization allows the grantee to deposit up to spend_limit coins from
 * the granter's account for a deployment.
 */
export interface DepositDeploymentAuthorizationAmino {
  /**
   * SpendLimit is the amount the grantee is authorized to spend from the granter's account for
   * the purpose of deployment.
   */
  spend_limit: CoinAmino | undefined;
}
export interface DepositDeploymentAuthorizationAminoMsg {
  type: "/akash.deployment.v1beta3.DepositDeploymentAuthorization";
  value: DepositDeploymentAuthorizationAmino;
}
/**
 * DepositDeploymentAuthorization allows the grantee to deposit up to spend_limit coins from
 * the granter's account for a deployment.
 */
export interface DepositDeploymentAuthorizationSDKType {
  $typeUrl?: "/akash.deployment.v1beta3.DepositDeploymentAuthorization";
  spend_limit: CoinSDKType | undefined;
}
function createBaseDepositDeploymentAuthorization(): DepositDeploymentAuthorization {
  return {
    $typeUrl: "/akash.deployment.v1beta3.DepositDeploymentAuthorization",
    spendLimit: Coin.fromPartial({})
  };
}
export const DepositDeploymentAuthorization = {
  typeUrl: "/akash.deployment.v1beta3.DepositDeploymentAuthorization",
  encode(message: DepositDeploymentAuthorization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spendLimit !== undefined) {
      Coin.encode(message.spendLimit, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): DepositDeploymentAuthorization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositDeploymentAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spendLimit = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DepositDeploymentAuthorization {
    return {
      spendLimit: isSet(object.spendLimit) ? Coin.fromJSON(object.spendLimit) : undefined
    };
  },
  toJSON(message: DepositDeploymentAuthorization): JsonSafe<DepositDeploymentAuthorization> {
    const obj: any = {};
    message.spendLimit !== undefined && (obj.spendLimit = message.spendLimit ? Coin.toJSON(message.spendLimit) : undefined);
    return obj;
  },
  fromPartial(object: Partial<DepositDeploymentAuthorization>): DepositDeploymentAuthorization {
    const message = createBaseDepositDeploymentAuthorization();
    message.spendLimit = object.spendLimit !== undefined && object.spendLimit !== null ? Coin.fromPartial(object.spendLimit) : undefined;
    return message;
  },
  fromAmino(object: DepositDeploymentAuthorizationAmino): DepositDeploymentAuthorization {
    const message = createBaseDepositDeploymentAuthorization();
    if (object.spend_limit !== undefined && object.spend_limit !== null) {
      message.spendLimit = Coin.fromAmino(object.spend_limit);
    }
    return message;
  },
  toAmino(message: DepositDeploymentAuthorization): DepositDeploymentAuthorizationAmino {
    const obj: any = {};
    obj.spend_limit = message.spendLimit ? Coin.toAmino(message.spendLimit) : Coin.toAmino(Coin.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: DepositDeploymentAuthorizationAminoMsg): DepositDeploymentAuthorization {
    return DepositDeploymentAuthorization.fromAmino(object.value);
  },
  fromProtoMsg(message: DepositDeploymentAuthorizationProtoMsg): DepositDeploymentAuthorization {
    return DepositDeploymentAuthorization.decode(message.value);
  },
  toProto(message: DepositDeploymentAuthorization): Uint8Array {
    return DepositDeploymentAuthorization.encode(message).finish();
  },
  toProtoMsg(message: DepositDeploymentAuthorization): DepositDeploymentAuthorizationProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta3.DepositDeploymentAuthorization",
      value: DepositDeploymentAuthorization.encode(message).finish()
    };
  }
};