//@ts-nocheck
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../../helpers";
import { JsonSafe } from "../../../../../json-safe";
/**
 * Quantity is a fixed-point representation of a number.
 * It provides convenient marshaling/unmarshaling in JSON and YAML,
 * in addition to String() and AsInt64() accessors.
 * 
 * The serialization format is:
 * 
 * ```
 * <quantity>        ::= <signedNumber><suffix>
 * 
 * 	(Note that <suffix> may be empty, from the "" case in <decimalSI>.)
 * 
 * <digit>           ::= 0 | 1 | ... | 9
 * <digits>          ::= <digit> | <digit><digits>
 * <number>          ::= <digits> | <digits>.<digits> | <digits>. | .<digits>
 * <sign>            ::= "+" | "-"
 * <signedNumber>    ::= <number> | <sign><number>
 * <suffix>          ::= <binarySI> | <decimalExponent> | <decimalSI>
 * <binarySI>        ::= Ki | Mi | Gi | Ti | Pi | Ei
 * 
 * 	(International System of units; See: http://physics.nist.gov/cuu/Units/binary.html)
 * 
 * <decimalSI>       ::= m | "" | k | M | G | T | P | E
 * 
 * 	(Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.)
 * 
 * <decimalExponent> ::= "e" <signedNumber> | "E" <signedNumber>
 * ```
 * 
 * No matter which of the three exponent forms is used, no quantity may represent
 * a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal
 * places. Numbers larger or more precise will be capped or rounded up.
 * (E.g.: 0.1m will rounded up to 1m.)
 * This may be extended in the future if we require larger or smaller quantities.
 * 
 * When a Quantity is parsed from a string, it will remember the type of suffix
 * it had, and will use the same type again when it is serialized.
 * 
 * Before serializing, Quantity will be put in "canonical form".
 * This means that Exponent/suffix will be adjusted up or down (with a
 * corresponding increase or decrease in Mantissa) such that:
 * 
 * - No precision is lost
 * - No fractional digits will be emitted
 * - The exponent (or suffix) is as large as possible.
 * 
 * The sign will be omitted unless the number is negative.
 * 
 * Examples:
 * 
 * - 1.5 will be serialized as "1500m"
 * - 1.5Gi will be serialized as "1536Mi"
 * 
 * Note that the quantity will NEVER be internally represented by a
 * floating point number. That is the whole point of this exercise.
 * 
 * Non-canonical values will still parse as long as they are well formed,
 * but will be re-emitted in their canonical form. (So always use canonical
 * form, or don't diff.)
 * 
 * This format is intended to make it difficult to use these numbers without
 * writing some sort of special handling code in the hopes that that will
 * cause implementors to also use a fixed point implementation.
 * 
 * +protobuf=true
 * +protobuf.embed=string
 * +protobuf.options.marshal=false
 * +protobuf.options.(gogoproto.goproto_stringer)=false
 * +k8s:deepcopy-gen=true
 * +k8s:openapi-gen=true
 */
export interface Quantity {
  string: string;
}
export interface QuantityProtoMsg {
  typeUrl: "/k8s.io.apimachinery.pkg.api.resource.Quantity";
  value: Uint8Array;
}
/**
 * Quantity is a fixed-point representation of a number.
 * It provides convenient marshaling/unmarshaling in JSON and YAML,
 * in addition to String() and AsInt64() accessors.
 * 
 * The serialization format is:
 * 
 * ```
 * <quantity>        ::= <signedNumber><suffix>
 * 
 * 	(Note that <suffix> may be empty, from the "" case in <decimalSI>.)
 * 
 * <digit>           ::= 0 | 1 | ... | 9
 * <digits>          ::= <digit> | <digit><digits>
 * <number>          ::= <digits> | <digits>.<digits> | <digits>. | .<digits>
 * <sign>            ::= "+" | "-"
 * <signedNumber>    ::= <number> | <sign><number>
 * <suffix>          ::= <binarySI> | <decimalExponent> | <decimalSI>
 * <binarySI>        ::= Ki | Mi | Gi | Ti | Pi | Ei
 * 
 * 	(International System of units; See: http://physics.nist.gov/cuu/Units/binary.html)
 * 
 * <decimalSI>       ::= m | "" | k | M | G | T | P | E
 * 
 * 	(Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.)
 * 
 * <decimalExponent> ::= "e" <signedNumber> | "E" <signedNumber>
 * ```
 * 
 * No matter which of the three exponent forms is used, no quantity may represent
 * a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal
 * places. Numbers larger or more precise will be capped or rounded up.
 * (E.g.: 0.1m will rounded up to 1m.)
 * This may be extended in the future if we require larger or smaller quantities.
 * 
 * When a Quantity is parsed from a string, it will remember the type of suffix
 * it had, and will use the same type again when it is serialized.
 * 
 * Before serializing, Quantity will be put in "canonical form".
 * This means that Exponent/suffix will be adjusted up or down (with a
 * corresponding increase or decrease in Mantissa) such that:
 * 
 * - No precision is lost
 * - No fractional digits will be emitted
 * - The exponent (or suffix) is as large as possible.
 * 
 * The sign will be omitted unless the number is negative.
 * 
 * Examples:
 * 
 * - 1.5 will be serialized as "1500m"
 * - 1.5Gi will be serialized as "1536Mi"
 * 
 * Note that the quantity will NEVER be internally represented by a
 * floating point number. That is the whole point of this exercise.
 * 
 * Non-canonical values will still parse as long as they are well formed,
 * but will be re-emitted in their canonical form. (So always use canonical
 * form, or don't diff.)
 * 
 * This format is intended to make it difficult to use these numbers without
 * writing some sort of special handling code in the hopes that that will
 * cause implementors to also use a fixed point implementation.
 * 
 * +protobuf=true
 * +protobuf.embed=string
 * +protobuf.options.marshal=false
 * +protobuf.options.(gogoproto.goproto_stringer)=false
 * +k8s:deepcopy-gen=true
 * +k8s:openapi-gen=true
 */
export interface QuantityAmino {
  string?: string;
}
export interface QuantityAminoMsg {
  type: "/k8s.io.apimachinery.pkg.api.resource.Quantity";
  value: QuantityAmino;
}
/**
 * Quantity is a fixed-point representation of a number.
 * It provides convenient marshaling/unmarshaling in JSON and YAML,
 * in addition to String() and AsInt64() accessors.
 * 
 * The serialization format is:
 * 
 * ```
 * <quantity>        ::= <signedNumber><suffix>
 * 
 * 	(Note that <suffix> may be empty, from the "" case in <decimalSI>.)
 * 
 * <digit>           ::= 0 | 1 | ... | 9
 * <digits>          ::= <digit> | <digit><digits>
 * <number>          ::= <digits> | <digits>.<digits> | <digits>. | .<digits>
 * <sign>            ::= "+" | "-"
 * <signedNumber>    ::= <number> | <sign><number>
 * <suffix>          ::= <binarySI> | <decimalExponent> | <decimalSI>
 * <binarySI>        ::= Ki | Mi | Gi | Ti | Pi | Ei
 * 
 * 	(International System of units; See: http://physics.nist.gov/cuu/Units/binary.html)
 * 
 * <decimalSI>       ::= m | "" | k | M | G | T | P | E
 * 
 * 	(Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.)
 * 
 * <decimalExponent> ::= "e" <signedNumber> | "E" <signedNumber>
 * ```
 * 
 * No matter which of the three exponent forms is used, no quantity may represent
 * a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal
 * places. Numbers larger or more precise will be capped or rounded up.
 * (E.g.: 0.1m will rounded up to 1m.)
 * This may be extended in the future if we require larger or smaller quantities.
 * 
 * When a Quantity is parsed from a string, it will remember the type of suffix
 * it had, and will use the same type again when it is serialized.
 * 
 * Before serializing, Quantity will be put in "canonical form".
 * This means that Exponent/suffix will be adjusted up or down (with a
 * corresponding increase or decrease in Mantissa) such that:
 * 
 * - No precision is lost
 * - No fractional digits will be emitted
 * - The exponent (or suffix) is as large as possible.
 * 
 * The sign will be omitted unless the number is negative.
 * 
 * Examples:
 * 
 * - 1.5 will be serialized as "1500m"
 * - 1.5Gi will be serialized as "1536Mi"
 * 
 * Note that the quantity will NEVER be internally represented by a
 * floating point number. That is the whole point of this exercise.
 * 
 * Non-canonical values will still parse as long as they are well formed,
 * but will be re-emitted in their canonical form. (So always use canonical
 * form, or don't diff.)
 * 
 * This format is intended to make it difficult to use these numbers without
 * writing some sort of special handling code in the hopes that that will
 * cause implementors to also use a fixed point implementation.
 * 
 * +protobuf=true
 * +protobuf.embed=string
 * +protobuf.options.marshal=false
 * +protobuf.options.(gogoproto.goproto_stringer)=false
 * +k8s:deepcopy-gen=true
 * +k8s:openapi-gen=true
 */
export interface QuantitySDKType {
  string: string;
}
/**
 * QuantityValue makes it possible to use a Quantity as value for a command
 * line parameter.
 * 
 * +protobuf=true
 * +protobuf.embed=string
 * +protobuf.options.marshal=false
 * +protobuf.options.(gogoproto.goproto_stringer)=false
 * +k8s:deepcopy-gen=true
 */
export interface QuantityValue {
  string: string;
}
export interface QuantityValueProtoMsg {
  typeUrl: "/k8s.io.apimachinery.pkg.api.resource.QuantityValue";
  value: Uint8Array;
}
/**
 * QuantityValue makes it possible to use a Quantity as value for a command
 * line parameter.
 * 
 * +protobuf=true
 * +protobuf.embed=string
 * +protobuf.options.marshal=false
 * +protobuf.options.(gogoproto.goproto_stringer)=false
 * +k8s:deepcopy-gen=true
 */
export interface QuantityValueAmino {
  string?: string;
}
export interface QuantityValueAminoMsg {
  type: "/k8s.io.apimachinery.pkg.api.resource.QuantityValue";
  value: QuantityValueAmino;
}
/**
 * QuantityValue makes it possible to use a Quantity as value for a command
 * line parameter.
 * 
 * +protobuf=true
 * +protobuf.embed=string
 * +protobuf.options.marshal=false
 * +protobuf.options.(gogoproto.goproto_stringer)=false
 * +k8s:deepcopy-gen=true
 */
export interface QuantityValueSDKType {
  string: string;
}
function createBaseQuantity(): Quantity {
  return {
    string: ""
  };
}
export const Quantity = {
  typeUrl: "/k8s.io.apimachinery.pkg.api.resource.Quantity",
  encode(message: Quantity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.string !== "") {
      writer.uint32(10).string(message.string);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Quantity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuantity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.string = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Quantity {
    return {
      string: isSet(object.string) ? String(object.string) : ""
    };
  },
  toJSON(message: Quantity): JsonSafe<Quantity> {
    const obj: any = {};
    message.string !== undefined && (obj.string = message.string);
    return obj;
  },
  fromPartial(object: Partial<Quantity>): Quantity {
    const message = createBaseQuantity();
    message.string = object.string ?? "";
    return message;
  },
  fromAmino(object: QuantityAmino): Quantity {
    const message = createBaseQuantity();
    if (object.string !== undefined && object.string !== null) {
      message.string = object.string;
    }
    return message;
  },
  toAmino(message: Quantity): QuantityAmino {
    const obj: any = {};
    obj.string = message.string === "" ? undefined : message.string;
    return obj;
  },
  fromAminoMsg(object: QuantityAminoMsg): Quantity {
    return Quantity.fromAmino(object.value);
  },
  fromProtoMsg(message: QuantityProtoMsg): Quantity {
    return Quantity.decode(message.value);
  },
  toProto(message: Quantity): Uint8Array {
    return Quantity.encode(message).finish();
  },
  toProtoMsg(message: Quantity): QuantityProtoMsg {
    return {
      typeUrl: "/k8s.io.apimachinery.pkg.api.resource.Quantity",
      value: Quantity.encode(message).finish()
    };
  }
};
function createBaseQuantityValue(): QuantityValue {
  return {
    string: ""
  };
}
export const QuantityValue = {
  typeUrl: "/k8s.io.apimachinery.pkg.api.resource.QuantityValue",
  encode(message: QuantityValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.string !== "") {
      writer.uint32(10).string(message.string);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuantityValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuantityValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.string = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuantityValue {
    return {
      string: isSet(object.string) ? String(object.string) : ""
    };
  },
  toJSON(message: QuantityValue): JsonSafe<QuantityValue> {
    const obj: any = {};
    message.string !== undefined && (obj.string = message.string);
    return obj;
  },
  fromPartial(object: Partial<QuantityValue>): QuantityValue {
    const message = createBaseQuantityValue();
    message.string = object.string ?? "";
    return message;
  },
  fromAmino(object: QuantityValueAmino): QuantityValue {
    const message = createBaseQuantityValue();
    if (object.string !== undefined && object.string !== null) {
      message.string = object.string;
    }
    return message;
  },
  toAmino(message: QuantityValue): QuantityValueAmino {
    const obj: any = {};
    obj.string = message.string === "" ? undefined : message.string;
    return obj;
  },
  fromAminoMsg(object: QuantityValueAminoMsg): QuantityValue {
    return QuantityValue.fromAmino(object.value);
  },
  fromProtoMsg(message: QuantityValueProtoMsg): QuantityValue {
    return QuantityValue.decode(message.value);
  },
  toProto(message: QuantityValue): Uint8Array {
    return QuantityValue.encode(message).finish();
  },
  toProtoMsg(message: QuantityValue): QuantityValueProtoMsg {
    return {
      typeUrl: "/k8s.io.apimachinery.pkg.api.resource.QuantityValue",
      value: QuantityValue.encode(message).finish()
    };
  }
};