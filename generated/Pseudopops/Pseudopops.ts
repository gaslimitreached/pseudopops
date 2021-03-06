// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get approved(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class NameChanged extends ethereum.Event {
  get params(): NameChanged__Params {
    return new NameChanged__Params(this);
  }
}

export class NameChanged__Params {
  _event: NameChanged;

  constructor(event: NameChanged) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get newName(): string {
    return this._event.parameters[1].value.toString();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class SodaPoured extends ethereum.Event {
  get params(): SodaPoured__Params {
    return new SodaPoured__Params(this);
  }
}

export class SodaPoured__Params {
  _event: SodaPoured;

  constructor(event: SodaPoured) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get fizz(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Pseudopops__sodasResult {
  value0: string;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;

  constructor(
    value0: string,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromString(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    return map;
  }
}

export class Pseudopops extends ethereum.SmartContract {
  static bind(address: Address): Pseudopops {
    return new Pseudopops("Pseudopops", address);
  }

  NAMECHANGEPRICE(): BigInt {
    let result = super.call(
      "NAMECHANGEPRICE",
      "NAMECHANGEPRICE():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_NAMECHANGEPRICE(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "NAMECHANGEPRICE",
      "NAMECHANGEPRICE():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  SHAKEITUPPRICE(): BigInt {
    let result = super.call("SHAKEITUPPRICE", "SHAKEITUPPRICE():(uint256)", []);

    return result[0].toBigInt();
  }

  try_SHAKEITUPPRICE(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "SHAKEITUPPRICE",
      "SHAKEITUPPRICE():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  appsus(): Address {
    let result = super.call("appsus", "appsus():(address)", []);

    return result[0].toAddress();
  }

  try_appsus(): ethereum.CallResult<Address> {
    let result = super.tryCall("appsus", "appsus():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  balanceOf(owner: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  bottleCaps(): Address {
    let result = super.call("bottleCaps", "bottleCaps():(address)", []);

    return result[0].toAddress();
  }

  try_bottleCaps(): ethereum.CallResult<Address> {
    let result = super.tryCall("bottleCaps", "bottleCaps():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  burn(): Address {
    let result = super.call("burn", "burn():(address)", []);

    return result[0].toAddress();
  }

  try_burn(): ethereum.CallResult<Address> {
    let result = super.tryCall("burn", "burn():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  cache(): Address {
    let result = super.call("cache", "cache():(address)", []);

    return result[0].toAddress();
  }

  try_cache(): ethereum.CallResult<Address> {
    let result = super.tryCall("cache", "cache():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getApproved(tokenId: BigInt): Address {
    let result = super.call("getApproved", "getApproved(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_getApproved(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getApproved",
      "getApproved(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  gremblo(): Address {
    let result = super.call("gremblo", "gremblo():(address)", []);

    return result[0].toAddress();
  }

  try_gremblo(): ethereum.CallResult<Address> {
    let result = super.tryCall("gremblo", "gremblo():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isApprovedForAll(owner: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    owner: Address,
    operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isNameReserved(str: string): boolean {
    let result = super.call("isNameReserved", "isNameReserved(string):(bool)", [
      ethereum.Value.fromString(str)
    ]);

    return result[0].toBoolean();
  }

  try_isNameReserved(str: string): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isNameReserved",
      "isNameReserved(string):(bool)",
      [ethereum.Value.fromString(str)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  maxPerTx(): BigInt {
    let result = super.call("maxPerTx", "maxPerTx():(uint256)", []);

    return result[0].toBigInt();
  }

  try_maxPerTx(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("maxPerTx", "maxPerTx():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  maxSupply(): BigInt {
    let result = super.call("maxSupply", "maxSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_maxSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("maxSupply", "maxSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  ownerOf(tokenId: BigInt): Address {
    let result = super.call("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_ownerOf(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  priceToMint(): BigInt {
    let result = super.call("priceToMint", "priceToMint():(uint256)", []);

    return result[0].toBigInt();
  }

  try_priceToMint(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("priceToMint", "priceToMint():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  sodaCount(param0: Address): BigInt {
    let result = super.call("sodaCount", "sodaCount(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBigInt();
  }

  try_sodaCount(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("sodaCount", "sodaCount(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  sodas(param0: BigInt): Pseudopops__sodasResult {
    let result = super.call(
      "sodas",
      "sodas(uint256):(string,uint256,uint256,uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new Pseudopops__sodasResult(
      result[0].toString(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt()
    );
  }

  try_sodas(param0: BigInt): ethereum.CallResult<Pseudopops__sodasResult> {
    let result = super.tryCall(
      "sodas",
      "sodas(uint256):(string,uint256,uint256,uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Pseudopops__sodasResult(
        value[0].toString(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBigInt()
      )
    );
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  toLower(str: string): string {
    let result = super.call("toLower", "toLower(string):(string)", [
      ethereum.Value.fromString(str)
    ]);

    return result[0].toString();
  }

  try_toLower(str: string): ethereum.CallResult<string> {
    let result = super.tryCall("toLower", "toLower(string):(string)", [
      ethereum.Value.fromString(str)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  tokenByIndex(index: BigInt): BigInt {
    let result = super.call("tokenByIndex", "tokenByIndex(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(index)
    ]);

    return result[0].toBigInt();
  }

  try_tokenByIndex(index: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenByIndex",
      "tokenByIndex(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(index)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenNameByIndex(index: BigInt): string {
    let result = super.call(
      "tokenNameByIndex",
      "tokenNameByIndex(uint256):(string)",
      [ethereum.Value.fromUnsignedBigInt(index)]
    );

    return result[0].toString();
  }

  try_tokenNameByIndex(index: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall(
      "tokenNameByIndex",
      "tokenNameByIndex(uint256):(string)",
      [ethereum.Value.fromUnsignedBigInt(index)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  tokenOfOwnerByIndex(owner: Address, index: BigInt): BigInt {
    let result = super.call(
      "tokenOfOwnerByIndex",
      "tokenOfOwnerByIndex(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(owner),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );

    return result[0].toBigInt();
  }

  try_tokenOfOwnerByIndex(
    owner: Address,
    index: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenOfOwnerByIndex",
      "tokenOfOwnerByIndex(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(owner),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenURI(tokenId: BigInt): string {
    let result = super.call("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toString();
  }

  try_tokenURI(tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }
}

export class ChangeNameCall extends ethereum.Call {
  get inputs(): ChangeNameCall__Inputs {
    return new ChangeNameCall__Inputs(this);
  }

  get outputs(): ChangeNameCall__Outputs {
    return new ChangeNameCall__Outputs(this);
  }
}

export class ChangeNameCall__Inputs {
  _call: ChangeNameCall;

  constructor(call: ChangeNameCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _name(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class ChangeNameCall__Outputs {
  _call: ChangeNameCall;

  constructor(call: ChangeNameCall) {
    this._call = call;
  }
}

export class ClaimCapsCall extends ethereum.Call {
  get inputs(): ClaimCapsCall__Inputs {
    return new ClaimCapsCall__Inputs(this);
  }

  get outputs(): ClaimCapsCall__Outputs {
    return new ClaimCapsCall__Outputs(this);
  }
}

export class ClaimCapsCall__Inputs {
  _call: ClaimCapsCall;

  constructor(call: ClaimCapsCall) {
    this._call = call;
  }
}

export class ClaimCapsCall__Outputs {
  _call: ClaimCapsCall;

  constructor(call: ClaimCapsCall) {
    this._call = call;
  }
}

export class MultiCoinMechanismCall extends ethereum.Call {
  get inputs(): MultiCoinMechanismCall__Inputs {
    return new MultiCoinMechanismCall__Inputs(this);
  }

  get outputs(): MultiCoinMechanismCall__Outputs {
    return new MultiCoinMechanismCall__Outputs(this);
  }
}

export class MultiCoinMechanismCall__Inputs {
  _call: MultiCoinMechanismCall;

  constructor(call: MultiCoinMechanismCall) {
    this._call = call;
  }
}

export class MultiCoinMechanismCall__Outputs {
  _call: MultiCoinMechanismCall;

  constructor(call: MultiCoinMechanismCall) {
    this._call = call;
  }
}

export class PourCall extends ethereum.Call {
  get inputs(): PourCall__Inputs {
    return new PourCall__Inputs(this);
  }

  get outputs(): PourCall__Outputs {
    return new PourCall__Outputs(this);
  }
}

export class PourCall__Inputs {
  _call: PourCall;

  constructor(call: PourCall) {
    this._call = call;
  }

  get num(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class PourCall__Outputs {
  _call: PourCall;

  constructor(call: PourCall) {
    this._call = call;
  }
}

export class PourOneOutForDaHommiesCall extends ethereum.Call {
  get inputs(): PourOneOutForDaHommiesCall__Inputs {
    return new PourOneOutForDaHommiesCall__Inputs(this);
  }

  get outputs(): PourOneOutForDaHommiesCall__Outputs {
    return new PourOneOutForDaHommiesCall__Outputs(this);
  }
}

export class PourOneOutForDaHommiesCall__Inputs {
  _call: PourOneOutForDaHommiesCall;

  constructor(call: PourOneOutForDaHommiesCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class PourOneOutForDaHommiesCall__Outputs {
  _call: PourOneOutForDaHommiesCall;

  constructor(call: PourOneOutForDaHommiesCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFrom1Call extends ethereum.Call {
  get inputs(): SafeTransferFrom1Call__Inputs {
    return new SafeTransferFrom1Call__Inputs(this);
  }

  get outputs(): SafeTransferFrom1Call__Outputs {
    return new SafeTransferFrom1Call__Outputs(this);
  }
}

export class SafeTransferFrom1Call__Inputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SafeTransferFrom1Call__Outputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class SetCapTokenCall extends ethereum.Call {
  get inputs(): SetCapTokenCall__Inputs {
    return new SetCapTokenCall__Inputs(this);
  }

  get outputs(): SetCapTokenCall__Outputs {
    return new SetCapTokenCall__Outputs(this);
  }
}

export class SetCapTokenCall__Inputs {
  _call: SetCapTokenCall;

  constructor(call: SetCapTokenCall) {
    this._call = call;
  }

  get _address(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetCapTokenCall__Outputs {
  _call: SetCapTokenCall;

  constructor(call: SetCapTokenCall) {
    this._call = call;
  }
}

export class ShakeItUpForNowTatllDOCall extends ethereum.Call {
  get inputs(): ShakeItUpForNowTatllDOCall__Inputs {
    return new ShakeItUpForNowTatllDOCall__Inputs(this);
  }

  get outputs(): ShakeItUpForNowTatllDOCall__Outputs {
    return new ShakeItUpForNowTatllDOCall__Outputs(this);
  }
}

export class ShakeItUpForNowTatllDOCall__Inputs {
  _call: ShakeItUpForNowTatllDOCall;

  constructor(call: ShakeItUpForNowTatllDOCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ShakeItUpForNowTatllDOCall__Outputs {
  _call: ShakeItUpForNowTatllDOCall;

  constructor(call: ShakeItUpForNowTatllDOCall) {
    this._call = call;
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}
